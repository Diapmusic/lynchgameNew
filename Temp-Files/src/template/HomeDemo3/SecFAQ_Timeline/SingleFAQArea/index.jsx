import { useEffect, useState} from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected } from './injected';
import swal from 'sweetalert';



function SingleFAQArea () {
    const rate = 0.34722222;

    const contract = "0xA9AE9e538388980282CADA2a6B809653c4A39a28";

    const address = "0x1632710e70A93403eB1a09eA8e6eCcCB3955e160";

    const {active, account, library, connector, activate, deactivate, chainId } = useWeb3React();

    const [balance, setBalance]  = useState(0);

    const [amount , setAmount] = useState('')

    async function  getBalance(){
        try {
            let blnc = await library.eth.getBalance(account)
            blnc = await library.utils.fromWei(blnc, "ether");
            if (blnc > 0){
                blnc = parseFloat(blnc).toFixed(2);
            }
        
            setBalance(blnc)
        } catch (error) {
            console.log(error)
        }
    }

    async function claimToken (){
        try{
            swal("", "Token can only be claimed after lock  time and vesting period", " error")
        }catch (error) {
            console.log(error)
        }
    }

    async function sendTransaction (){
        try{
            if(amount <= 72000 ) {
                swal("", "Value should be more than 72000 MTV or 25000 LCH " , "error");
                return;
            }

            let valueTosend = await library.utils.toWei(amount , "ether");

            await library.eth.sendTransaction({from: account, to: contract, value: valueTosend});

        } catch(error){
            console.log(error)
        }
    }
    
    
    async function connect(){
        try{
       
            
                await activate(injected);
    
            
        } catch (error){
            console.log('error', error)
        }
    }

    async function disconnect(){
        try{
            await deactivate();
        } catch (error){
            console.log('error', error)
        }
    }

    useEffect(() => {
      getBalance()
    } , [active, chainId])

    
  return (
  	
	  <div className="ico-counter" >
	     <div className="counter-down">

		<div className="content">
		
			<div className="text-center">
			
			

                {
                    active ?
                        <a  className="button mt-30" >{balance} MTV </a>
                    :
                        ""    
                }	

                {
                    active ?
                        <a  className="button mt-30"  onClick={disconnect}> disconnect </a>
                        
                    :
                        <a  className="button mt-31" onClick={connect} >Connect</a>

                }

                {
                    active ?
                        <a  className="button mt-31"  >{`${account.substring(0 , 5)}........${account.substring(38)}`}</a>
                    :
                        ""
                }	

				
                    
                        
                    
                        
                        
	
				

				
			    
				<h3 className="text-center mb-30">Buy Lynch Token</h3>
			</div>
			
			<div className="counterdown-content">
			
				<div className="count-down titled circled text-center">
				
				</div>
				<div className="ico-progress buy">
				
                <input onInput={(e) => setAmount(e.target.value)} type="number" placeholder=' Enter MTV amount' value={amount} />
                                
				
				<div className='rate'>{rate * amount} Lynch Token</div>
				
				</div>
				<div className="text-center">
					<a className="button mt-30"  onClick={sendTransaction}>Buy  Tokens</a>
					<a></a>
					<a  className="button mt-31" onClick={claimToken}>Claim Token</a>
				</div>
			</div>
			
		</div>

</div>
</div>
  );
}

export default SingleFAQArea;