const Profile = require('../models/Profile');
//@ts-ignore
const { getGif } = require('../utils/giphy');

module.exports = class ProfileServices {
  static async create({ name, word }: UserProfile) {
    const gif = await getGif(word);

    const profile = await Profile.insert({ name, word, gif });

    return profile;
  }

  static async retrieve(id: string) {
    const profiles = await Profile.retrieve(id);

    return profiles;
  }

  static async update(id: string, { name, word }: UserProfile) {
    const gif = await getGif(word);

    const profile = await Profile.update(id, { name, word, gif });

    return profile;
  }

  static async delete(id: string) {
    const profile = await Profile.delete(id);

    return profile;
  }
};
