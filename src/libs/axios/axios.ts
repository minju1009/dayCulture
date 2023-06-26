import axios from 'axios';
import * as process from 'process';

const axiosClient = axios.create({
  baseURL: `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_API_KEY}`,
  timeout: 8000,
  headers: {
    'Content-type': 'application/json',
  },
});

export default axiosClient;
