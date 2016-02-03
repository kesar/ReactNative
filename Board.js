/**
 * DealExplorer
 *
 * @flow
 * @providesModule Board
 */
'use strict';

var React = require('react-native');
var Cell = require('Cell');

var BOARD_PADDING = 3;

var {
	Image,
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableNativeFeedback,
	View
	} = React;

var Board = React.createClass({
	render: function() {
		return (
			<View style={styles.board}>
				<View style={styles.row}>
					<Cell onPress={() => this.alert()}/>
					<Cell onPress={() => this.alert()}/>
					<Cell onPress={() => this.alert()}/>
					<Cell onPress={() => this.alert()}/>
				</View>

				<View style={styles.row}>
					<Cell onPress={() => this.alert()}/>
					<Cell onPress={() => this.alert()}/>
					<Cell onPress={() => this.alert()}/>
					<Cell onPress={() => this.alert()}/>
				</View>

				<View style={styles.row}>
					<Cell onPress={() => this.alert()}/>
					<Cell onPress={() => this.alert()}/>
					<Cell onPress={() => this.alert()}/>
					<Cell onPress={() => this.alert()}/>
				</View>

				<View style={styles.row}>
					<Cell onPress={() => this.alert()}/>
					<Cell onPress={() => this.alert()}/>
					<Cell onPress={() => this.alert()}/>
					<Cell onPress={() => this.alert()}/>
				</View>

				<View style={styles.row}>
					<Cell onPress={() => this.alert()}/>
					<Cell onPress={() => this.alert()}/>
					<Cell onPress={() => this.alert()}/>
					<Cell onPress={() => this.alert()}/>
				</View>

            {this.props.children}
			</View>
		);
	},

	alert: function() {
		alert('clicked in cell');
	}
});

var styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
	},
	board: {
		padding: BOARD_PADDING,
		backgroundColor: '#bbaaaa',
		borderRadius: 5,
	},
});

module.exports = Board;
