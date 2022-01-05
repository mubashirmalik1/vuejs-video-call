import axios from "axios";

axios.defaults.baseURL = 'https://videocall.esystemsco.com/public/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');