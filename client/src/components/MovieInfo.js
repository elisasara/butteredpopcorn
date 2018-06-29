import React from "react";

const MovieInfo = props => {
    const name = props.info.belongs_to_collection.name;
    console.log("name: ", name);
    const imageURL = `https://image.tmdb.org/t/p/w300/${props.info.belongs_to_collection.poster_path}`;
    console.log("img URL: ", imageURL);
    const overview = props.info.overview;
    console.log("overview: ", overview);
    const releaseDate = props.info.release_date;
    console.log("release date: ", releaseDate);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={imageURL} alt="poster" />
                </div>
                <div className="col-md-4">
                    <h3>{name}</h3>
                    <p className="font-italic">{releaseDate}</p>
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    )
};

export default MovieInfo;