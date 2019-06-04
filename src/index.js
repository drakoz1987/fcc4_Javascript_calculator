import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reactDOM from "react-dom";
import App from "./components/App";
import data from "./data/data.json";
import { COLLECT_DATA, CLEAR, OPERATION } from "./actions/actions";
const CONTAINER = document.getElementById("root");
const INITIAL_STATE = {
  symbols: data[0].data,
  numbers: data[1].data,
  partialDisplay: 0,
  totalDisplay: "",
  symbolsArray: [],
  result: null
};
const reducer = (state = INITIAL_STATE, action) => {
  let newState;
  let opt;
  switch (action.type) {
    case CLEAR:
      newState = {
        ...state,
        totalDisplay: "",
        partialDisplay: 0,
        symbolsArray: [],
        result: null
      };
      break;
    case OPERATION:
      let dataToOperate = state.totalDisplay;
      let arrayOfData = [];
      let arrayOfNumbers = [];
      let arrayOfSymbols = [];
      let aNumber = "";
      for (let i = 0; i < dataToOperate.length; i++) {
        switch (dataToOperate[i]) {
          case "+":
          case "-":
          case "*":
          case "/":
            if (dataToOperate[i] === "-") {
              if (i === 0) {
                aNumber = "-";
              } else {
                arrayOfData = [...arrayOfData, Number(aNumber)];
                arrayOfNumbers = [...arrayOfNumbers, Number(aNumber)];
                aNumber = "-";
                arrayOfSymbols = [...arrayOfSymbols, "+"];
              }
            } else {
              arrayOfData = [...arrayOfData, Number(aNumber)];
              arrayOfNumbers = [...arrayOfNumbers, Number(aNumber)];
              aNumber = "";
              arrayOfData = [...arrayOfData, dataToOperate[i]];
              arrayOfSymbols = [...arrayOfSymbols, dataToOperate[i]];
            }
            break;
          default:
            aNumber += dataToOperate[i];
        }
      }
      arrayOfData = [...arrayOfData, Number(aNumber)];
      arrayOfNumbers = [...arrayOfNumbers, Number(aNumber)];
      let value1, value2, position, localResult;
      let result = null;
      while (result === null) {
        if (!arrayOfSymbols.includes("*") && !arrayOfSymbols.includes("/")) {
          result = arrayOfNumbers.reduce((a, b) => {
            return a + b;
          });
        } else {
          if (arrayOfNumbers.length === 2) {
            if (arrayOfSymbols.includes("*")) {
              result = arrayOfNumbers.reduce((a, b) => {
                return a * b;
              });
            } else if (arrayOfSymbols.includes("/")) {
              result = arrayOfNumbers.reduce((a, b) => {
                return a / b;
              });
            }
          } else {
            if (arrayOfSymbols.indexOf("*") !== -1) {
              position = arrayOfSymbols.indexOf("*");
              value1 = arrayOfNumbers[position];
              value2 = arrayOfNumbers[position + 1];
              localResult = value1 * value2;
              arrayOfSymbols.splice(position, 1);
              arrayOfNumbers.splice(position, 2, localResult);
            } else if (arrayOfSymbols.indexOf("/") !== -1) {
              position = arrayOfSymbols.indexOf("/");
              value1 = arrayOfNumbers[position];
              value2 = arrayOfNumbers[position + 1];
              localResult = value1 / value2;
              arrayOfSymbols.splice(position, 1);
              arrayOfNumbers.splice(position, 2, localResult);
            }
          }
          if (arrayOfSymbols.indexOf("*") !== -1) {
          }
        }
      }
      let newResult = String(result);
      let decimal = newResult.indexOf(".");
      if (decimal !== -1) {
        if (newResult.length <= decimal + 5) {
        } else {
          newResult = newResult.substring(0, decimal + 5);
        }
      }
      result = Number(newResult);
      newState = {
        totalDisplay: state.totalDisplay + "=" + result,
        partialDisplay: result,
        result: result
      };

      break;
    //accion al oprimir los botones de la calculadora
    case COLLECT_DATA:
      opt = action.payload.operationData;
      let ttDisplay = state.totalDisplay;
      let ptDisplay = state.partialDisplay;
      let opSize = state.totalDisplay.length - 1;
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
          if (state.result !== null) {
            ttDisplay = "";
            ttDisplay += opt;
            ptDisplay = opt;
          } else {
            if (ttDisplay.length === 0) {
              ptDisplay = opt;
              ttDisplay += opt;
            } else {
              if (
                ttDisplay[opSize] === "+" ||
                ttDisplay[opSize] === "*" ||
                ttDisplay[opSize] === "-" ||
                ttDisplay[opSize] === "/"
              ) {
                if (ttDisplay.length === 1) {
                  ptDisplay += opt;
                  ttDisplay += opt;
                } else {
                  ptDisplay = opt;
                  ttDisplay += opt;
                }
              } else if (ttDisplay[opSize] === "0") {
                let isFloat = ptDisplay.includes(".");
                if (isFloat) {
                  ptDisplay += opt;
                  ttDisplay += opt;
                }
              } else {
                ptDisplay = String(ptDisplay);
                ptDisplay += opt;
                ttDisplay += opt;
              }
            }
          }
          break;
        case "*":
        case "/":
        case "+":
          if (state.result !== null) {
            ttDisplay = state.result + opt;
            ptDisplay = opt;
          } else {
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
                if (ttDisplay.length === 1) {
                } else {
                  ptDisplay = opt;
                  ttDisplay = ttDisplay.slice(0, -1);
                  ttDisplay += opt;
                }
              } else if (ttDisplay[opSize] === ".") {
                ptDisplay = String(ptDisplay);
                ptDisplay = opt;
                ttDisplay += "0" + opt;
              } else {
                ptDisplay = opt;
                ttDisplay += opt;
              }
            }
          }
          break;
        case "-":
          if (state.result !== null) {
            ttDisplay = state.result + opt;
            ptDisplay = opt;
          } else {
            if (ttDisplay.length === 0) {
              ttDisplay = opt;
              ptDisplay = opt;
            } else {
              if (
                ttDisplay[opSize] === "+" ||
                ttDisplay[opSize] === "*" ||
                ttDisplay[opSize] === "/" ||
                ttDisplay[opSize] === "-"
              ) {
                ptDisplay = opt;
                ttDisplay = ttDisplay.slice(0, -1);
                ttDisplay += opt;
              } else {
                ptDisplay = opt;
                ttDisplay += opt;
              }
            }
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
              ttDisplay += "0.";
              ptDisplay = "0.";
            } else if (ttDisplay[opSize] === ".") {
            } else {
              ptDisplay = String(ptDisplay);
              let isFloat = ptDisplay.includes(".");
              if (isFloat) {
              } else {
                ptDisplay += opt;
                ttDisplay += opt;
              }
            }
          }
          break;
        default:
      }
      newState = {
        ...state,
        partialDisplay: ptDisplay,
        totalDisplay: ttDisplay,
        result: null
      };
      break;
    default:
      newState = { ...state };
  }
  return newState;
};
const store = createStore(
  reducer,
  INITIAL_STATE,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  CONTAINER
);

