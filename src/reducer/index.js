import { COLLECT_DATA } from "../actions/actions";

let INITIAL_STATE = {
	totalDisplay: "",
	partialDisplay: 0,
	operationCollector: []
};

const reducer = (state = INITIAL_STATE, action) => {
	let newState;
	let opt = action.payload.operationData;
	switch (action.type) {
		case COLLECT_DATA:
			let ttDisplay = state.totalDisplay;
			let ptDisplay = state.partialDisplay;
			let opSize = state.totalDisplay.length - 1;
			let opData = [];
			switch (opt) {
				case "0":
				case "1":
				case "2":
				case "3":
				case "4":
				case "5":
				case "6":
				case "7":
				case "8":
				case "9":
					if (ttDisplay.length === 0) {
						ptDisplay = Number(opt);
						ttDisplay = ttDisplay.append(opt);
					} else {
						if (
							ttDisplay[opSize] === "+" ||
							ttDisplay[opSize] === "*" ||
							ttDisplay[opSize] === "-" ||
							ttDisplay[opSize] === "/"
						) {
							ptDisplay = Number(opt);
							ttDisplay = ttDisplay.append(opt);
						} else {
							ptDisplay = String(ptDisplay);
							ptDisplay += opt;
							ptDisplay = Number(ptDisplay);
							ttDisplay = ttDisplay.append(opt);
						}
					}
					break;
				case "*":
				case "/":
				case "+":
					if (ttDisplay.length === 0) {
						ttDisplay = "";
						ptDisplay = 0;
					} else {
						if (
							ttDisplay[opSize] === "+" ||
							ttDisplay[opSize] === "*" ||
							ttDisplay[opSize] === "/" ||
							ttDisplay[opSize] === "-"
						) {
							ptDisplay = opt;
							ttDisplay = ttDisplay.slice(0, -1);
							ttDisplay = ttDisplay.append(opt);
						} else {
							ptDisplay = opt;
							ttDisplay = ttDisplay.append(opt);
						}
					}
					break;
				case "-":
					if (ttDisplay.length === 0) {
						ttDisplay = opt;
						ptDisplay = opt;
					}
					if (
						ttDisplay[opSize] === "+" ||
						ttDisplay[opSize] === "*" ||
						ttDisplay[opSize] === "/" ||
						ttDisplay[opSize] === "-"
					) {
						ptDisplay = opt;
						ttDisplay = ttDisplay.slice(0, -1);
						ttDisplay = ttDisplay.append(opt);
					} else {
						ptDisplay = opt;
						ttDisplay = ttDisplay.append(opt);
					}
					break;
				case ".":
					if (ttDisplay.length === 0) {
						ttDisplay = "0.";
						ptDisplay = "0.";
					} else {
						if (
							ttDisplay[opSize] === "+" ||
							ttDisplay[opSize] === "*" ||
							ttDisplay[opSize] === "/" ||
							ttDisplay[opSize] === "-"
						) {
							ttDisplay = ttDisplay.append("0.");
							ptDisplay = "0.";
						} else {
							ptDisplay = String(ptDisplay);
							let isFloat = ptDisplay.includes(".");
							if (isFloat) {
								ptDisplay = Number(ptDisplay);
							} else {
								ptDisplay = ptDisplay.append(opt);
								ttDisplay = ttDisplay.append(opt);
							}
						}
					}
					break;
				default:
			}
			newState = {
				...state,
				partialDisplay: ptDisplay,
				totalDisplay: ttDisplay
			};
			break;
		default:
			newState = { ...state };
	}
	return newState;
};

const reducer2 = (state = INITIAL_STATE, action) => {
	let newState;
	let opt = action.payload.operationData;
	switch (action.type) {
		case COLLECT_DATA:
			if (state.totalDisplay === "0") {
				newState = {
					...state,
					totalDisplay: action.payload.operationData
				};
			} else {
				if (
					(state.operation === "+" ||
						state.operation === "-" ||
						state.operation === "*" ||
						state.operation === "/") &&
					(state.totalDisplay[state.totalDisplay.length - 1] === "+" ||
						state.totalDisplay[state.totalDisplay.length - 1] === "-" ||
						state.totalDisplay[state.totalDisplay.length - 1] === "*" ||
						state.totalDisplay[state.totalDisplay.length - 1] === "/")
				) {
					let newPartial = state.totalDisplay.indexOf(state.operation);

					let toDisplay = state.totalDisplay + action.payload.operationData;
					let toDisplay2 = toDisplay.slice(newPartial + 1);
					console.log(toDisplay2);
					newState = {
						...state,
						totalDisplay: state.totalDisplay + action.payload.operationData,
						partialDisplay: toDisplay2
					};
				} else {
					newState = {
						...state,
						totalDisplay: state.totalDisplay + action.payload.operationData,
						partialDisplay: state.totalDisplay + action.payload.operationData
					};
				}
			}
			break;
		case CLEAR:
			newState = {
				...state,
				totalDisplay: "",
				partialDisplay: 0
			};
			break;
		case OPERATION:
			let ttDisplay = state.totalDisplay;
			let onlySum = ttDisplay.includes("*") || ttDisplay.includes("/");
			let operationArray = ttDisplay.split(/[\+,\-,\*.\/]+/);
			console.log(operationArray);
			let num;
			//Here i test how to create two arrays containing the numbers and the symbols 
			let opera = "32+2+85-78/25"
			undefined
			let arr = opera.split(/[\+,\-,\*.\/]+/);
			undefined
			let sym = opera.split(/[0,9]+/)
			undefined
			sym = opera.split(/[0-9]+/)
			(6) ["", "+", "+", "-", "/", ""]
			sym.pop
			ƒ pop() { [native code] }
			sym.slice(1,-1)
			(4) ["+", "+", "-", "/"]
			//





			if (onlySum) {
			} else {
			}
			break;
		default:
			newState = { ...state };
	}
	return newState;
};
