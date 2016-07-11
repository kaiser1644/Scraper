"use strict";

var React = require("react");
var Rb = require("react-bootstrap");

var FormGroup = Rb.FormGroup;
var Checkbox = Rb.Checkbox;
var ControlLabel = Rb.ControlLabel;

module.exports = React.createClass({
	displayName: "exports",

	render: function render() {
		var data = this.props.data;
		var onChange = this.props.onChange;
		return React.createElement(
			FormGroup,
			null,
			React.createElement(
				ControlLabel,
				null,
				"1. Choose forums:"
			),
			React.createElement("br", null),
			data.map(function (oneForum) {
				return React.createElement(
					Checkbox,
					{ inline: true, onChange: onChange, key: oneForum.key, value: oneForum.key, checked: oneForum.checked },
					oneForum.text
				);
			})
		);
	}
});