import CountUp from 'react-countup';

const SecWelcomeMeter = ({img}) => {

  return (
    <div className="col-12 col-lg-6" data-aos="fade-up">
        <div className="welcome-meter">
            <img src={img} className="img-responsive center-block" alt="" />
            <div className="growing-company text-center mt-30">
                </div>
        </div>
    </div>
  );
}

export default SecWelcomeMeter;