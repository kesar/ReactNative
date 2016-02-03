/**
 * DealExplorer
 *
 * @flow
 * @providesModule Cell
 */
'use strict';

var React = require('react-native');

var CELL_MARGIN = 4;
var CELL_SIZE = 80;

var {
	Platform,
	Image,
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableNativeFeedback,
	View
	} = React;

var Cell = React.createClass({
	render: function() {
		var TouchableElement = TouchableHighlight;
		if (Platform.OS === 'android') {
			TouchableElement = TouchableNativeFeedback;
		}
		return (
			<TouchableElement onPress={this.props.onPress}>
				<View style={styles.cell} />
			</TouchableElement>
		);
	}
});

var styles = StyleSheet.create({
	cell: {
		width: CELL_SIZE,
		height: CELL_SIZE,
		borderRadius: 5,
		backgroundColor: '#ddccbb',
		margin: CELL_MARGIN,
	},
});

module.exports = Cell;
