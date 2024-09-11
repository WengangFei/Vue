import serverConfig from './serverConfig.json';

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(serverConfig.dev.client_id);

async function exchangeIdTokenForAccessToken(idToken){
    //verify id token
    const ticket = await client.verifyIdToken({
        idToken: idToken,
        audience: serverConfig.dev.client_id,
    })

    const payload = ticket.getPayload();
    const userid = payload['sub'];

    // Use the user ID and other information to exchange for an access token
    const oauth2Client = new oauth2Client(
        //client id
        serverConfig.dev.client_id,
        //client secret
        serverConfig.dev.client_secret,
        //redirect_uri
        'http://localhost:5173/auth/callback',

    )

    const { tokens } = await oauth2Client.getToken({

    })
}

