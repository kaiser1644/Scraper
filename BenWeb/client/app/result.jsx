var React = require("react");

module.exports = React.createClass({	
	render: function () {
		var data = this.props.data;
		return (
			<div className="grid">
			{
				data.map(function(oneSource) {
					return (
						<div className="grid-item">
							<img src={oneSource} />
						</div>);
				})
			}
			</div>
		);
	}
});