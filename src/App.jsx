import React, { Component } from 'react';
import { BrowserRouter, Router } from 'react-router-dom'; // import react router
import { createBrowserHistory } from 'history';
import routes from './routes';

const history = createBrowserHistory();

const App = () => {
	return (
		<BrowserRouter>
			<Router history={history} routes={routes} />
		</BrowserRouter>
	)
}

export default App;
