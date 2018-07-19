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
                <span><i className="fas fa-star"></i></span>))}
            </div>
        );
    };
};

export default Stars;