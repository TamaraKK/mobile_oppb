import axios from 'axios'


const API_URL = "https://userauth.sevquad.tech"
const axiosInstance = axios.create({ baseURL: API_URL })


export { axiosInstance }