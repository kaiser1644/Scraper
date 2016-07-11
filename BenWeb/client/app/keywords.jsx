var React = require("react");
var Rb = require("react-bootstrap");

var FormGroup = Rb.FormGroup;
var FormControl = Rb.FormControl;
var ControlLabel = Rb.ControlLabel;

module.exports = React.createClass({	
	render: function () {
		var onChange = this.props.onChange;
		var data = this.props.data;
		return (
			<FormGroup>
				<ControlLabel>2. Enter keywords:</ControlLabel>
				<FormControl className="longInput" onChange={onChange} value={data}></FormControl>
			</FormGroup>
		);
	}
});