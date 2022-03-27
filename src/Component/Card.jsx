const Card = (props) => {
  return (
    <div>
      <div className="container mb-4 mt-3">
        <div className="row">
          <div className="card" style={{ width: "18rem" }}>
            <img src={props.image} className="image" alt="..." />
            <div className="card-body">
              <h5 className="title">{props.title}</h5>
              <p></p>
              <p className="text">{props.text}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
