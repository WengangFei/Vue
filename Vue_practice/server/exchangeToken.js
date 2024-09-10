const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client('847596083245-o0g8vrikn0gdk21ak1s4cca45ufc995q.apps.googleusercontent.com');

async function exchangeIdTokenForAccessToken(idToken){
    //verify id token
    const ticket = await client.verifyIdToken({
        idToken: idToken,
        audience: '847596083245-o0g8vrikn0gdk21ak1s4cca45ufc995q.apps.googleusercontent.com',
    })

    const payload = ticket.getPayload();
    const userid = payload['sub'];

    // Use the user ID and other information to exchange for an access token
    const oauth2Client = new oauth2Client(
        //client id
        '847596083245-o0g8vrikn0gdk21ak1s4cca45ufc995q.apps.googleusercontent.com',
        //client secret
        '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',
        //redirect_uri
        'http://localhost:5173/auth/callback',

    )

    const { tokens } = await oauth2Client.getToken({
        
    })
}

