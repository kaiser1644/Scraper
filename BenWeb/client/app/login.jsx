var React = require("react");
var Rb = require("react-bootstrap");

var FormGroup = Rb.FormGroup;
var FormControl = Rb.FormControl;
var ControlLabel = Rb.ControlLabel;
var Checkbox = Rb.Checkbox;
var Alert = Rb.Alert;

module.exports = React.createClass({
	handleGuestChange: function(e) {
		var cb = e.target;
		document.getElementById("txtUserName").disabled = cb.checked;
		document.getElementById("txtPassword").disabled = cb.checked;
		this.props.updateGuest(e);
	},
	
	render: function () {
		var data = this.props.data;
		var updateUsername = this.props.updateUsername;
		var updatePassword = this.props.updatePassword;
		return (
			<FormGroup>
				<ControlLabel>3. Enter your login information:</ControlLabel>
				<Alert>
					We NEVER save your login information or use it for purposes other than Ben.
				</Alert>
				<FormControl className="shortInput" placeholder="User Name" id="txtUserName" onChange={updateUsername} value={data.username}></FormControl>
				<FormControl type="password" className="shortInput" placeholder="Password" id="txtPassword" onChange={updatePassword} value={data.password}></FormControl>
				<Checkbox inline onChange={this.handleGuestChange} checked={data.isGuest}>Log in as guest</Checkbox>
			</FormGroup>
		);
	}
});