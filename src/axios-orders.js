import axios from "axios";

const instance = axios.create(
    {baseURL:'https://burger-app-d40ab.firebaseio.com/'} 
);

export default instance;