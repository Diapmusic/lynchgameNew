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
                    <h3 className="text-center mb-30">TOKEN SALE STARTS IN</h3>
                </div>
                <div className="counterdown-content">
                    
                    <div className="count-down titled circled text-center">
                        <SlideCountdown
                          weeks={false}
                          deadline="2022-12-21 14:23:22" />
                    </div>
                    <div className="ico-progress">
                       <ul className="list-unstyled list-percent list-inline clearfix mb-10">
                          <li className="title">0 MTV</li>
                          <li className="strength"></li>
                       </ul>
                       <div className="current-progress">
                          <Line percent="0" trailWidth="3" strokeWidth="4" strokeColor="#4834d4" />
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