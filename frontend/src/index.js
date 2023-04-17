import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ProductsContextProvider } from "./context/ProductsContext";
import { RequestProductsContextProvider } from "./context/RequestProductsContext";

ReactDOM.render(
	<React.StrictMode>
		<AuthContextProvider>
			<ProductsContextProvider>
				<RequestProductsContextProvider>
					<App />
				</RequestProductsContextProvider>
			</ProductsContextProvider>
		</AuthContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
