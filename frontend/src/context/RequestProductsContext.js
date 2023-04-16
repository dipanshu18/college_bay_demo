import { createContext, useReducer } from "react";

export const RequestProductsContext = createContext();

export const requestProductsReducer = (state, action) => {
	switch (action.type) {
		case "SET_PRODUCTS":
			return {
				requestProducts: action.payload,
			};
		case "CREATE_PRODUCT_POST":
			return {
				requestProducts: [action.payload, ...state.products],
			};
		case "DELETE_PRODUCT":
			return {
				requestProducts: state.products.filter((p) => p._id !== action.payload._id),
			};
		default:
			return state;
	}
};

export const RequestProductsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(requestProductsReducer, {
		requestProducts: null,
	});

	return (
		<RequestProductsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</RequestProductsContext.Provider>
	);
};
