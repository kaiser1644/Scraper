var React = require("react");
var Rb = require("react-bootstrap");

// React-bootstrap components
var PageHeader = Rb.PageHeader;
var FormGroup = Rb.FormGroup;
var FormControl = Rb.FormControl;
var HelpBlock = Rb.HelpBlock;
var ControlLabel = Rb.ControlLabel;
var Button = Rb.Button;
var Navbar = Rb.Navbar;
var Nav = Rb.Nav;
var MenuItem = Rb.MenuItem;

module.exports = React.createClass({
	render: function() {
		return (
			<html>
				<head>
					<title>Ben</title>
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
				</head>
				<body>
					<div className="container">
					
					<Navbar>
						<Navbar.Header>
						  <Navbar.Brand>
							Ben
						  </Navbar.Brand>
						  <Navbar.Toggle />
						</Navbar.Header>
						<Navbar.Collapse>
						</Navbar.Collapse>
					</Navbar>
					
					<form>
						<FormGroup controlId="formControlsFile">
							<ControlLabel>File</ControlLabel>
							<FormControl type="file" />
							<HelpBlock>Example block-level help text here.</HelpBlock>
						</FormGroup>
						<Button type="submit">
							Start
						</Button>
					</form>
					
					</div>
				</body>
			</html>
    );
  }
});