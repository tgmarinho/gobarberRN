import axios from 'axios';

const IP_ADDRESS = 'http://localhost:3333';
// const IP_EMULADOR_IOS = 'http://10.200.3.191:3333';

const api = axios.create({
  baseURL: IP_ADDRESS,
});

export default api;
