"use strict";

var React = require("react");
var Rb = require("react-bootstrap");

var FormGroup = Rb.FormGroup;
var FormControl = Rb.FormControl;
var ControlLabel = Rb.ControlLabel;

module.exports = React.createClass({
	displayName: "exports",

	render: function render() {
		var onChange = this.props.onChange;
		var data = this.props.data;
		return React.createElement(
			FormGroup,
			null,
			React.createElement(
				ControlLabel,
				null,
				"2. Enter keywords:"
			),
			React.createElement(FormControl, { className: "longInput", onChange: onChange, value: data })
		);
	}
});