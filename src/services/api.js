import axios from 'axios';

let baseUrl = 'https://api.themoviedb.org/3/';

const api = axios.create({
    baseURL: baseUrl
})
export default api;
