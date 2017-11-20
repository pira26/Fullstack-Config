const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/', (req, res) => {
	const user = new User();
	user.name = req.body.name;
	user.username = req.body.username;
	user.password = req.body.password;
	user.save((err) => {
		if(err){
			if(err.code == 11000) {
				return res.json({success:false, message:'User existant!'});
			} else {
				return res.send(err);
			}
		}
		res.json({message:'Mission accomplie'});
	})
});

router.get('/', (req, res, next) => {
  	res.send(`welcome to your dashboard !)`);
  	next()
});

module.exports = router;