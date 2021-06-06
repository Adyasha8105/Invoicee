import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NewInvoiceForm from "./components/NewInvoiceForm";

import Home from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/new">
					<NewInvoiceForm />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
