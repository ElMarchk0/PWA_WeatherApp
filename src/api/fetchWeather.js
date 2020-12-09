import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';

const API_key = '9aaf98a97cad3d448266f8dac7ac24bf';


export const fetchWeather = async(query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_key,
        }
    })

    return data;
}