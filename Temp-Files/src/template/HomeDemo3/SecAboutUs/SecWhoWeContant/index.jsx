const Span = () => <span></span>

const SecWhoWeContant = () => {

  return (
    <div className="col-12 col-lg-6">
        <div className="who-we-contant">
            <div className="dream-dots" data-aos="fade-up">
                {Array(7).fill().map((key) => (
                		<Span />
                	))}
            </div>
            <h4 data-aos="fade-up">Lynch metaverse and VR EEG technology.</h4>
            <p data-aos="fade-up">The Lynch metaverse is no different from the real world. It is a completely realistic 3D virtual world where players and creators can be a part of it. The Metaverse is the future of each players Asset. Players can create and own their imaginary virtual spirit realm in the real world.</p>
        </div>
    </div>
  );
}

export default SecWhoWeContant;