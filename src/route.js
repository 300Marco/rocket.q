const express = require('express');
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');

const route = express.Router();

route.get('/', function(require, response) {
    return response.render("index", {page: 'enter-room'});
});

route.get('/create-pass', function(request, response) {
    return response.render("index", {page: 'create-pass'});
});


route.post('/create-room', RoomController.create);
route.get('/room/:room', RoomController.open);
route.post('/enterroom', RoomController.enter);

route.post('/question/create/:room', QuestionController.create);
route.post('/question/:room/:question/:action', QuestionController.index);

module.exports = route;