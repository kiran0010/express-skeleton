var mongoose = require('mongoose');

var SignupSchema = new mongoose.Schema({
	name: String,
	email: String,
	pass: String,
	phone: Number,
	add: String,
	city: String,
	country: String,
	state: String
})

module.exports = mongoose.model("Signup",SignupSchema)