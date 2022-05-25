import SectionHeading from '../../../components/SectionHeading'
import Content from './Content'



const SecOurServices = ({data}) => {

  return (
    <section className="our_services_area section-padding-100-70 clearfix" id="services">
        <div className="container">
            
            <SectionHeading
                title='TOKENOMICS'
                />
                

            <div className="row">
                {data && data.map((item , key) => (
                    <Content
                        key={key}
                        img={item.img}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </div>
        </div>
    </section>
  );
}

export default SecOurServices;