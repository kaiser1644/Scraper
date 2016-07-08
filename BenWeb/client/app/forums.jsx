var React = require("react");
var Rb = require("react-bootstrap");

var FormGroup = Rb.FormGroup;
var Checkbox = Rb.Checkbox;
var ControlLabel = Rb.ControlLabel;

module.exports = React.createClass({
	render: function () {
		return (
			<FormGroup>
				<ControlLabel>1.　Choose forums:</ControlLabel>
				<br />
				<Checkbox inline>
					Chats
				</Checkbox>
				<Checkbox inline>
					Fashion
				</Checkbox>
				<Checkbox inline>
					Fitness
				</Checkbox>
				<Checkbox inline>
					Beauty
				</Checkbox>
			</FormGroup>
		);
	}
});