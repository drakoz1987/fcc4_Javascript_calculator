import React from "react";
import DisplayContainer from "../DisplayContainer";
import NumPadContainer from "../NumPadContainer";
//
const App = props => {
	return (
		<div id="App" className="app">
			<div className="calculator-container">
				<DisplayContainer />
				<NumPadContainer />
			</div>
		</div>
	);
};
export default App;
