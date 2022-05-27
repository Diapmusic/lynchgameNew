import rgt from '../../../../../asset/images/pan.png'
import mu from '../../../../../asset/images/mul.png'
const SingleCoolFact = ({img , ico_check}) => {

  return (
    <div className="col-12 col-sm-6 col-md-3 col-lg-2" data-aos="fade-up">
     <div className='twallet'>
    <div className="trust-item text-center">
    <img src={rgt} alt="" />
    
       
    </div>
    <div className="trust-item text-center">
    <img src={mu} alt="" />
    
       
    </div>
    </div>
   
  </div>
  );
}

export default SingleCoolFact;