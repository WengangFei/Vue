import * as jose from "jose";
import { useRouter } from "vue-router";



class User{
    constructor(client_id){
        this.name = undefined,
        this.email = undefined,
        this.client_id = client_id,
        this.expire_time = undefined,
        this.issued_time = undefined,
        this.not_before_time = undefined,
        this.user_id = undefined,//The unique identifier for the user, typically a string of digits representing the user’s Google account ID.
        this.user_image = undefined,
        this.JWT_id = undefined //A unique identifier for the token, used to prevent replay attacks.
        this.isSignIn = false
    }

    initApp(){
        
        const token = JSON.parse(localStorage.getItem('googleToken'));
        if(token && new Date() < new Date(token.expirationTime)){
            this.setUpUser(jose.decodeJwt(token.token));
         
        }
        else{
            this.loginUser();
        }
    }

    setUpUser(cre){
        this.name = cre.name,
        this.email = cre.email,
        this.client_id = cre.aud,
        this.expire_time = new Date(cre.exp * 1000).toLocaleString(),// convert Unix time to human-readable time
        this.issued_time = new Date(cre.iat * 1000).toLocaleString(),
        this.not_before_time = new Date(cre.nbf * 1000).toLocaleString(),
        this.user_id = cre.sub,//The unique identifier for the user, typically a string of digits representing the user’s Google account ID.
        this.user_image = cre.picture,
        this.JWT_id = cre.jti, //A unique identifier for the token, used to prevent replay attacks.
        this.isSignIn = true
    }

    loginUser(){  
        console.log('fresh sign in')
        
    
        //initialize the Google Identity Services for JavaScript, which enables integration with Google’s authentication and authorization services.
        google.accounts.id.initialize({
            client_id: this.client_id,
            callback: async (response) => {
                //verify token
                await this.verifyToken(response.credential);//post
                //obtain the refresh token
                this.redirectToGoogle();//get
                try {
                const credential = jose.decodeJwt(response.credential);
// console.log('id-token expiry =>',credential.exp)
                this.setUpUser(credential);
                //confirm user sign in
                localStorage.setItem("googleToken", JSON.stringify({
                    token:response.credential,
                    expirationTime:new Date(credential.exp * 1000).toLocaleString()
                }))
                } catch (error) {
                console.log("Google sign in error ==>", error);
                };
                
            },
             auto_select: true,
        });
       
        google.accounts.id.prompt()
    }

    renderButton(){
        google.accounts.id.renderButton(
            document.getElementById("googleSignInButton"),
            {
                theme: "standard",
                size: "large",
                shape: "pill",
            }

        );
    }

    async redirectToGoogle(){
        const clientId = this.client_id;
        const redirectUri = 'http://localhost:3000/auth/callback'; 
        const scope = 'email profile';
        const responseType = 'code';
        const accessType = 'offline';

        const url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&access_type=${accessType}`;
        try{
            window.location.href = url;
           
        }catch(e){
            const router = useRouter();
            router.push('/');
            console.log('Can not reach to google oauth2 server.',e)
        }
    }

    async verifyToken(token){
        try{
            const res = await fetch('http://localhost:3000/verify-token',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ idToken:token })
            });

            const data = await res.json();
            console.log('Backend response:', data);
        }catch(error){
             const router = useRouter();
             router.push('/')
            console.error('Error verifying token:', error);  
        }
    };
}

export { User }