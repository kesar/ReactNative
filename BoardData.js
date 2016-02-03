/**
 * @providesModule BoardData
 * @flow
 */
'use strict';

var Board = function () {
	this.tiles = [];
	this.cells = [];
	for (var i = 0; i < Board.size; ++i) {
		//this.cells[i] = [this.addTile(), this.addTile(), this.addTile(), this.addTile()];
	}
	//this.addRandomTile();
	this.won = false;
};

Board.prototype.addTile = function () {
	var res = new Tile();
	Tile.apply(res, arguments);
	this.tiles.push(res);
	return res;
};

Board.size = 8;

Board.prototype.hasWon = function () {
	return this.won;
};

Board.prototype.hasLost = function () {
	return false;
};

module.exports = Board;
