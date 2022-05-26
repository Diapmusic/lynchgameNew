import SectionHeading from '../../../components/SectionHeading'
import SecSingleCoolFact from './SecSingleCoolFact'

const SecTrust = ({data}) => {

  return (
    <section className="trust-section section-padding-100">

        <SectionHeading
            title='OUR PARTNERS'
               />

        <div className="container">
            <div className="row">
                <SecSingleCoolFact data={data}/>
            </div>
        </div>
    </section>
  );
}

export default SecTrust;