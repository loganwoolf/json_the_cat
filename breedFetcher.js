const request = require('request');


const breedName = process.argv[2];
const endpoint = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(endpoint, (error, response, body) => {

  const catData = JSON.parse(body)[0];
  const keys = Object.keys(catData);
  console.log(`keys:\n${keys}\n\n`);
  console.log(`Description:\n\n ${catData.description}\n`);
});