class User{
    constructor(cre){
        this.name = cre.name,
        this.email = cre.email,
        this.client_id = cre.aud,
        this.expire_time = new Date(cre.exp * 1000).toLocaleString(),// convert Unix time to human-readable time
        this.issued_time = new Date(cre.iat * 1000).toLocaleString(),
        this.not_before_time = new Date(cre.nbf * 1000).toLocaleString(),
        this.user_id = cre.sub,//The unique identifier for the user, typically a string of digits representing the user’s Google account ID.
        this.user_image = cre.picture,
        this.JWT_id = cre.jti //A unique identifier for the token, used to prevent replay attacks.
    }

    setLocalStorage(cre){
        const localToken = JSON.parse(window.localStorage.getItem('googleToken'));
        const localTokenExpireTime = new Date(localToken.expireTime);
        // console.log('time ==>',localTokenExpireTime > new Date())
        //   console.log('next time ==>',new Date() > localTokenExpireTime)
        // console.log('Now ==>',new Date());
        // console.log('Local stored time ==>',localTokenExpireTime)
        if(!localToken){
            window.localStorage.setItem('googleToken',JSON.stringify({
                expireTime: this.expire_time,
                userToken: cre,
                
            }))
        }

    }
}

export { User }