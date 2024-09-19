const config = require('./envConfigs.json');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
require('dotenv').config();

// const crypto = require('crypto');
// console.log(crypto.randomBytes(64).toString('hex'))

// Replace with your Google client ID
const CLIENT_ID = config.dev.client_id;
const client = new OAuth2Client(CLIENT_ID);

app.use(bodyParser.json());
app.use(express.json());
// Use CORS middleware
app.use(cors());

//verify the token
app.post('/verify-token', async (req, res) => {
  console.log('server received the post request info......');
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
    res.json({userId})
  } catch (error) {
    console.error('Error verifying token:');
    res.status(401).send('Invalid token');
     res.status(500).send('Authentication error');
  }
});

app.get('/auth/callback', async (req, res) => {
  console.log('server received the get request info......');
  const code = req.query.code;

  if (!code) {
    return res.status(400).json({ error: 'Authorization code not provided' });
  }

  try {
    const response = await axios.post('https://oauth2.googleapis.com/token', null, {
      params: {
        code,
        client_id: config.dev.client_id,
        client_secret: config.dev.client_secret,
        redirect_uri: 'http://localhost:3000/auth/callback',
        grant_type: 'authorization_code',
      },
    });

    const { access_token, refresh_token, expires_in } = response.data;
    const expires_seconds = Math.floor((Date.now() + (expires_in * 1000)) / 1000);
    // Redirect to the homepage with tokens as query parameters
     const redirectUrl = `http://localhost:5173/callback?accessToken=${access_token}&refreshToken=${refresh_token}&expiresIn=${expires_seconds}`;
    res.redirect(redirectUrl);
  } catch (error) {
    console.error('Error exchanging authorization code:');
    res.status(500).json({ error: 'Failed to exchange authorization code' });
  }
});

//Endpoint to refresh token
app.post('/auth/refresh',async (req,res)=>{
  const GOOGLE_OAUTH_TOKEN_URL = 'https://oauth2.googleapis.com/token';
  const { refreshToken, clientId, clientSecret } = req.body;

  if (!refreshToken || !clientId || !clientSecret) {
    return res.status(400).json({ message: 'Refresh token, client ID, and client secret are required' });
  }

  try {
    const response = await axios.post(GOOGLE_OAUTH_TOKEN_URL, {
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token'
    });
  // console.log('resp from server =>',response.data)
    const { access_token: newAccessToken, id_token: newIdToken, expires_in:newExpiresin } = response.data;
    res.json({ idToken: newIdToken, accessToken: newAccessToken, expiresIn:newExpiresin });
  } catch (error) {
    res.status(401).json({ message: 'Invalid refresh token or client credentials', error: error.message });
  }
}),



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});