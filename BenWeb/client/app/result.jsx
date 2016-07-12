var React = require("react");
var Rb = require("react-bootstrap");

// React-bootstrap components
var Panel = Rb.Panel;

module.exports = React.createClass({	
	render: function () {
		var data = this.props.data;
		if (data && data.length > 0) {
			return (
				<Panel header="Here are the Bens we found.">
					<div className="grid">
					{
						data.map(function(oneSource) {
							return (
								<img src={oneSource} className="grid-item" key={oneSource}/>
							);
						})
					}
					</div>
				</Panel>
			);
		} else {
			return null;
		}
	}
});