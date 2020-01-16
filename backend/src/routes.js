const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({message: "Hello World"});
});

routes.post('/devs', DevController.store);

routes.put('/users/:id', (req, res) => {
    console.log(req.params);
    return res.json({message: "Users PUT"});
});

module.exports = routes;