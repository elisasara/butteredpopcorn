import React, { Component } from "react";

class Stars extends Component {

    state = {
        starArr: []
    }

    componentDidMount() {
        this.getStars();
    }

    getStars = () => {
        const starArr = [];
        const starsGiven = this.props.stars;
        console.log("stars given: ", starsGiven);
        let i = 0
        while (i < starsGiven) {
            starArr.push("star")
            i++
        }
        this.setState({
            starArr: starArr
        });
    };

    render() {
        return (
            <div>
                {this.state.starArr.map(star => (
                // <span key={Math.floor(Math.random()*100)}><i className="fas fa-star"></i></span>))}
                <span key={Math.floor(Math.random()*100)}><img src="https://www.freepngimg.com/download/popcorn/22995-2-popcorn-hd.png" className=" img-responsive popcornRating" alt="popcorn" /></span>))}
            </div>
        );
    };
};

export default Stars;