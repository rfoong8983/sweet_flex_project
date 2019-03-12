const express = require('express');
const router = express.Router();
const Search = require('../../models/Search');
const validateSearchInput = require('../../validation/search');

router.post('/', (req, res) => {
  const { errors, isValid } = validateSearchInput(req.body) 
  if (!isValid) return res.status(400).json(errors);
  
  const newSearch = new Search({
      user: req.body.currentUserId,
      query: req.body.searchInput,
     });

  return newSearch.save()
                  .then(search => {return res.json(search)})
                  .catch(err => console.log(err));
});

module.exports = router;