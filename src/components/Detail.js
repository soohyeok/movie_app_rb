import React from "react";
import "./Detail.css";

function Detail(props){
    let movie = props.location.state;
    return (
        <div className="detail__movie">
                <img className="detail__movie__image" src={movie.poster} alt={movie.title} title={movie.title}/>
                <div className="detail__movie__data">
                    <h3 className="detail__movie__data__title">{movie.title}</h3>
                    <h5 className="detail__movie__data__year">{movie.year}</h5>
                    <ul className="genres">
                        
                    </ul>
                    <p className="detail__movie__data__summary">{movie.summary}</p>
                </div>
            </div>
    );
}

export default Detail;