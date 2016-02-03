/**
 * DealExplorer
 *
 * @providesModule Game2048
 * @flow
 */
'use strict';

var React = require('react-native');

var {
	AppRegistry,
	StyleSheet,
	View,
	Image,
	} = React;

var Board = require('Board');
var BoardData = require('BoardData');
var GameEndOverlay = require('GameEndOverlay');

var DealExplorer = React.createClass({

	getInitialState() {
		return { board: new BoardData() }
	},

	restartGame() {
		this.setState({ board: new BoardData() });
	},

	render: function() {

		return (
			<View
				style={styles.container}>
				<Image source={require('./images/logo.png')} style={styles.logo} />
				<Board data={this.state.board}></Board>
				<GameEndOverlay data={this.state.board} onRestart={() => this.restartGame()} />
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		bottom: 30,
	}
});

AppRegistry.registerComponent('DealExplorer', () => DealExplorer);
module.exports = DealExplorer;