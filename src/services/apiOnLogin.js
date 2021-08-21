import axios from 'axios';
const https = require('https');

const apiOnLogin = axios.create({
    baseURL: 'https://adb.md.utfpr.edu.br/api/data/v2/',
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });

export default apiOnLogin;