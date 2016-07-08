// Libraries

var React = require("react");
var Rb = require("react-bootstrap");

// React-bootstrap components
var PageHeader = Rb.PageHeader;
var Button = Rb.Button;

// Form components
var Forums = require("./forums");
var Keywords = require("./keywords");
var Login = require("./login");

module.exports = React.createClass({
	run: function () {
		
	},

	render: function() {
		return (
			<html>
				<head>
					<title>Ben</title>
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
					<link rel="stylesheet" href="css/style.css" />
				</head>
				<body>
					<div className="container">
					<PageHeader>Ben <small>Never miss a ben again.</small></PageHeader>
					<form>
						<Forums></Forums>
						<Keywords></Keywords>
						<Login></Login>
						<Button className="start" onclick={this.run}>
							Start!
						</Button>
					</form>
					
					</div>
				</body>
			</html>
    );
  }
});