import axios from 'axios';
import * as process from 'process';

const geocodeAxiosClient = axios.create({
  baseURL: `https://maps.googleapis.com/maps/api/geocode/`,
  timeout: 8000,
  headers: {
    'Content-type': 'application/json',
  },
});

export default geocodeAxiosClient;
