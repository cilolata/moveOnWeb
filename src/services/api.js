import axios from 'axios';

const api = axios.create({
    baseURL: 'http://159.203.186.16',
    // baseURL: 'http://localhost:3333',
});

export default api;
