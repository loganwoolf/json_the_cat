const request = require('request');

const endpoint = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (breedName, callback) => {
  request(endpoint + breedName,
    (error, response, body) => {
      if (error) {
        callback(error);
        return;
      }

      const catData = JSON.parse(body)[0];

      if (!catData) {
        callback('Error: Invalid breed');
      }
      if (catData) {
        callback(null, `${catData.name}:\n\n ${catData.description}\n`);
      }
    }
  );
};

module.exports = { fetchBreedDescription };