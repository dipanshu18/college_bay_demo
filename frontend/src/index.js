import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsContextProvider } from "./context/ProductsContext";
import { RequestProductsContextProvider } from "./context/RequestProductsContext";

ReactDOM.render(
	<React.StrictMode>
		<ProductsContextProvider>
			<RequestProductsContextProvider>
				<App />
			</RequestProductsContextProvider>
		</ProductsContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
