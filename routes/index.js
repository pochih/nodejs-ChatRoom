var express = require('express');
var router = express.Router();
var Todo = require('../models/todo.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('chatroom', { title: 'Express' });
});

//Routing for API
router.get('/api', function(req, res) {
  	res.json({ message: "RESTful API!" });
});

router.get('/message', function(req, res, next) {
	Todo.find(function(err, todos) {
		if (err) return next(err);
		res.json(todos);
	})
});

router.post('/message', function(req, res, next) {
	console.log(req.body);
	
	Todo.create(req.body, function(err, post) {
		if (err) return next(err);
		res.json(post);
	})
});

router.get('/:id', function(req, res, next) {
	Todo.findById(req.params.id, function(err, post) {
		if (err) return next(err);
		res.json(post);
	})
});

router.put('/:id', function(req, res, next) {
	Todo.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
		if (err) return next(err);
		res.json(post);
	})
});

router.delete('/:id', function(req, res, next) {
	Todo.findByIdAndRemove(req.params.id, req.body, function(err, post) {
		if (err) return next(err);
		res.json(post);
	})
});

module.exports = router;
