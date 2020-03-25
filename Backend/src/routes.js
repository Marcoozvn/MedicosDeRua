const { Router } = require('express');

const SessionController = require('./controllers/SessionController');
const AnamneseController = require('./controllers/AnamneseController');
const ReturnController = require('./controllers/ReturnController');

const routes = Router();

//Login - Registro de usuários
routes.post('/register', SessionController.verifyToken, SessionController.register);
routes.post('/login', SessionController.login);

//Fichas de Anamnese
routes.get('/anamnese', SessionController.verifyToken, AnamneseController.findAll);
routes.get('/anamnese/:id', SessionController.verifyToken, AnamneseController.findById);
routes.post('/anamnese', SessionController.verifyToken, AnamneseController.create);
routes.put('/anamnese/:id', SessionController.verifyToken, AnamneseController.update);
routes.delete('/anamnese/:id', SessionController.verifyToken, AnamneseController.delete);

//Fichas de Retorno
routes.get('/return', SessionController.verifyToken, ReturnController.findAll);
routes.get('/return/:id', SessionController.verifyToken, ReturnController.findById);
routes.post('/return', SessionController.verifyToken, ReturnController.create);
routes.put('/return/:id', SessionController.verifyToken, ReturnController.update);
routes.delete('/return/:id', SessionController.verifyToken, ReturnController.delete);

module.exports = routes;