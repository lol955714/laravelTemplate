import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const instancia = (url) => axios.create({
  baseURL: url,
  timeout: 8000,
  headers: {
    Referer: url,
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  },
});

export default instancia;
