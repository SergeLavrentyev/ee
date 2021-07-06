import axios from 'axios'

const API_URL = 'https://salty-atoll-30306.herokuapp.com/api'

export const request = async ({ url, method, data = {} }) => {
  const res = await axios[method](`${API_URL}/${url}`, data);
  return res.data;
}