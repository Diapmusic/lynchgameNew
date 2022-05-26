const Span = () => <span></span>

const SectionHeading = () => {

  return (
    <div className="section-heading text-center">
        <div className="dream-dots justify-content-center">
            {Array(7).fill().map((item , key) => (
                    <Span key={key} />
                ))}
        </div>
         </div>
  );
}

export default SectionHeading;