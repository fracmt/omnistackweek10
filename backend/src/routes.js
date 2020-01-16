const { Router } = require('express');
const axios= require('axios');
const Dev = require('./models/Dev');

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({message: "Hello World"});
});

routes.post('/devs', async (req, res) => {
    const { github_username, techs, latitude, longitude} = req.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
    //if name no exist, login is 
    const { name = login, avatar_url, bio } = apiResponse.data;

    const techsArray = techs.split(',').map(tech => tech.trim());

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
    }

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
    });

    return res.json(dev);
});

routes.put('/users/:id', (req, res) => {
    console.log(req.params);
    return res.json({message: "Users PUT"});
});

module.exports = routes;