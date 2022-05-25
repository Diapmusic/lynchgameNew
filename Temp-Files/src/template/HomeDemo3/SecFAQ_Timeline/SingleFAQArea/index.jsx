import { useEffect, useState} from 'react';
import { useWeb3React } from '@web3-react/core';
import { injested } from './injested';
import swal from 'sweetalert';


function SingleFAQArea () {

  return (
  	
	  <div className="ico-counter">
	     <div className="counter-down">

		<div className="content">
		
			<div className="text-center">
				{
					active ?
						
						<a  className="button mt-30" > {balance} MTV {`${account.substring(0 , 5)}........${account.substring(38)}`}</a>
						:
						<a  className="button mt-30" onClick={connect}>connect </a>
						
						
						
						

				}

				<a  className="button mt-31" onClick={disconnect}>disconnect</a>
			    
				<h3 className="text-center mb-30">TOKEN SALE ENDS IN</h3>
			</div>
			
			<div className="counterdown-content">
			
				<div className="count-down titled circled text-center">
				
				</div>
				<div className="ico-progress">
				<ul className="list-unstyled list-percent list-inline clearfix mb-10">
					<li className="title">33m</li>
					<li className="strength">75m</li>
				</ul>
				<div className="current-progress">
			
				</div>
				
				</div>
				<div className="text-center">
					<a href="#" className="button mt-30">Buy More Tokens</a>
					<a></a>
					<a href="#" className="button mt-30">Claim Token</a>
				</div>
			</div>
			
		</div>

</div>
</div>
  );
}

export default SingleFAQArea;