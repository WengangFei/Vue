import * as jose from "jose";

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
            callback: (response) => {
                try {
                const credential = jose.decodeJwt(response.credential);
                this.setUpUser(credential);
                //confirm user sign in
                localStorage.setItem("googleToken", JSON.stringify({
                    token:response.credential,
                    expirationTime:new Date(credential.exp * 1000).toLocaleString()
                }))
                } catch (error) {
                console.log("Google sign in error ==>", error);
                }
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
}

export { User }