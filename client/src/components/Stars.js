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
        let i = 0
        while (i < starsGiven) {
            starArr.push("<span><i class=`fas fa-star`></i></span>")
            i++
        }
        this.setState({
            stars: starArr
        });
    };

    render() {
        return (
            <div>
                {this.state.stars.forEach(star => (star))}
            </div>
        );
    };
};

export default Stars;