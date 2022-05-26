import SectionHeading from '../../../components/SectionHeading'
import SecVideoArea from './SecVideoArea'

const SecDemoVideo = ({img}) => {

  return (
    <section className="demo-video section-before section-padding-100">
        <div className="container">
	        <SectionHeading
	            title='Watch our Game Updates on Youtube'
	            text='Videos of game environment , character design and Game Testing will also be available on the channel. Updates will also be shared on all Social media channels'
	        />
            <SecVideoArea img={img} />
        </div>
    </section>
  );
}

export default SecDemoVideo;