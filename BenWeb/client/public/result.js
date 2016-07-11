"use strict";

var React = require("react");

module.exports = React.createClass({
	displayName: "exports",

	render: function render() {
		var data = this.props.data;
		return React.createElement(
			"div",
			{ className: "grid" },
			data.map(function (oneSource) {
				return React.createElement(
					"div",
					{ className: "grid-item" },
					React.createElement("img", { src: oneSource })
				);
			})
		);
	}
});