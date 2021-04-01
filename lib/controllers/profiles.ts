const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router()
  //@ts-ignore
  .get('/:id', (req, res, next) => {
    ProfileService.retrieve(req.params.id)
      .then((profile: UserProfile) => res.send(profile))
      .catch(next);
  })
  //@ts-ignore
  .post('/', (req, res, next) => {
    ProfileService.create(req.body)
      .then((profile: UserProfile) => res.send(profile))
      .catch(next);
  });
