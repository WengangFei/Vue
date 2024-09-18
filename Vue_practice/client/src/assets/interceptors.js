import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'https//localhost:3000'
});

api.interceptors.request.use(async (config) => {
  if (isTokenExpired()) {
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

  try {
    const response = await fetch('http://localhost:3000/auth/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ refreshToken })
    });

    if (!response.ok) {
      throw new Error('Failed to refresh tokens');
    }

    const data = await response.json();
    storeTokenData(data.accessToken, data.idToken, data.refreshToken, data.expiresIn);
  } catch (error) {
    console.error('Error refreshing tokens:', error);
  }
};

const isTokenExpired = () => {
  const expiryTime = localStorage.getItem('tokenExpiry');
  return Date.now() > expiryTime * 1000;
};





export default api;