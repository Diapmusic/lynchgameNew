import {useEffect} from "react"
import { SlideCountdown } from 'react-fancy-countdown';
import { Line } from 'rc-progress';

const IcoCounter = () => {

  useEffect(() => {
    let PathProgs = document.querySelector('.rc-progress-line-trail')
    PathProgs.setAttribute('stroke' , "transparent")
  },[])

  return (
    <div className="ico-counter" >
        <div className="counter-down">

            <div className="content">
                <div className="conuter-header">
                    <h3 className="text-center mb-30">TOKEN SALE WEEK ONE ENDS IN</h3>
                </div>
                <div className="counterdown-content">
                    
                    <div className="count-down titled circled text-center">
                        <SlideCountdown
                          weeks={false}
                          deadline="2023-01-03 15:58:22" />
                    </div>
                    <div className="ico-progress">
                       <ul className="list-unstyled list-percent list-inline clearfix mb-10">
                          <li className="title">3079000 MTV</li>
                          <li className="strength"></li>
                       </ul>
                       <div className="current-progress">
                          <Line percent="1" trailWidth="5" strokeWidth="4" strokeColor="#4834d4" />
                       </div>
                       <span className="pull-left"></span>
                       <span className="pull-right"></span>
                    </div>
                    <div className="text-center">
                        
                    </div>
                </div>
                
            </div>
            
        </div>
        
    </div>
  );
}

export default IcoCounter;