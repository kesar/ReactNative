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
	} = React;

var Cell = React.createClass({

	getInitialState() {
		return { open: false }
	},

	render: function() {
		var TouchableElement = TouchableHighlight;
		if (Platform.OS === 'android') {
			TouchableElement = TouchableNativeFeedback;
		}
		return (
			<TouchableElement  onPress={() => this.checkCell(this.props.x, this.props.y)}>
				<View style={[styles.cell, this.state.open && styles.openedCell]}>
					<Image source={require('./images/bang.png')} style={[styles.mineCell, this.state.open && styles.show]} />
					<Image source={require('./images/prize.png')} style={styles.prizeCell} />
				</View>
			</TouchableElement>
		);
	},

	checkCell: function(x, y) {
		var data = this.props.data;
		if (data.isCellVisited(x, y) || (data.hasWon() || data.hasLost())) {
			return;
		}
		this.setState({open: true});

		data.visitCell(x, y);
		var result = data.getCell(x,y );
		if (result == 2) {
			data.changeResult(false, true);
			alert('died');
		} else if(result == 3) {
			data.changeResult(true, false);
			alert('you win a Dekdo!');
		} else {
			alert('empty!');
		}
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
		backgroundColor: '#000000',
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
	show: {
		opacity: 1
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
