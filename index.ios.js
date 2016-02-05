/**
 * DealExplorer
 *
 * @providesModule DealExplorer
 * @flow
 */
'use strict';

var React = require('react-native');

var {
	AppRegistry,
	StyleSheet,
	View,
	Image,
	Text,
	TouchableHighlight,
	} = React;

var DealExplorer = React.createClass({
	watchID: (null: ?number),
	token: "",

	getInitialState() {
		return {
			lat: 'unknown',
			lon: 'unknown',
			token: ''
		};
	},

	componentDidMount: function() {
		navigator.geolocation.getCurrentPosition(
			(position) => {
			},
			(error) => alert(error.message),
			{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
		);
		this.watchID = navigator.geolocation.watchPosition((position) => {
			var lat = JSON.stringify(position["coords"]["latitude"]);
			var lon = JSON.stringify(position["coords"]["longitude"]);
			this.setState({lat});
			this.setState({lon});
		});
	},

	componentWillUnmount: function() {
		navigator.geolocation.clearWatch(this.watchID);
	},

	render: function() {
		return (
			<View>
				<Text style={styles.logo}>
					LAT: {this.state.lat}, LON: {this.state.lon}
				</Text>
				<View style={styles.container}>
					<TouchableHighlight onPress={this._login} style={styles.button}>
						<Text>LOGIN</Text>
					</TouchableHighlight>

					<TouchableHighlight onPress={this._updateLocation} style={styles.button}>
						<Text>UPDATE LOCATION</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	},

	_login: function () {
	fetch("http://192.168.1.91:8000/login/password", {
		method : "POST",
		body   : JSON.stringify({"username": "admin", "password": "admin"}),
		headers: {
			'Accept'      : 'application/json',
			'Content-Type': 'application/json'
		}
	})
		.then((response) => response.json())
		.then((responseData) => {
			var token = responseData['auth_token'];
			this.setState({token});
			alert('logged!');
		})
		.done();
	},

	_updateLocation: function () {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				var lat = JSON.stringify(position["coords"]["latitude"]);
				var lon = JSON.stringify(position["coords"]["longitude"]);
				this.setState({lat});
				this.setState({lon});
				fetch("http://192.168.1.91:8000/deal/0339788D-961C-42B5-AE7C-1948BE417E29/update-coords", {
					method : "POST",
					body   : JSON.stringify({"lat": lat, "lon": lon}),
					headers: {
						'Accept'      : 'application/json',
						'Content-Type': 'application/json',
						'X-Auth-Token': this.state.token
					}
				})
					.then((response) => response.json())
					.then((responseData) => {
						alert(responseData['success']);
					})
					.done();
			},
			(error) => alert(error.message),
			{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
		);
	},
});

var styles = StyleSheet.create({
	logo: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		margin: 50,
		fontWeight: '500'
	},
	container: {
		flex          : 1,
		flexDirection : 'row',
		justifyContent: 'center',
		alignItems    : 'center'
	},
	button   : {
		backgroundColor: '#EEEEEE',
		padding        : 10,
		marginRight    : 5,
		marginLeft     : 5
	}
});

AppRegistry.registerComponent('DealExplorer', () => DealExplorer);
module.exports = DealExplorer;