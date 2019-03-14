import axios from 'axios';

export const saveSearch = searchInput => (
  axios({
    method: "POST",
    url: "/api/search",
    data: {searchInput}
  })
)