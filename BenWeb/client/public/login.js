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

	render: function render() {
		return React.createElement(
			FormGroup,
			null,
			React.createElement(
				ControlLabel,
				null,
				"4.　Enter your login information:"
			),
			React.createElement(
				Alert,
				null,
				"We NEVER save your login information or use it for purposes other than Ben."
			),
			React.createElement(FormControl, { className: "shortInput", placeholder: "User Name" }),
			React.createElement(FormControl, { type: "password", className: "shortInput", placeholder: "Password" }),
			React.createElement(
				Checkbox,
				{ inline: true },
				"Log in as guest"
			)
		);
	}
});