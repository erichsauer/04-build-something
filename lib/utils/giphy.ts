const request = require('superagent');
//@ts-ignore
const getGif = async (search: string, results: number = 1) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY}&q=${search}&limit=${results}&offset=0&rating=pg&lang=en`;
  const { body } = await request.get(URL);
  return body.data[0].images.downsized.url;
};

module.exports = { getGif };
