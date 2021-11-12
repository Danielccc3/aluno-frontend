import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://alunos-back-dcorrea.herokuapp.com'
})
 
export default api;
