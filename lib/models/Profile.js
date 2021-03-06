const pool = require('../utils/pool');

module.exports = class Profile {
  id;
  name;
  word;
  gif;

  constructor({ id, name, word, gif }) {
    this.id = id;
    this.name = name || 'friend';
    this.word = word;
    this.gif = gif || 'no gif found :(';
  }

  static async insert({ name, word, gif }) {
    const {
      rows,
    } = await pool.query(
      `INSERT INTO profiles (name, word, gif) VALUES ($1, $2, $3) RETURNING *`,
      [name, word, gif]
    );

    return new Profile(rows[0]);
  }

  static async retrieve(id) {
    if (!id) {
      const { rows } = await pool.query(`SELECT * FROM profiles`);

      const profiles = rows.map((profile) => new Profile(profile));

      return profiles;
    } else {
      const { rows } = await pool.query(`SELECT * FROM profiles WHERE id=$1`, [
        id,
      ]);

      const profile = new Profile(rows[0]);
      return profile;
    }
  }

  static async update(id, { name, word, gif }) {
    const {
      rows,
    } = await pool.query(
      `UPDATE profiles SET name=$1, word=$2, gif=$3 WHERE id=$4 RETURNING *`,
      [name, word, gif, id]
    );

    return new Profile(rows[0]);
  }

  static async delete(id) {
    const {
      rows,
    } = await pool.query(`DELETE FROM profiles WHERE id=$1 RETURNING *`, [id]);

    return new Profile(rows[0]);
  }
};
