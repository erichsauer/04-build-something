const express = require('express');
const app = express();

type UserProfile = {
  id: string;
  name: string;
  word: string;
  gif: string;
};

app.use(express.json());

app.use('/api/v1/gif', require('./controllers/profiles'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
