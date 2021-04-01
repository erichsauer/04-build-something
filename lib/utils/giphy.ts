// const express = require('express');
// const app = express();

const getGif = async (search: string, results: number = 1) => {
  const { data } = await app.get(
    `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY}&q=${search}&limit=1&offset=0&rating=pg&lang=en`
  );
  return data[0];
};

module.exports = { getGif };
