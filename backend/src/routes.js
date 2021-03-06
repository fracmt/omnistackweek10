const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({message: "Hello World"});
});

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index); 

routes.put('/users/:id', (req, res) => {
    console.log(req.params);
    return res.json({message: "Users PUT"});
});

module.exports = routes;