const request = require('request');

const endpoint = 'https://api.thecatapi.com/v1/breeds/search?q=sib';

request(endpoint, (error, response, body) => {

  const catData = JSON.parse(body)[0];
  const keys = Object.keys(catData);
  console.log(`keys:\n${keys}\n\n`);
  console.log(`Description:\n\n ${catData.description}\n`);
});