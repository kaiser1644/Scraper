"use strict";

var React = require("react");
var Rb = require("react-bootstrap");

var FormGroup = Rb.FormGroup;
var Checkbox = Rb.Checkbox;
var ControlLabel = Rb.ControlLabel;

module.exports = React.createClass({
	displayName: "exports",

	render: function render() {
		return React.createElement(
			FormGroup,
			null,
			React.createElement(
				ControlLabel,
				null,
				"1.　Choose forums to scrape:"
			),
			React.createElement("br", null),
			React.createElement(
				Checkbox,
				{ inline: true },
				"Chats"
			),
			React.createElement(
				Checkbox,
				{ inline: true },
				"Fashion"
			),
			React.createElement(
				Checkbox,
				{ inline: true },
				"Fitness"
			),
			React.createElement(
				Checkbox,
				{ inline: true },
				"Beauty"
			)
		);
	}
});