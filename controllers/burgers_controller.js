var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res) {
	res.redirect('/burger')
});

router.get('/burger', function(req,res) {
	burger.all(function(data){
		var hbsObject = {burger : data}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});

var burger = 

router.post('/burger/create', function(req,res) {
	burger.create(['name', 'devoured'], [req.body.name, req.body.devoured], function(data){
		res.redirect('/burger')
	});
});

router.put('/burger/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.update({'devoured' : req.body.devoured}, condition, function(data){
		res.redirect('/burger');
	});
});

module.exports = router;