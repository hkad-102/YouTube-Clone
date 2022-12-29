import axios from 'axios'

const BASE_URL = 'https://youtube138.p.rapidapi.com'

const options = {
  params: { hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': '8f796f2a82msheb582a337af9bc9p1cfeeajsnfd9cb161e05c',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}