import api from '../services/api';
import {getToken} from './getToken.js'

export async function Authenticate(email, password) {
    return await api.post('/auth/', {
      username: email,
      password: password,
    })
}
export async function checkAuth() {
    return await api.get('/',  await getToken())
}