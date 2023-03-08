import axios from 'axios';

export const getAllRestaurants = async () => {
  const data = await axios.get('https://6406bf75862956433e58b05e.mockapi.io/restaurants').then((response) => response.data);
  return data;
};
