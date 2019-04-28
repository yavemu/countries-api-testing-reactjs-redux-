import axios from "axios";

const requestHelper = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2',
});


const countries = {
    getAll: () => requestHelper({
        url: 'all',
        method: 'GET',
    }),
    getByCode: (code) => requestHelper({
        url: `alpha/${code}`,
        method: 'GET',
    }),
}


export default {
    countries,
}