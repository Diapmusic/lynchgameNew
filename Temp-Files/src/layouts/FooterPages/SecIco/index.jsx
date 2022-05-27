const SecIco = ({logo}) => {
	return(
        <div className="col-12 col-md-5">
          <div className="footer-copywrite-info">
            {/* Copywrite */}
            <div className="copywrite_text wow fadeInUp" data-wow-delay="0.2s">
              <div className="footer-logo">
                <a href="#"><img src={logo} alt="logo" /></a>
              </div>
            
            </div>
            {/* Social Icon */}
            <div className="footer-social-info wow fadeInUp" data-wow-delay="0.4s">
           \
              <a href="https://twitter.com/game_lynch"> <i className="fa fa-twitter" aria-hidden="true" /></a>
             
              <a href="https://discord.gg/xAq9HZ55b5"><i className="fa fa-" aria-hidden="true" /></a>
              <a href="t.me/LynchOfficial"><i className="fa fa-telegram" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
	)
}

export default SecIco