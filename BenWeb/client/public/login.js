"use strict";

var React = require("react");
var Rb = require("react-bootstrap");

var FormGroup = Rb.FormGroup;
var FormControl = Rb.FormControl;
var ControlLabel = Rb.ControlLabel;
var Checkbox = Rb.Checkbox;
var Alert = Rb.Alert;

module.exports = React.createClass({
	displayName: "exports",

	getInitialState: function getInitialState() {
		return {
			isGuest: false,
			username: "",
			password: ""
		};
	},

	handleGuestChange: function handleGuestChange(e) {
		var cb = e.target;
		document.getElementById("txtUserName").disabled = cb.checked;
		document.getElementById("txtPassword").disabled = cb.checked;
		this.setState({ isGuest: cb.checked });
	},

	render: function render() {
		return React.createElement(
			FormGroup,
			null,
			React.createElement(
				ControlLabel,
				null,
				"3. Enter your login information:"
			),
			React.createElement(
				Alert,
				null,
				"We NEVER save your login information or use it for purposes other than Ben."
			),
			React.createElement(FormControl, { className: "shortInput", placeholder: "User Name", id: "txtUserName" }),
			React.createElement(FormControl, { type: "password", className: "shortInput", placeholder: "Password", id: "txtPassword" }),
			React.createElement(
				Checkbox,
				{ inline: true, onChange: this.handleGuestChange },
				"Log in as guest"
			)
		);
	}
});