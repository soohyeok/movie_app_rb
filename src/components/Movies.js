import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Movies.css";

function Movies({year, title, summary, poster, genres}){
    return(
        <Link to={{
            pathname:"/detail",
            state: {
                title: title,
                year: year,
                summary,
                poster,
                genres
            }
        }}>
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
                    <p className="movies__movie__data__summary">{summary.slice(0, 160)} ...</p>
                </div>
            </div>
        </Link>
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