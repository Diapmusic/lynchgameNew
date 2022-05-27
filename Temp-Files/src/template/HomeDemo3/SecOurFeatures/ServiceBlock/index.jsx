import ab from "../../../../asset/images/azc1.png";
import ac from "../../../../asset/images/daily.png";
import ad from "../../../../asset/images/digi.png";

const featuresData = [
  {
    ng : ab
  },
  {
    ng : ac
  },
  {
    ng : ad
  },
  
];
const ServiceBlock = ({classIco , title, ng}) => {

  return (
    <div className="services-block-four">
        <div className="inner-box">
            <div className="icon-box">
                <span className={classIco}></span>
            </div>
            <h3><a href="#">{title}</a></h3>
            {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
          ))}
            <div className="text">{ng}</div>
        </div>
    </div>
  );
}

export default ServiceBlock;