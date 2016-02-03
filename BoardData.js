/**
 * @providesModule BoardData
 * @flow
 */
'use strict';

var Board = function () {
	this.cells = [];
	this.won = false;
	// add values into cells
};

Board.prototype.addCell = function () {
	// add cell content
	this.cells.push(res);
	return res;
};

Board.prototype.hasWon = function () {
	return this.won;
};

Board.prototype.hasLost = function () {
	return false;
};

module.exports = Board;
