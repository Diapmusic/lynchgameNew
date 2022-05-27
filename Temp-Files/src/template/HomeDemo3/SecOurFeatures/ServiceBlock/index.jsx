

  

const ServiceBlock = ({classIco , title, ng}) => {

  return (
    <div className="services-block-four">
        <div className="inner-box">
            <div className="icon-box">
                <span className={classIco}></span>
            </div>
            <h3><a href="#">{title}</a></h3>
            
        </div>
    </div>
  );
}

export default ServiceBlock;