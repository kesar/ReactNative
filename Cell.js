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
	View,
	Image
	} = React;

var Cell = React.createClass({
	render: function() {
		var TouchableElement = TouchableHighlight;
		if (Platform.OS === 'android') {
			TouchableElement = TouchableNativeFeedback;
		}
		return (
			<TouchableElement onPress={this.props.onPress}>
				<View style={[styles.cell]}>
					<Image source={require('./images/bang.png')} style={styles.mineCell} />
					<Image source={require('./images/prize.png')} style={styles.prizeCell} />
				</View>
			</TouchableElement>
		);
	}
});

var styles = StyleSheet.create({
	cell: {
		width: CELL_SIZE,
		height: CELL_SIZE,
		margin: CELL_MARGIN,
		borderRadius: 5,
		backgroundColor: '#ddccbb',
	},
	openedCell: {
		backgroundColor: '#fafafa',
	},
	mineCell: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		position: 'absolute',
		left: 16,
		top: 16,
		opacity: 0,
	},
	prizeCell: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		position: 'absolute',
		left: 16,
		top: 16,
		opacity: 0,
	},
});

module.exports = Cell;
