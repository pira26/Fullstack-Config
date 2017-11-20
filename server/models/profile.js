const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
	name: String,
	id: String,
	email: String,
  	description: String,
	date: { type: Date, default: Date.now },
	address: String,
});

module.exports = mongoose.model('Profile', ProfileSchema);