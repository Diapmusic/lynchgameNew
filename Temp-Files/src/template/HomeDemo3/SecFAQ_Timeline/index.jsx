import SectionHeading from '../../../components/SectionHeading'
import SingleFAQArea from './SingleFAQArea'
import IcoCounter from './IcoCounter'
import IcoDocs from './IcoDocs'

const SecFAQ_Timeline = ({FQAInfo , DocElementTitle}) => {

  return (
    <section className="faq-timeline-area section-padding-100" id='presale'>
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-5 offset-lg-0 col-md-8 offset-md-2 col-sm-10 offset-sm-1 mt-5">

                    <IcoCounter />

                    <IcoDocs data={DocElementTitle} />

                </div>
                <div className="col-12 col-lg-7 col-md-12 mb-5">
                    <SectionHeading
                        title='Buy Token'
                        />

                    <div className="dream-faq-area">
                        <div className="panel-group" id="accordionFourLeft" data-aos="fade-up">
                           
                                <div>
                                    <SingleFAQArea  />
                                </div>
                            
                        </div>
                    </div>
                </div>

               
            </div>
        </div>
    </section>
  );
}

export default SecFAQ_Timeline;