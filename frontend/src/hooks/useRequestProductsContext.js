import { RequestProductsContext } from "../context/RequestProductsContext";
import { useContext } from "react";

const useRequestProductsContext = () => {
	const context = useContext(RequestProductsContext);

	if (!context) {
		throw Error(
			"useRequestProductsContext must be used inside a RequestProductsContextProvider"
		);
	}

	return context;
};

export default useRequestProductsContext;
