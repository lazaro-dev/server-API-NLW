import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router(); //extraindo o modulo de roteamento para não utilizar o 'app' direto


//request...response e a resposta 
//GET, POST, PUT, DELETE

//PARÂMETROS
/*
    Corpo (Request Body): Dados para criação ou atualização de um registro
    Route Params: Identificar qual recurso quer atualizar ou deletar
    Query Params: Paginação, filtros, ordenação
*/ 

// app.get('/users', (request, response) => {
//     console.log(request.query);
// });

// app.delete('/users/:id', (request, response) => {
//     console.log(request.params);
// });

// app.post('/users', (request, response) => {
//     console.log(request.body);

//     const users = [
//         {name: "Lázaro", age: "24"},
//         {name: "Irineu", age: "32"}
//     ];
//     return response.json(users);
// });

// routes.get('/', (request, response) => {
//     return response.json({ message: "Hello Word"});
// });

const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.create);

export default routes;