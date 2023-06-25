import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `http://openapi.seoul.go.kr:8088/4b454e53496d696e3938677063524f`,
  timeout: 8000,
  headers: {
    'Content-type': 'application/json',
  },
});

export default axiosClient;
