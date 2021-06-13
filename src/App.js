import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Invoice from "./pages/Invoice";

import Home from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/invoice">
					<Invoice />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
