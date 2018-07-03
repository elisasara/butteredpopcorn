import React from "react";

const TvInfo = props => {
    // const id = props.info.id;
    // console.log("id: ", id);
    const title = props.info.name;
    // console.log("title: ", title);
    const seasons = props.info.number_of_seasons;
    // console.log("seasons: ", seasons);
    const overview = props.info.overview;
    // console.log("overview: ", overview);
    const imageURL = `https://image.tmdb.org/t/p/w300/${props.info.poster_path}`;
    // console.log("imageURL: ", imageURL);
    return (<div>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={imageURL} alt="poster" />
                </div>
                <div className="col-md-4">
                    <h3>{title}</h3>
                    <p className="font-italic">Seasons: {seasons}</p>
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    </div>)
}

export default TvInfo;