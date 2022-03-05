import axios from "axios";

// shared harusnya dalam src (setara pages)
const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

export default client