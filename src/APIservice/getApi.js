import axios from 'axios';
import { data } from 'react-router-dom';

axios.defaults.baseURL = 'https://67eed150c11d5ff4bf7b056f.mockapi.io/';

export const getApi = async task => {
  const response = await axios.get(`/${task}`);

  return response.data;
};
export const postApi = async taskData => {
  const response = await axios.post(`/task`, taskData);
  return response.data;
};
export const deleteApi = async id => {
  const response = await axios.delete(`/task/${id}`);
  return response.data;
}