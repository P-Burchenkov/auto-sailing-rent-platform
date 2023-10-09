import axios from 'axios';

axios.defaults.baseURL =
  'https://65218622a4199548356d5373.mockapi.io/api/adverts';

const togleFavorite = async (id, req) => {
  try {
    const res = await axios.put(`cars/${id}`, req);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default togleFavorite;
