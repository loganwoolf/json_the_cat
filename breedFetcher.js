const request = require('request');


const breedName = process.argv[2];
const endpoint = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(endpoint, (error, response, body) => {
  if (error) {
    console.log(`error: ${error}`);
    console.log(`response : ${response}`);
    process.exit();
  }

  const catData = JSON.parse(body)[0];

  if (!catData) {
    console.log('Query returned zero results');

  }
  if (catData) {
    // const keys = Object.keys(catData);
    // console.log(`keys:\n${keys}\n\n`);
    console.log(`${catData.name}:\n\n ${catData.description}\n`);
  }

});