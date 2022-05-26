const SecVideoArea = ({img}) => {

  return (
    <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12" data-aos="fade-up">
        <div className="welcome-video-area">
            <div className="welcome-thumb">
                <img src={img} alt="" />
            </div>
            <div className="video-icon">
                <a  href="https://m.youtube.com/channel/UCFwuJsftftyoDwCZRhXfcBw"
                    className="btn dream-btn video-btn"
                    id="videobtn">
                    <i className="fa fa-play"></i>
                </a>
            </div>
        </div>
    </div>
  );
}

export default SecVideoArea;