import React from "react";
import { connect } from "react-redux";
import { collectData, clearData, operation } from "../../actions";

const Button = props => {
	return (
		<button
			className=""
			id={props.symbol.name}
			onClick={e => {
				switch (props.symbol.symbol) {
					case "CLS":
						props.clearData();
						break;
					case "=":
						props.operation();
						break;
					default:
						props.collectData(props.symbol.symbol);
				}
			}}>
			{props.symbol.symbol}
		</button>
	);
};

const mapStateToProps = (state, props) => {
	return {
		totalDisplay: state.totalDisplay
	};
};

export default connect(
	mapStateToProps,
	{ collectData, clearData, operation }
)(Button);
