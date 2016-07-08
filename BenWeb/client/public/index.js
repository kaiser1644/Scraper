"use strict";

var React = require("react");
var Rb = require("react-bootstrap");

// React-bootstrap components
var PageHeader = Rb.PageHeader;
var FormGroup = Rb.FormGroup;
var FormControl = Rb.FormControl;
var HelpBlock = Rb.HelpBlock;
var ControlLabel = Rb.ControlLabel;
var Button = Rb.Button;
var Navbar = Rb.Navbar;
var Nav = Rb.Nav;
var MenuItem = Rb.MenuItem;

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
				React.createElement("link", { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" })
			),
			React.createElement(
				"body",
				null,
				React.createElement(
					"div",
					{ className: "container" },
					React.createElement(
						Navbar,
						null,
						React.createElement(
							Navbar.Header,
							null,
							React.createElement(
								Navbar.Brand,
								null,
								"Ben"
							),
							React.createElement(Navbar.Toggle, null)
						),
						React.createElement(Navbar.Collapse, null)
					),
					React.createElement(
						"form",
						null,
						React.createElement(
							FormGroup,
							{ controlId: "formControlsFile" },
							React.createElement(
								ControlLabel,
								null,
								"File"
							),
							React.createElement(FormControl, { type: "file" }),
							React.createElement(
								HelpBlock,
								null,
								"Example block-level help text here."
							)
						),
						React.createElement(
							Button,
							{ type: "submit" },
							"Start"
						)
					)
				)
			)
		);
	}
});