"use strict";

// Libraries

var React = require("react");
var Rb = require("react-bootstrap");

// React-bootstrap components
var PageHeader = Rb.PageHeader;
var Button = Rb.Button;

// Form components
var Forums = require("./forums");
var Keywords = require("./keywords");
var File = require("./file");
var Login = require("./login");

module.exports = React.createClass({
	displayName: "exports",

	render: function render() {
		return React.createElement(
			"html",
			null,
			React.createElement(
				"head",
				null,
				React.createElement(
					"title",
					null,
					"Ben"
				),
				React.createElement("link", { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" }),
				React.createElement("link", { rel: "stylesheet", href: "css/style.css" })
			),
			React.createElement(
				"body",
				null,
				React.createElement(
					"div",
					{ className: "container" },
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
						React.createElement(File, null),
						React.createElement(Login, null),
						React.createElement(
							Button,
							{ type: "submit", className: "start" },
							"Start!"
						)
					)
				)
			)
		);
	}
});