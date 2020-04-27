const express = require('express');

const router = express.Router();
const axios = require('axios');

const githubToken = process.env.API_KEY;

// Perform search through the api
router.get('/v1/search/:name', async (req, res) => {
  let { name } = req.params;
  name = name.replace(/ /g, '+');
  const data = await axios.get(
    `https://api.github.com/search/users?q=${name}`,
    { headers: { authorization: `token ${githubToken}` } },
  );

  res.send(data.data);
});
// Returns the user personal data
router.post('/v1/search/user/', async (req, res) => {
  const { url } = req.body;
  const data = await axios.get(url, {
    headers: { authorization: `token ${githubToken}` },
  });

  res.send(data.data);
});

// returns the most popular repositories with more than 70,000 stars on all github repos.
router.get('/v1/popular/', async (req, res) => {
  const data = await axios.get(
    'https://api.github.com/search/repositories?q=stars:>70000&sort=stars&order=desc',
    { headers: { authorization: `token ${githubToken}` } },
  );

  res.send(data.data);
});

// returns the most contributors fo the specific popular repository
router.post('/v1/contributors/', async (req, res) => {
  const { repo } = req.body;
  const data = await axios.get(
    `https://api.github.com/repos/${repo}/contributors`,
    { headers: { authorization: `token ${githubToken}` } },
  );

  res.send(data.data);
});

module.exports = router;
