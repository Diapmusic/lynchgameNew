import React , {useEffect} from "react";
import {Helmet} from "react-helmet";
import Aos from 'aos';
import "./App.css"

import HomeDemo3 from './template/HomeDemo3'

import 'aos/dist/aos.css';
import './assets/css/General.css';
import './assets/css/bootstrap.min.css';
import './assets/css/responsive.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';


const App = () => {

  useEffect(() => {

    Aos.init({
      duration: 1000
      })
  },[])

  return (
    
    	<div className="App">
  			<HomeDemo3/>
	    </div>    
  );
}

export default App;