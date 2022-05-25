function SectionHeading(){
  return(
    <div className="section-heading text-center">
        <div className="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s">
            {Array(7).fill().map((item , key) => (
                <span key={key}></span>
              ))}
        </div>
        <h2 className="wow fadeInUp" data-wow-delay="0.3s">Choose a demo</h2>
        <p className="wow fadeInUp" data-wow-delay="0.4s">
          LYNCH 
        </p>
    </div>
  )
}

export default SectionHeading