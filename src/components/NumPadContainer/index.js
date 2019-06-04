import React, { Component } from "react";
import Button from "../Button";
import { connect } from "react-redux";

class NumPadContainer extends Component {
	numbersToRender = this.props.numbers.map(item => {
		return <Button symbol={item} key={item.id} />;
	});
	symbolsToRender = this.props.symbols.map(item => {
		return <Button symbol={item} key={item.id} />;
	});
	render() {
		return (
			<div className="numpad-container">
				{this.numbersToRender}
				{this.symbolsToRender}
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		numbers: state.numbers,
		symbols: state.symbols
	};
};

export default connect(mapStateToProps)(NumPadContainer);
