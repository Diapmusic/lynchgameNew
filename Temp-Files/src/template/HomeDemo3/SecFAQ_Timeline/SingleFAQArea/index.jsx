import { useEffect, useState} from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected } from './injected';
import swal from 'sweetalert';
import Web3 from 'web3';




function SingleFAQArea () {
    const rate = 0.2777777777777778;

    const contract = "0xA9AE9e538388980282CADA2a6B809653c4A39a28";

    const address = "0x1632710e70A93403eB1a09eA8e6eCcCB3955e160";

    const {active, account, library, connector, activate, deactivate, chainId , currentProvider } = useWeb3React();

    const [balance, setBalance]  = useState(0);

    const [amount , setAmount] = useState('');

    

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
            swal("", "Token can only be claimed after lock  time and vesting period", " failed")
        }catch (error) {
            console.log(error)
        }
    }

    async function sendTransaction (){
        try{
            if(amount <= 90000 ) {
                swal("", "Value should be more than 90000 MTV or 25000 LCH " , "error");
                return;
            }

            let valueTosend = await library.utils.toWei(amount , "ether");

            await library.eth.sendTransaction({from: account, to: address, value: valueTosend});

            

            swal("", "Transaction Successful", "success")

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

    async function loadWeb3() {
        swal("" , " If connected and account details are not displayed please change chain to MULTIVAC", "info")
        if(window.ethereum){
            try{    
                window.web3 = new Web3(window.ethereum)
                await activate(injected);
                
               
                localStorage.setItem('isWalletConnected', true)
            } catch (error){
                console.log('error', error)
                
            }
            
            
            
        
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
            
        }
        
        else {
            swal("", "Please Install Metamask", )
        }
    }

    async function disconnect(){
        try{
           swal("","Disconnecting", "info")
             deactivate();
            swal('',"Disconnected", "success")
            localStorage.setItem('isWalletConnected', false)
            
        } catch (error){
            console.log('error', error)
            
        }


    }

    useEffect(() => {
        const connectWalletOnPageLoad = async () => {
          if (localStorage?.getItem('isWalletConnected') === 'true') {
            try {
              await activate(injected)
              localStorage.setItem('isWalletConnected', true)
            } catch (ex) {
              console.log(ex)
            }
          }
        }
        connectWalletOnPageLoad()
        getBalance()
      }, [active, chainId])

    {/*useEffect(() => {
      getBalance()
    } , [active, chainId])*/}

    
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
                        <a  className="button mt-31" onClick={loadWeb3} >Connect</a>

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

                    <h6>Current Token price: $0.004</h6>
				
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