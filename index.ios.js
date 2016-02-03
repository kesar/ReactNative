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
	} = React;

var Board = require('Board');
var BoardData = require('BoardData');
var GameEndOverlay = require('GameEndOverlay');

class DealExplorer extends React.Component {

	constructor(props: {}) {
		super(props);
		this.state = { board: new BoardData() };
	}

	restartGame() {
		this.setState({board: new BoardData()});
	}

	render() {

		return (
			<View
				style={styles.container}>
				<Board data={this.state.board}></Board>
				<GameEndOverlay data={this.state.board} onRestart={() => this.restartGame()} />
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

AppRegistry.registerComponent('DealExplorer', () => DealExplorer);
module.exports = DealExplorer;
