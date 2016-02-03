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
	View,
	} = React;

var Board = React.createClass({

	render: function() {
		return (
			<View style={styles.board}>
				<View style={styles.row}>
					<Cell data={this.props.data} x="0" y="0" />
					<Cell data={this.props.data} x="0" y="1" />
					<Cell data={this.props.data} x="0" y="2" />
					<Cell data={this.props.data} x="0" y="3" />
				</View>

				<View style={styles.row}>
					<Cell data={this.props.data} x="1" y="0" />
					<Cell data={this.props.data} x="1" y="1" />
					<Cell data={this.props.data} x="1" y="2" />
					<Cell data={this.props.data} x="1" y="3" />
				</View>

				<View style={styles.row}>
					<Cell data={this.props.data} x="2" y="0" />
					<Cell data={this.props.data} x="2" y="1" />
					<Cell data={this.props.data} x="2" y="2" />
					<Cell data={this.props.data} x="2" y="3" />
				</View>

				<View style={styles.row}>
					<Cell data={this.props.data} x="3" y="0" />
					<Cell data={this.props.data} x="3" y="1" />
					<Cell data={this.props.data} x="3" y="2" />
					<Cell data={this.props.data} x="3" y="3" />
				</View>

				<View style={styles.row}>
					<Cell data={this.props.data} x="4" y="0" />
					<Cell data={this.props.data} x="4" y="1" />
					<Cell data={this.props.data} x="4" y="2" />
					<Cell data={this.props.data} x="4" y="3" />
				</View>

				{this.props.children}
			</View>
		);
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
