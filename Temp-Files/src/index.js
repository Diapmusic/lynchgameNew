import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import Web3 from 'web3';
import reportWebVitals from './reportWebVitals';
import { Web3ReactProvider } from '@web3-react/core';


function getLibrary(provider){
    return new Web3(provider);
}
// basename="template_react"
ReactDOM.render(
	<React.StrictMode>	
		<Web3ReactProvider getLibrary={getLibrary}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Web3ReactProvider>
	</React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
