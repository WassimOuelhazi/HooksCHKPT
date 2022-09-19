import React from "react";
import "./MovieCard.css";

const MovieCard = ({title, description, imageUrl, date}) => {
  return (
    <div>
      <div className="card">
        <div >
          <img className="img1" src={imageUrl} alt=""></img>
          
          <div className="title">{title}</div>
          <div className="text">{description}</div>
          <div>
            <div className="catagory">
              Series <i className="fas fa-film"></i>
            </div>
          </div>
          <div>
            <div className="views">
              {date} <i className="far fa-eye"></i>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
