import React from "react";

const MovieInfo = props => {
    const name = props.info.belongs_to_collection.name;
    console.log("name: ", name);
    const imageURL=`https://image.tmdb.org/t/p/w300/${props.info.belongs_to_collection.poster_path}`;
    console.log("img URL: ", imageURL);
    const overview = props.info.overview;
    console.log("overview: ", overview);
    const releaseDate = props.info.release_date;
    console.log("release date: ", releaseDate);
    return(
    <div>

    </div>
)
}