"use strict";

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

	run: function run() {
		alert("run");
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
				React.createElement(Forums, null),
				React.createElement(Keywords, null),
				React.createElement(Login, null),
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