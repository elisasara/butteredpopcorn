import React from "react";

const MovieInfo = props => {

    const name = props.info.title;
    const imagePath = props.info.poster_path;
    const imageURL = `https://image.tmdb.org/t/p/w200/${props.info.poster_path}`;
    const overview = props.info.overview;
    const releaseDate = props.info.release_date;
    const genre = props.info.genres;
    const length = props.info.runtime;
    const tagline = props.info.tagline;

    return (
        <div>
            {imagePath ? (
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <img className="img-fluid img-thumbnail moviePoster" src={imageURL} alt="poster" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 text-left">
                        <div className="movieInfo">
                            <h3>{name}</h3>
                            <h4><em>{tagline}</em></h4>
                            <p>{length} minutes</p>
                            <p className="font-italic">Release Date: {releaseDate}</p>
                            <p>Genres:<span>
                                <ul style={{ listStyleType: "none" }}>
                                    {genre.map(genre => (
                                        <li>{genre.name}</li>
                                    ))}
                                </ul></span></p>
                            <p>{overview}</p>
                        </div>
                    </div>
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