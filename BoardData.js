/**
 * @providesModule BoardData
 * @flow
 */
'use strict';

var BoardRows = 4;
var BoardColumns = 5;

var cell_present = 3;
var cell_bomb = 2;
var amount_of_bombs = 4;

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var BoardData = function () {
	this.cells = [];
	this.visitedCells = [];
	this.won = false;
	this.lost = false;
	for(var i=0; i < BoardColumns; i++) {
		this.cells[i] = [];
		this.visitedCells[i] = [];
		for(var x=0; x < BoardRows; x++) {
			this.cells[i][x] = 0;
			this.visitedCells[i][x] = 0;
		}
	}
	var rand_x = 0;
	var rand_y = 0;

	for (var i=0; i< amount_of_bombs ; i++) {
		rand_x = getRandomInt(0, 3);
		rand_y = getRandomInt(0, 4);
		this.cells[rand_x][rand_y] = cell_bomb;
	}

	rand_x = getRandomInt(0, 3);
	rand_y = getRandomInt(0, 4);
	this.cells[rand_x][rand_y] = cell_present;
};

BoardData.prototype.isCellVisited = function (x, y) {
	return this.visitedCells[x][y] == true;
};

BoardData.prototype.visitCell = function (x, y) {
	return this.visitedCells[x][y] = true;
};

BoardData.prototype.getCell = function (x, y) {
	return this.cells[x][y];
};

BoardData.prototype.changeResult = function (won, lost) {
	this.won = won;
	this.lost = lost;
};

BoardData.prototype.hasWon = function () {
	return this.won;
};

BoardData.prototype.hasLost = function () {
	return this.lost;
};

module.exports = BoardData;