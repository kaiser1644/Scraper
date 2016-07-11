var React = require("react");
var Rb = require("react-bootstrap");

var FormGroup = Rb.FormGroup;
var FormControl = Rb.FormControl;
var ControlLabel = Rb.ControlLabel;
var Checkbox = Rb.Checkbox;
var Alert = Rb.Alert;

module.exports = React.createClass({
	getInitialState: function() {
		return {
			isGuest: false,
			username: "",
			password: ""
		};
	},
	
	handleGuestChange: function(e) {
		var cb = e.target;
		document.getElementById("txtUserName").disabled = cb.checked;
		document.getElementById("txtPassword").disabled = cb.checked;
		this.setState({ isGuest: cb.checked });
	},
	
	render: function () {
		return (
			<FormGroup>
				<ControlLabel>3. Enter your login information:</ControlLabel>
				<Alert>
					We NEVER save your login information or use it for purposes other than Ben.
				</Alert>
				<FormControl className="shortInput" placeholder="User Name" id="txtUserName" ></FormControl>
				<FormControl type="password" className="shortInput" placeholder="Password" id="txtPassword" ></FormControl>
				<Checkbox inline onChange={this.handleGuestChange}>Log in as guest</Checkbox>
			</FormGroup>
		);
	}
});