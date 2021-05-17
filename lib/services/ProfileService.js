//@ts-ignore
const Profile = require('../models/Profile');
//@ts-ignore
const { getGif } = require('../utils/giphy');

module.exports = class ProfileServices {
  static async create({ name, word }) {
    const gif = await getGif(word);

    const profile = await Profile.insert({ name, word, gif });

    return profile;
  }

  static async update(id, { name, word }) {
    const gif = await getGif(word);

    const profile = await Profile.update(id, { name, word, gif });

    return profile;
  }
};
