import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Invoice from "./pages/Invoice";
import Home from "./pages/Home";
import ReactGA from 'react-ga';

function App() {

	if (process.browser) {
		ReactGA.initialize('G-Y88062DSY8')
		ReactGA.pageview(window.location.pathname + window.location.search)
	}

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
