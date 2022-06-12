import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
    try {
        // request
        const response = await axios.get(URL,{
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
              'X-RapidAPI-Key': '22429dc4c6msh9fc5333a8923043p1b196djsn09e5ddc35403'
            }
        });
        return response.data.data;
    } catch (error) {
        console.log(error)
    }
}