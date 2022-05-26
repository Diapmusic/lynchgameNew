
import{
  FooterLogo,
  FooterPattern,
  FooterBg1
} from '../../utils/allImgs'

const SecContact_info = () => {
    return (
        <div className="footer-content-area " style={{backgroundImage: 'url(img/core-img/footer-bg1.png)'}}>
          <div className="container">
            <div className="row align-items-end">
              <div className="col-12 col-md-5">
                <SecCopywrite img={FooterLogo} />
              </div>
              <div className="col-12 col-md-7">
                {/* Content Info */}
                <div className="contact_info_area d-sm-flex justify-content-between">
                  <div className="contact_info text-center wow fadeInUp" data-wow-delay="0.2s">
                 
                  </div>
                  {/* Content Info */}
                  <div className="contact_info text-center wow fadeInUp" data-wow-delay="0.3s">
                    </div>
                  {/* Content Info */}
                  <div className="contact_info text-center wow fadeInUp" data-wow-delay="0.4s">
                    <h5>CONTACT US</h5>
                    <p>support@lynch.games</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default SecContact_info