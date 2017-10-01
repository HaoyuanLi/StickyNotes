'use strict';
module.exports = function(apps){
	var server = require('../controllers/serverController');

	//server Routes
	app.route('/walls')
	.get(server.getAllWalls),
	.post(server.createWall)

	app.route('walls/WallID')
	.get(server.getWall),
	.put(server.updateWall),
	.delete(server.deleteWall)

};