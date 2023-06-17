import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  timeout: 8000,
  headers: {
    'Content-type': 'application/json',
  },
  params: {
    api_key: process.env.GIPHY_API_KEY,
  },
});

export default axiosClient;
