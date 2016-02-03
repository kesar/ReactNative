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
		return {
			open: false,
			type: 0
		}
	},

	render: function() {
		var TouchableElement = TouchableHighlight;
		if (Platform.OS === 'android') {
			TouchableElement = TouchableNativeFeedback;
		}
		return (
			<TouchableElement  onPress={() => this.checkCell(this.props.x, this.props.y)}>
				<View style={[styles.cell, this.state.open && styles.openedCell]}>
					<Image source={this.checkType()} style={styles.imageCell} />
				</View>
			</TouchableElement>
		);
	},

	checkCell: function(x, y) {
		var data = this.props.data;
		if (data.isCellVisited(x, y) || (data.hasWon() || data.hasLost())) {
			return;
		}
		data.visitCell(x, y);
		var result = data.getCell(x,y );

		this.setState({
			open: true,
			type: result
		});

		if (result == 2) {
			data.changeResult(false, true);
			//alert('died');
		} else if(result == 3) {
			data.changeResult(true, false);
			//alert('you win a Dekdo!');
		} else {
			//alert('empty!');
		}
	},
	checkType: function() {
		if (this.state.open) {
			switch(this.state.type) {
				case 3:
					return require('./images/prize.png');
				case 2:
					return require('./images/bang.png');
			}
		}
		return null;
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
		backgroundColor: '#eee',
	},
	imageCell: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		position: 'absolute',
		left: 16,
		top: 16,
	},
});

module.exports = Cell;
