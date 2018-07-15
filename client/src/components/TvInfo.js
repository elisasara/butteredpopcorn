import React from "react";

const TvInfo = props => {
    const title = props.info.name;
    const seasons = props.info.number_of_seasons;
    const overview = props.info.overview;
    const imagePath = props.info.poster_path;
    const imageURL = `https://image.tmdb.org/t/p/w200/${props.info.poster_path}`;

    return (
        <div>
            {imagePath ? (
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <img className="img-fluid img-thumbnail moviePoster" src={imageURL} alt="poster" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 text-left">
                        <h3>{title}</h3>
                        <p className="font-italic">Seasons: {seasons}</p>
                        <p>{overview}</p>
                    </div>
                </div>
            ) : (
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <img img-fluid img-thumbnail moviePoster src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" alt="poster" />
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 text-left">
                            <h3>{title}</h3>
                            <p className="font-italic">Seasons: {seasons}</p>
                            <p>{overview}</p>
                        </div>
                    </div>
                )}
        </div>)
}

export default TvInfo;