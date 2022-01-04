import axios from "axios";

axios.defaults.baseURL = 'http://test1.foilsurfcamps.com/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');