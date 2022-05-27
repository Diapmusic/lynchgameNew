<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
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
             
              <a href="https://discord.gg/xAq9HZ55b5"><i className="fa-brands fa-discord" aria-hidden="true" /></a>
              <a href="t.me/LynchOfficial"><i className="fa fa-telegram" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
	)
}

export default SecIco