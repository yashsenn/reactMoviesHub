import React from "react"
import {PropTypes } from "prop-types";

const MovieCard=({movie})=>{
    return(
        <div className="movie">
        <div>
            <p>{movie.Year}</p>
        </div>
        <div>
            <img src={movie.Poster!== 'N/A'?movie.Poster:'https://via.placeholder.com/400'} alt={movie.Title}/>
        </div>
        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>

    )
    
}
MovieCard.propTypes={
    Type:PropTypes.string,
    Title:PropTypes.string,
    Year:PropTypes.number
}

export default MovieCard