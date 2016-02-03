/**
 * @providesModule BoardData
 * @flow
 */
'use strict';

var BoardRows = 4;
var BoardColumns = 5;

var BoardData = function () {
	this.cells = [];
	this.won = false;
	for(var i=0; i< BoardColumns; i++) {
		this.cells[i] = [0,0,0,0]; // TODO: improve
	}
};

BoardData.prototype.cells = function () {
	return this.cells;
};

BoardData.prototype.hasWon = function () {
	return this.won;
};

BoardData.prototype.hasLost = function () {
	return false;
};

module.exports = BoardData;
