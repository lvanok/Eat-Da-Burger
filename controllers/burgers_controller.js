//here is where the functions that do the routing and logic are created


var express = require('express');
var router = express.Router();
var Burger = require('../models/burger.js');

router.get('/', function(req,res) {
    res.redirect('/burger')
});

router.get('/burger', function(req,res) {

    Burger.findAll({}).then(function(result){
        var hbsObject = {burger : result}
        res.render('index', hbsObject);
    })
});

router.post('/burger/create', function(req,res) {
	burger.create(['burger_name', 'devour'], [req.body.burger_name, req.body.devour], function(data){
		res.redirect('/burger')
	});
});

router.put('/burger/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.update({'devour' : req.body.devour}, condition, function(data){
		res.redirect('/burger');
	});
});

router.delete('/burger/delete/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	burger.delete(condition, function(data){
		res.redirect('/burger');
	});
});

module.exports = router;