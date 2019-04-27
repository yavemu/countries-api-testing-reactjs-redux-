import axios from "axios";

const requestHelper = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2',
});


const countries = {
    getAll: () => requestHelper({
        url: 'all',
        method: 'GET',
    }),
}


export default {
    countries,
}