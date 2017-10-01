'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Post = [{
	recipientID: Number,
	senderID: Number,
	date: { type: Date, default: Date.now },
	body:[{
		comment: String,
		color: String,
		background: String,
		position: [{
			x: Number,
			y: Number
		}]
	}]
}]

var WallSchema = new Schema({
	owner: String,
	ownerID: Number,
	friends: Number[],
	posts: Post[],
})


module.exports = mongoose.model('Walls', WallSchema);