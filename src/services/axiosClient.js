import axios from 'axios';

const axiosClient = axios.create({
     baseURL: process.env.REACT_APP_BACKEND_URL,
     headers: {
            'Content-Type': 'application/json',
     }
})

axiosClient.interceptors.request.use(async (config) => {
    const { accessToken, expiry } = JSON.parse(localStorage.getItem('oauth')) || {};

    if (accessToken != {} && expiry != {}  && (new Date(expiry) < new Date())) {
        config.headers.oauth_token = accessToken;
    }

    else {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/oauth/token`, {
            client_id: process.env.REACT_APP_OAUTH_CLIENT_ID,
            client_secret: process.env.REACT_APP_OAUTH_CLIENT_SECRET,
        });

        config.headers.oauth_token = response.data.access_token;
        localStorage.setItem('oauth', JSON.stringify({
            accessToken: response.data.access_token,
            expiry: response.data.expires_in,
        }));

    }
    return config;
})

export default axiosClient;