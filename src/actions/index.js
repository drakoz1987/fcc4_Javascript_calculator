import { COLLECT_DATA, CLEAR, OPERATION } from "./actions";

export const collectData = operationData => {
	return {
		type: COLLECT_DATA,
		payload: { operationData }
	};
};

export const clearData = () => {
	return {
		type: CLEAR
	};
};
export const operation = symbol => {
	return {
		type: OPERATION
	};
};
