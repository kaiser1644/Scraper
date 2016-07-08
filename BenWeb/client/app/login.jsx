var React = require("react");
var Rb = require("react-bootstrap");

var FormGroup = Rb.FormGroup;
var FormControl = Rb.FormControl;
var ControlLabel = Rb.ControlLabel;
var Checkbox = Rb.Checkbox;
var Alert = Rb.Alert;

module.exports = React.createClass({
	render: function () {
		return (
			<FormGroup>
				<ControlLabel>3.　Enter your login information:</ControlLabel>
				<Alert>
					We NEVER save your login information or use it for purposes other than Ben.
				</Alert>
				<FormControl className="shortInput" placeholder="User Name"></FormControl>
				<FormControl type="password" className="shortInput" placeholder="Password"></FormControl>
				<Checkbox inline>Log in as guest</Checkbox>
			</FormGroup>
		);
	}
});