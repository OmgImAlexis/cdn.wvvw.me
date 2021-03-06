import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.wvvw.me/',
    timeout: 3000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api;
