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

		var data = this.props.data;

		return (
			<View style={styles.board}>
				<View style={styles.row}>
					<Cell onPress={() => this.checkCell()}/>
					<Cell onPress={() => this.checkCell()}/>
					<Cell onPress={() => this.checkCell()}/>
					<Cell onPress={() => this.checkCell()}/>
				</View>

				<View style={styles.row}>
					<Cell onPress={() => this.checkCell()}/>
					<Cell onPress={() => this.checkCell()}/>
					<Cell onPress={() => this.checkCell()}/>
					<Cell onPress={() => this.checkCell()}/>
				</View>

				<View style={styles.row}>
					<Cell onPress={() => this.checkCell()}/>
					<Cell onPress={() => this.checkCell()}/>
					<Cell onPress={() => this.checkCell()}/>
					<Cell onPress={() => this.checkCell()}/>
				</View>

				<View style={styles.row}>
					<Cell onPress={() => this.checkCell()}/>
					<Cell onPress={() => this.checkCell()}/>
					<Cell onPress={() => this.checkCell()}/>
					<Cell onPress={() => this.checkCell()}/>
				</View>

				<View style={styles.row}>
					<Cell onPress={() => this.checkCell()}/>
					<Cell onPress={() => this.checkCell()}/>
					<Cell onPress={() => this.checkCell()}/>
					<Cell onPress={() => this.checkCell()}/>
				</View>

            {this.props.children}
			</View>
		);
	},

	checkCell: function() {
		alert('checking cell...');
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
