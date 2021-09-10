import api from '../services/api';
import {getToken} from './getToken.js'

export async function Authenticate(username, password) {
  console.log(username,password)
    return await api.post('/auth/', {
      username: username,
      password: password,
    })
}
export async function checkAuth() {
    return await api.get('/',  await getToken())
}