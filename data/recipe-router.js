const router = require('express').Router();
const Recipes = require('./recipe-model.js');


router.get('/', (req, res) => {
 Recipes
   .getDishes()
   .then( dishes => {
     res.status(200).json({dishes});
   })
})


module.exports = router;