import { useEffect, useState} from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected } from './injected';
import swal from 'sweetalert';
import Web3 from 'web3';




function SingleFAQArea () {
    const rate = 0.27777777777777777777777777777778;


    const address = "0x7BFbdd001E893C8f7F4257DcB694993909461f12";

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
            if(amount <= 90500) {
                swal("", "Value should be more than 90,500 MTV or 26,417 LCH " , "error");
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
        swal("" , " connecting", "info")
        if(window.ethereum){
            try{    
                window.web3 = new Web3(window.ethereum)
                await activate(injected);
                const chainId = 62621 // Multivac Mainnet

                if (window.ethereum.networkVersion !== chainId) {
                      try {
                        await window.ethereum.request({
                          method: 'wallet_switchEthereumChain',
                          params: [{ chainId: Web3.utils.toHex(chainId) }]
                        });
                      } catch (err) {
                          // This error code indicates that the chain has not been added to MetaMask
                        if (err.code === 4902) {
                          await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                              {
                                chainName: 'Multivac Mainnet',
                                chainId: Web3.utils.toHex(chainId),
                                nativeCurrency: { name: 'MULTIVAC', decimals: 18, symbol: 'MTV' },
                                rpcUrls: ['https://rpc.mtv.ac/']
                              }
                            ]
                          });
                        }
                      }
                    }
                   
                
               
                localStorage.setItem('isWalletConnected', true)
            } catch (error){
                console.log('error', error)
                
            }  
            swal("", "connected", "success")  
        
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

                    <h6>1 LCH = 3.6 MTV</h6>
				
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