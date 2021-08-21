import axios from 'axios';

const api = axios.create({
    baseURL: 'https://adb.md.utfpr.edu.br/api/data/v2/'
  });

export default api;