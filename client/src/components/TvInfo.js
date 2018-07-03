import React from "react";

const TvInfo = props => {
    const id=props.info.id;
    console.log("id: ", id);
    const title=props.info.name;
    console.log("title: ", title);
    const seasons=props.info.number_of_seasons;
    console.log("seasons: ", seasons);
    const overview=props.info.overview;
    console.log("overview: ", overview);
    const image=`https://image.tmdb.org/t/p/w300/${props.info.poster_path}`;
    console.log("image: ", image);
    return (<div>
        <h1>TV Info here</h1>
    </div>)
}

export default TvInfo;