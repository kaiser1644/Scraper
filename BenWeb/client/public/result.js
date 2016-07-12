"use strict";

var React = require("react");
var Rb = require("react-bootstrap");

// React-bootstrap components
var Panel = Rb.Panel;

module.exports = React.createClass({
	displayName: "exports",

	render: function render() {
		var data = this.props.data;
		if (data && data.length > 0) {
			return React.createElement(
				Panel,
				{ header: "Here are the Bens we found." },
				React.createElement(
					"div",
					{ className: "grid" },
					data.map(function (oneSource) {
						return React.createElement("img", { src: oneSource, className: "grid-item", key: oneSource });
					})
				)
			);
		} else {
			return null;
		}
	}
});