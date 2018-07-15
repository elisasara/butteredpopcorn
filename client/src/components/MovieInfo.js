import React from "react";

const MovieInfo = props => {

    const name = props.info.title;
    const imagePath = props.info.poster_path;
    const imageURL = `https://image.tmdb.org/t/p/w200/${props.info.poster_path}`;
    const overview = props.info.overview;
    const releaseDate = props.info.release_date;
    return (
        <div>
            {imagePath ? (
                <div>
                    <img className="img-fluid img-thumbnail moviePoster" src={imageURL} alt="poster" />
                    <h3>{name}</h3>
                    <p className="font-italic movieInfo">{releaseDate}</p>
                    <p className="movieInfo">{overview}</p>
                </div>
            ) : (
                <div>
                <img className="img-fluid img-thumbnail moviePoster" src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" alt="poster" />
                <h3>{name}</h3>
                <p className="font-italic movieInfo">{releaseDate}</p>
                <p className="movieInfo">{overview}</p> 
                </div>
            )}
        </div>
    )
};

export default MovieInfo;