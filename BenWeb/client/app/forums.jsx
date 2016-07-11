var React = require("react");
var Rb = require("react-bootstrap");

var FormGroup = Rb.FormGroup;
var Checkbox = Rb.Checkbox;
var ControlLabel = Rb.ControlLabel;

module.exports = React.createClass({	
	render: function () {
		var data = this.props.data;
		var onChange = this.props.onChange;
		return (
			<FormGroup>
				<ControlLabel>1. Choose forums:</ControlLabel>
				<br />
				{
					data.map(function(oneForum) {
						return (
							<Checkbox inline onChange={onChange} key={oneForum.key} value={oneForum.key} checked={oneForum.checked}>
								{oneForum.text}
							</Checkbox>);
					})
				}
			</FormGroup>
		);
	}
});