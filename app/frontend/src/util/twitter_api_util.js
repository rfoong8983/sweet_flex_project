// npm install twit
const axios = require('axios');

export const fetchTwitterData = searchData => {
  return axios.get('/api/search', searchData);
}
