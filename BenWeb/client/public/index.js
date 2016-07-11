"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Libraries

var React = require("react");
var ReactDOM = require("react-dom");
var Rb = require("react-bootstrap");

// React-bootstrap components
var PageHeader = Rb.PageHeader;
var Button = Rb.Button;

// Form components
var Forums = require("./forums");
var Keywords = require("./keywords");
var Login = require("./login");

var Index = React.createClass({
	displayName: "Index",

	getInitialState: function getInitialState() {
		return {
			forums: [{ key: "398", text: "Chats", checked: false }, { key: "225", text: "Fashion", checked: false }, { key: "341", text: "Fitness", checked: false }, { key: "347", text: "Beauty", checked: false }],
			keywords: "",
			login: {
				isGuest: false,
				username: "",
				password: ""
			}
		};
	},

	updateForums: function updateForums(e) {
		var cb = e.target;
		var id = cb.value;
		var forums = this.state.forums.slice();

		// Find corresponding forum
		for (var i = 0; i < forums.length; i++) {
			if (forums[i].key === id) {
				forums[i].checked = cb.checked;
			}
		}

		this.setState({ forums: forums });
	},

	updateKeywords: function updateKeywords(e) {
		this.setState({ keywords: e.target.value });
	},

	updateUsername: function updateUsername(e) {
		var text = e.target.value;
		this.setState({ login: _extends({}, this.state.login, { username: text }) });
	},

	updatePassword: function updatePassword(e) {
		var text = e.target.value;
		this.setState({ login: _extends({}, this.state.login, { password: text }) });
	},

	updateGuest: function updateGuest(e) {
		this.setState({ login: _extends({}, this.state.login, { isGuest: e.target.checked }) });
	},

	run: function run() {
		//alert("run");
		// Preprocess request data
		var data = {};
		data.forums = [];
		// forums
		for (var i = 0; i < this.state.forums.length; i++) {
			if (this.state.forums[i].checked) {
				data.forums.push(this.state.forums[i].key);
			}
		}

		if (data.forums.length === 0) {
			//TODO error message
			return;
		}

		// keywords
		if (this.state.keywords.length === 0) {
			//TODO error message
			return;
		}

		data.keywords = this.state.keywords.split(" ");

		// login
		if (this.state.login.isGuest) {
			data.isGuest = true;
		} else {
			data.isGuest = false;
			data.username = this.state.login.username;
			data.password = this.state.login.password;
		}

		// Call web service
		$.ajax({
			url: "/scrape",
			type: "GET",
			dataType: "html",
			data: data,
			success: function success(data) {
				// Rendered on server side so replace the entire page with response
				document.write(data);
				document.close();
			},
			error: function error(xhr, status, err) {
				console.error("/scrape", status, err.toString());
			}
		});
	},

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				PageHeader,
				null,
				"Ben ",
				React.createElement(
					"small",
					null,
					"Never miss a ben again."
				)
			),
			React.createElement(
				"form",
				null,
				React.createElement(Forums, { data: this.state.forums, onChange: this.updateForums }),
				React.createElement(Keywords, { data: this.state.keywords, onChange: this.updateKeywords }),
				React.createElement(Login, { data: this.state.login, updateUsername: this.updateUsername, updatePassword: this.updatePassword, updateGuest: this.updateGuest }),
				React.createElement(
					Button,
					{ className: "start", onClick: this.run },
					"Start!"
				)
			)
		);
	}
});

if (typeof window !== 'undefined') {
	ReactDOM.render(React.createElement(Index, null), document.getElementById("divContainer"));
}

module.exports = Index;