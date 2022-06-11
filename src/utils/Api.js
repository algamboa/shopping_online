import axios from "axios";

export function getProducts()
{
    return axios.get('https://www.amiiboapi.com/api/amiibo/');
}