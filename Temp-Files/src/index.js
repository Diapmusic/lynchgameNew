import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Web3ReactProvider } from '@web3-react/core';
// basename="template_react"
ReactDOM.render(
	<Web3ReactProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Web3ReactProvider>,
  document.getElementById('root')
);

reportWebVitals();
