/**
 * DealExplorer
 *
 * @flow
 * @providesModule Board
 */
'use strict';

var React = require('react-native');
var Cell = require('Cell');

var {
	StyleSheet,
	View
	} = React;

var Board = React.createClass({

	render: function() {
		return (
			<View style={styles.board}>
				<View style={styles.row}>
					<Cell onPress={() => this.checkCell(0, 0)}/>
					<Cell onPress={() => this.checkCell(0, 1)}/>
					<Cell onPress={() => this.checkCell(0, 2)}/>
					<Cell onPress={() => this.checkCell(0, 3)}/>
				</View>

				<View style={styles.row}>
					<Cell onPress={() => this.checkCell(1, 0)}/>
					<Cell onPress={() => this.checkCell(1, 1)}/>
					<Cell onPress={() => this.checkCell(1, 2)}/>
					<Cell onPress={() => this.checkCell(1, 3)}/>
				</View>

				<View style={styles.row}>
					<Cell onPress={() => this.checkCell(2, 0)}/>
					<Cell onPress={() => this.checkCell(2, 1)}/>
					<Cell onPress={() => this.checkCell(2, 2)}/>
					<Cell onPress={() => this.checkCell(2, 3)}/>
				</View>

				<View style={styles.row}>
					<Cell onPress={() => this.checkCell(3, 0)}/>
					<Cell onPress={() => this.checkCell(3, 1)}/>
					<Cell onPress={() => this.checkCell(3, 2)}/>
					<Cell onPress={() => this.checkCell(3, 3)}/>
				</View>

				<View style={styles.row}>
					<Cell onPress={() => this.checkCell(4, 0)}/>
					<Cell onPress={() => this.checkCell(4, 1)}/>
					<Cell onPress={() => this.checkCell(4, 2)}/>
					<Cell onPress={() => this.checkCell(4 ,3)}/>
				</View>
			</View>
		);
	},

	checkCell: function(x, y) {
		var data = this.props.data;
		alert('checking cell...' + x + ', ' + y + 'and result is: ' + data.cells[x][y]);
	}
});

var styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
	},
	board: {
		padding: 3,
		backgroundColor: '#bbaaaa',
		borderRadius: 5,
	},
});

module.exports = Board;
