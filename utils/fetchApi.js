import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'bd5b242857mshe285ebe96cdefa9p172bafjsn4d9e1541fff0'
        }
    });

    return data;
}

//headers: {
//    'X-RapidAPI-Key': 'bd5b242857mshe285ebe96cdefa9p172bafjsn4d9e1541fff0',
//    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//}