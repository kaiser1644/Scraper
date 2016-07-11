"use strict";

var React = require("react");
var Rb = require("react-bootstrap");

var FormGroup = Rb.FormGroup;
var Checkbox = Rb.Checkbox;
var ControlLabel = Rb.ControlLabel;

module.exports = React.createClass({
	displayName: "exports",

	getInitialState: function getInitialState() {
		return { selectedForums: [] };
	},

	handleForumChange: function handleForumChange(e) {
		var cb = e.target;
		var id = cb.value;
		var selectedForums = this.state.selectedForums.slice();;
		if (cb.checked) {
			selectedForums.push(id);
		} else {
			selectedForums.splice(selectedForums.indexOf(id), 1);
		}
		this.setState({ selectedForums: selectedForums });
	},

	render: function render() {
		return React.createElement(
			FormGroup,
			null,
			React.createElement(
				ControlLabel,
				null,
				"1. Choose forums:"
			),
			React.createElement("br", null),
			React.createElement(
				Checkbox,
				{ inline: true, onChange: this.handleForumChange, value: "398" },
				"Chats"
			),
			React.createElement(
				Checkbox,
				{ inline: true, onChange: this.handleForumChange, value: "225" },
				"Fashion"
			),
			React.createElement(
				Checkbox,
				{ inline: true, onChange: this.handleForumChange, value: "341" },
				"Fitness"
			),
			React.createElement(
				Checkbox,
				{ inline: true, onChange: this.handleForumChange, value: "347" },
				"Beauty"
			)
		);
	}
});