const express = require('express');
const helmet = require('helmet');
const recipesRouter = require('./data/recipe-router.js');
// const studentsRouter = require('./students/students-router.js');
const server = express();

server.use(helmet());
server.use(express.json());


server.get('/', (req, res) => {
    res.send(`<h2>Let's do this cookbook business!</h2>`)
  });



server.use('/api', recipesRouter);
// server.use('/api/students', studentsRouter);

module.exports = server;