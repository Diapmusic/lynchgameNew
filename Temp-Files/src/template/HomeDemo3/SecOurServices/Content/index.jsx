
const Content = ({img , title , text}) => {

  return (
    <div className="col-12 col-sm-6 col-lg-4" data-aos="fade-up">
        
        <div className="service_single_content text-left mb-100">
            
            <div className="service_icon">
                <img src={img} alt="" />
            </div>
            <h6>{title}</h6>
            <p>{text}</p>
           
        </div>
    </div>
  );
}

export default Content;