const config = require('./envConfigs.json');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const app = express();
const port = 3000;
// Replace with your Google client ID
const CLIENT_ID = config.dev.client_id;
const client = new OAuth2Client(CLIENT_ID);

app.use(bodyParser.json());
app.use(express.json());
// Use CORS middleware
app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET','POST'],
    allowedHeaders:['Content-type','Authorization']
}));

//verify the token
app.post('/verify-token', async (req, res) => {
    console.log('server received the request info......');
  const { idToken } = req.body;
  if (!idToken) {
    return res.status(400).send('Token is required');
  }

  try {
    // Verify the token
    const ticket = await client.verifyIdToken({
      idToken,
      audience: CLIENT_ID,
    });

    // Get the user info from the payload
    const payload = ticket.getPayload();
    const userId = payload['sub']; // User ID in Google
    //Exchange ID token for refresh token
    const res = await axios.post('https://oauth2.googleapis.com/token',null,{
        params:{
            client_id: CLIENT_ID,
            client_secret: config.dev.client_secret,
            grant_type: 'authorization_code',
            code: idToken,
            redirect_uri: 'http://localhost:3000/auth/callback',
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })

    const { refresh_token, access_token } = res.data;
    res.json({ refresh_token, access_token });
  } catch (error) {
    console.error('Error verifying token:');
    res.status(401).send('Invalid token');
     res.status(500).send('Authentication error');
  }
});




app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});