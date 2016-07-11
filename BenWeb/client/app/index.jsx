// Libraries

var React = require("react");
var ReactDOM = require("react-dom");
var Rb = require("react-bootstrap");

// React-bootstrap components
var PageHeader = Rb.PageHeader;
var Button = Rb.Button;

// Form components
var Forums = require("./forums");
var Keywords = require("./keywords");
var Login = require("./login");

var Index = React.createClass({
	run: function () {
		alert("run");
	},

	render: function() {
		return (
			<div>
				<PageHeader>Ben <small>Never miss a ben again.</small></PageHeader>
				<form>
					<Forums></Forums>
					<Keywords></Keywords>
					<Login></Login>
					<Button className="start" onClick={this.run}>
						Start!
					</Button>
				</form>
			</div>
		);
	}
});

if(typeof window !== 'undefined') {
    ReactDOM.render(<Index />, document.getElementById("divContainer"));
}



module.exports = Index;