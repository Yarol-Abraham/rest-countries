import axios from "axios";

const createAxios = axios.create({
    baseURL: "https://restcountries.com/v3.1"
});

export default createAxios;