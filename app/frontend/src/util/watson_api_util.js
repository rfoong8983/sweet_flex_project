const axios = require('axios');

export const fetchWatsonData = text => (
  axios({
    method: 'post',
    url: 'api/search/watson',
    data: { text, }
  })
)