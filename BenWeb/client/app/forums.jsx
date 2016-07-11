var React = require("react");
var Rb = require("react-bootstrap");

var FormGroup = Rb.FormGroup;
var Checkbox = Rb.Checkbox;
var ControlLabel = Rb.ControlLabel;

module.exports = React.createClass({
	getInitialState: function() {
		return { selectedForums: []};
	},
	
	handleForumChange: function(e) {
		var cb = e.target;
		var id = cb.value;
		var selectedForums = this.state.selectedForums.slice();;
		if (cb.checked) {
			selectedForums.push(id);
		} else {
			selectedForums.splice(selectedForums.indexOf(id), 1);
		}
		this.setState({ selectedForums: selectedForums });
	},
	
	render: function () {
		return (
			<FormGroup>
				<ControlLabel>1. Choose forums:</ControlLabel>
				<br />
				<Checkbox inline onChange={this.handleForumChange} value="398">
					Chats
				</Checkbox>
				<Checkbox inline onChange={this.handleForumChange} value="225">
					Fashion
				</Checkbox>
				<Checkbox inline onChange={this.handleForumChange} value="341">
					Fitness
				</Checkbox>
				<Checkbox inline onChange={this.handleForumChange} value="347">
					Beauty
				</Checkbox>
			</FormGroup>
		);
	}
});