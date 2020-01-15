const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({message: "Hello World"});
});

routes.post('/users', (req, res) => {
    console.log(req.body);
    return res.json({message: "Users POST"});
});

routes.put('/users/:id', (req, res) => {
    console.log(req.params);
    return res.json({message: "Users PUT"});
});

module.exports = routes;