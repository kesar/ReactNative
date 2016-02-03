/**
 * DealExplorer
 *
 * @flow
 * @providesModule GameEndOverlay
 */
'use strict';

var React = require('react-native');

var {
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableNativeFeedback,
	View
	} = React;

var GameEndOverlay = React.createClass({
	render: function() {

		var board = this.props.board;

		if (!board.hasWon() && !board.hasLost()) {
			return <View/>;
		}

		var message = board.hasWon() ?
			'Good Job!' : 'Game Over';

		return (
			<View style={styles.overlay}>
				<Text style={styles.overlayMessage}>{message}</Text>
				<TouchableBounce onPress={this.props.onRestart} style={styles.tryAgain}>
					<Text style={styles.tryAgainText}>Try Again?</Text>
				</TouchableBounce>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: 'rgba(221, 221, 221, 0.5)',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	overlayMessage: {
		fontSize: 40,
		marginBottom: 20,
	},
	tryAgain: {
		backgroundColor: '#887766',
		padding: 20,
		borderRadius: 5,
	},
	tryAgainText: {
		color: '#ffffff',
		fontSize: 20,
		fontWeight: '500',
	},
});

module.exports = GameEndOverlay;