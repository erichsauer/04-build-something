"use strict";
var Router = require('express').Router;
var ProfileService = require('../services/ProfileService');
//@ts-ignore
var Profile = require('../models/Profile');
module.exports = Router()
    //@ts-ignore
    .post('/', function (req, res, next) {
    ProfileService.create(req.body)
        .then(function (profile) { return res.send(profile); })
        .catch(next);
})
    //@ts-ignore
    .get('/', function (req, res, next) {
    Profile.retrieve()
        .then(function (profile) { return res.send(profile); })
        .catch(next);
})
    //@ts-ignore
    .get('/:id', function (req, res, next) {
    Profile.retrieve(req.params.id)
        .then(function (profile) { return res.send(profile); })
        .catch(next);
})
    //@ts-ignore
    .put('/:id', function (req, res, next) {
    ProfileService.update(req.params.id, req.body)
        .then(function (profile) { return res.send(profile); })
        .catch(next);
})
    //@ts-ignore
    .delete('/:id', function (req, res, next) {
    Profile.delete(req.params.id)
        .then(function (profile) { return res.send(profile); })
        .catch(next);
});
