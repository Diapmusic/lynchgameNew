const DocElement = ({title}) => {

  return (
    <div className="col-md-6 col-sm-6 col-xs-12" data-aos="fade-up">
        <div className="doc-element">
        {title}
        </div>
    </div>
  );
}

export default DocElement;