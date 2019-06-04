import React, { Component } from "react";
import Display from "../Display";
import MiniDisplay from "../MiniDisplay";
import { connect } from "react-redux";

class DisplayContainer extends Component {
	render() {
		return (
			<div className="display-container">
				<MiniDisplay totalDisplay={this.props.totalDisplay} />
				<Display partialDisplay={this.props.partialDisplay} />
			</div>
		);
	}
}
const mapStateToProps = (state, props) => {
	return {
		partialDisplay: state.partialDisplay,
		totalDisplay: state.totalDisplay
	};
};
export default connect(mapStateToProps)(DisplayContainer);
