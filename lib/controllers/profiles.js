const { Router } = require('express');
const ProfileService = require('../services/ProfileService');
//@ts-ignore
const Profile = require('../models/Profile');

module.exports = Router()
  //@ts-ignore
  .post('/', (req, res, next) => {
    ProfileService.create(req.body)
      .then((profile) => res.send(profile))
      .catch(next);
  })
  //@ts-ignore
  .get('/', (req, res, next) => {
    Profile.retrieve()
      .then((profile) => res.send(profile))
      .catch(next);
  })
  //@ts-ignore
  .get('/:id', (req, res, next) => {
    Profile.retrieve(req.params.id)
      .then((profile) => res.send(profile))
      .catch(next);
  })
  //@ts-ignore
  .put('/:id', (req, res, next) => {
    ProfileService.update(req.params.id, req.body)
      .then((profile) => res.send(profile))
      .catch(next);
  })
  //@ts-ignore
  .delete('/:id', (req, res, next) => {
    Profile.delete(req.params.id)
      .then((profile) => res.send(profile))
      .catch(next);
  });
