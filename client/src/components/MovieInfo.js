import React from "react";

const MovieInfo = props => {
    // make smart component so that it will know how to handle no poster
    
    const name = props.info.title;
    const imageURL = `https://image.tmdb.org/t/p/w200/${props.info.poster_path}`;
    const overview = props.info.overview;
    const releaseDate = props.info.release_date;
    return (
        <div>
            <img className="img-fluid img-thumbnail" id="moviePoster" src={imageURL} alt="poster" />
            <h3>{name}</h3>
            <p className="font-italic movieInfo">{releaseDate}</p>
            <p className="movieInfo">{overview}</p>
        </div>
    )
};

export default MovieInfo;