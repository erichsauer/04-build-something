const request = require('superagent');
//@ts-ignore
const getGif = async (search: string) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY}&q=${search}&limit=10&offset=0&rating=pg&lang=en`;
  const { body } = await request.get(URL);
  const randomResult =
    body.data[Math.floor(Math.random() * 10)].images.downsized.url;
  return randomResult;
};

module.exports = { getGif };
