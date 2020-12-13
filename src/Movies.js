import React from "react";
import PropTypes from "prop-types";
import "./styles/Movies.css";

function Movies({year, title, summary, poster, genres}){
    return(
        <div className="movies__movie">
            <img className="movies__movie__image" src={poster} alt={title} title={title}/>
            <div className="movies__movie__data">
                <h3 className="movies__movie__data__title">{title}</h3>
                <h5 className="movies__movie__data__year">{year}</h5>
                <ul className="genres">
                    {genres.map((genre, index)=>
                        <li key={index} className="genres_genre">{genre}</li>
                    )}
                </ul>
                <p className="movies__movie__data__summary">{summary.slice(0, 140)} ...</p>
            </div>
        </div>
    )
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movies;