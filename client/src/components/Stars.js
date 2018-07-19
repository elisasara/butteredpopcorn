import React, { Component } from "react";

class Stars extends Component {

    state = {
        stars: []
    }

    componentDidMount() {
        this.getStars();
    }

    getStars = () => {
        const starArr = [];
        const starsGiven = this.props.stars;
        console.log(starsGiven);
        let i = 0
        while (i < starsGiven) {
            starArr.push("star")
            i++
        }
        this.setState({
            stars: starArr
        });
    };

    render() {
        return (
            <div>
                {this.state.stars.map(star => (
                // <span key={Math.floor(Math.random()*100)}><i className="fas fa-star"></i></span>))}
                <span key={Math.floor(Math.random()*100)}><img src="http://images.clipartpanda.com/popcorn-clip-art-box-of-popcorn-Download-Royalty-free-Vector-File-EPS-1741.jpg" className=" img-responsive popcornRating" alt="popcorn" /></span>))}
            </div>
        );
    };
};

export default Stars;