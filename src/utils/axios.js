import axios from 'axios'

const apiKey = "faf7e5bb"
const url = `https://omdbapi.com/`

const axiosApi = axios.create({
    baseURL: url,
    timeout: 20000,
})


export default axiosApi