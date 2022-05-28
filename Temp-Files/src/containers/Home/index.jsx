import {useEffect}  from "react";
import data from '../../data/data-containers/data-Home.js';

import {handelTitle} from '../../utils'

import './demo.css'

// import Footer from '../../layouts/Footer'
import Footer from '../../layouts/Footer'
// import {Fluid1 , Fluid2} from './Fluid';
import SectionHeading from './SectionHeading'
import SectionDemo from './SectionDemo'

const HomeContainer = () => {



  return (
  	<>
	  	<section className="demo section-padding-100-0" id="demo">

		    <div className="container">
		      <SectionHeading />
		      <SectionDemo data={data} />
		    </div>
	    </section>
	    <Footer />
    </>
  );
}

export default HomeContainer;

