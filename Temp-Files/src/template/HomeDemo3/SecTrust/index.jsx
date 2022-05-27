

import SectionHeading from '../../../components/SectionHeading'

const SecPartners = ({data}) => {

  return (
    <section className="partners">

        <SectionHeading
            title='Powered By'
               />

        <div className="container flexd">
            <div className="row flexd">
                {data && data.map((item , key) => (
                    <div className="col-lg-2 col-sm-6" key={key}>
                        <div className="partner-box">
                            <img src={item.img} alt="" className="center-bock" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

export default SecPartners;