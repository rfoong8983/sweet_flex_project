import axios from 'axios';

export const saveSearch = searchData => {
  return axios.post('/api/search', searchData);
}