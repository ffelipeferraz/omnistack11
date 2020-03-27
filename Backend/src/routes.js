const express = require('express');

const ongcontroller = require('./controllers/ongcontroller');
const incidentcontroller = require('./controllers/incidentcontroller');
const profilecontroller = require('./controllers/profilecontroller');
const sessioncontroller = require('./controllers/sessioncontroler');

const routes = express.Router();

routes.post('/sessions', sessioncontroller.create);

routes.get('/ongs', ongcontroller.index);
routes.post('/ongs',ongcontroller.create);

routes.post('/incidents', incidentcontroller.create);
routes.get('/incidents', incidentcontroller.index);
routes.delete('/incidents/:id', incidentcontroller.delete);

routes.get('/profile',profilecontroller.index);

/* exportando as rotas */
module.exports = routes;