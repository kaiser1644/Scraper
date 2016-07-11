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

	handleGuestChange: function handleGuestChange(e) {
		var cb = e.target;
		document.getElementById("txtUserName").disabled = cb.checked;
		document.getElementById("txtPassword").disabled = cb.checked;
		this.props.updateGuest(e);
	},

	render: function render() {
		var data = this.props.data;
		var updateUsername = this.props.updateUsername;
		var updatePassword = this.props.updatePassword;
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
			React.createElement(FormControl, { className: "shortInput", placeholder: "User Name", id: "txtUserName", onChange: updateUsername, value: data.username }),
			React.createElement(FormControl, { type: "password", className: "shortInput", placeholder: "Password", id: "txtPassword", onChange: updatePassword, value: data.password }),
			React.createElement(
				Checkbox,
				{ inline: true, onChange: this.handleGuestChange, checked: data.isGuest },
				"Log in as guest"
			)
		);
	}
});