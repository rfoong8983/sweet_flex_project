// npm install twit
const axios = require('axios');

export const fetchTwitterData = searchData => (
  axios({
    method: 'post',
    url: '/api/search/twitter',
    data: { searchData }
  })
)
