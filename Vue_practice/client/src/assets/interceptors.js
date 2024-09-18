import axios from 'axios';
import envConfig from '@/envConfigs';


// Create an Axios instance
const api = axios.create({
  baseURL: 'https//localhost:3000'
});

api.interceptors.request.use(async (config) => {
  console.log('interceptor is running ......')

  if (!isTokenExpired()) {
    console.log('chencking ....')
    await refreshTokens();
  }

  const accessToken = localStorage.getItem('accessToken');
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
}, (error) => {
  return Promise.reject(error);
});
// token expired and sent a post request to back end to request new access token with the refresh token
const refreshTokens = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  const clientId = envConfig.dev.client_id;
  const clientSecret = envConfig.dev.client_secret;
  try {
    const response = await fetch('http://localhost:3000/auth/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ refreshToken,clientId,clientSecret })
    });

    if (!response.ok) {
      throw new Error('Failed to refresh tokens');
    }
    const data = await response.json();
    console.log('response = >',data)
    storeTokenData(data.accessToken, data.idToken, data.expiresIn);
  } catch (error) {
    console.error('Error refreshing tokens:', error);
  }
};

const isTokenExpired = () => {
  const expiryTime = localStorage.getItem('tokenExpiry');
  return Date.now() > expiryTime * 1000;
};

const storeTokenData = (accessToken, idToken, expiresIn) =>{

  const expires_seconds = Math.floor((Date.now() + (expiresIn * 1000)) / 1000);
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("tokenExpiry", expires_seconds);
  localStorage.setItem("googleToken", JSON.stringify({
    token:idToken,
    expirationTime:new Date(expires_seconds * 1000).toLocaleString()
  }))

};





export default api;