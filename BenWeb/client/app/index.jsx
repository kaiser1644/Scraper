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
	getInitialState: function() {
		return {
			forums: [
				{ key: "398", text: "Chats", checked: false },
				{ key: "225", text: "Fashion", checked: false },
				{ key: "341", text: "Fitness", checked: false },
				{ key: "347", text: "Beauty", checked: false },
			],
			keywords: "",
			login: {
				isGuest: false,
				username: "",
				password: ""
			}
		};
	},
	
	updateForums: function(e) {
		var cb = e.target;
		var id = cb.value;
		var forums = this.state.forums.slice();
		
		// Find corresponding forum
		for (var i = 0; i < forums.length; i++) {
			if (forums[i].key === id) {
				forums[i].checked = cb.checked;
			}
		}
		
		this.setState({ forums: forums });
	},
	
	updateKeywords: function(e) {
		this.setState({ keywords: e.target.value });
	},
	
	updateUsername: function(e) {
		var text = e.target.value;
		this.setState({ login: { ...this.state.login, username: text } });
	},
	
	updatePassword: function(e) {
		var text = e.target.value;
		this.setState({ login: { ...this.state.login, password: text } });
	},
	
	updateGuest: function(e) {
		this.setState({ login: { ...this.state.login, isGuest: e.target.checked } });
	},
	
	run: function () {
		//alert("run");
		// Preprocess request data
		var data = {};
		data.forums = [];
		// forums
		for (var i = 0; i < this.state.forums.length; i++) {
			if (this.state.forums[i].checked) {
				data.forums.push(this.state.forums[i].key);
			}
		}
		
		if (data.forums.length === 0) {
			//TODO error message
			return;
		}
		
		// keywords
		if (this.state.keywords.length === 0) {
			//TODO error message
			return;
		}
		
		data.keywords = this.state.keywords.split(" ");
		
		// login
		if (this.state.login.isGuest) {
			data.isGuest = true;
		}
		else {
			data.isGuest = false;
			data.username = this.state.login.username;
			data.password = this.state.login.password;
		}
		
		// Call web service
		$.ajax({
			url: "/scrape",
			type: "GET",
			dataType: "html",
			data: data,
			success: function(data) {
				// Rendered on server side so replace the entire page with response
				document.write(data);
				document.close();
			},
			error: function(xhr, status, err) {
				console.error("/scrape", status, err.toString());
			}
		});
	},
	
	render: function() {
		return (
			<div>
				<PageHeader>Ben <small>Never miss a ben again.</small></PageHeader>
				<form>
					<Forums data={this.state.forums} onChange={this.updateForums}></Forums>
					<Keywords data={this.state.keywords} onChange={this.updateKeywords}></Keywords>
					<Login data={this.state.login} updateUsername={this.updateUsername} updatePassword={this.updatePassword} updateGuest={this.updateGuest}></Login>
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