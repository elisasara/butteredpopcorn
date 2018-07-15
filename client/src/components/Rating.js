import React, { Component } from "react";
// import React from "react";

class Rating extends Component {
    state = {
        rating: ""
    }

    getRating = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="rating">Your Rating:</label>
                        <select onChange={this.getRating} name="rating" className="form-control" id="rating">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5" >5</option>
                        </select>
                    </div>
                    <button className="btn btn-dark" onClick={() => this.props.submitToWatched(this.props.tmdbID, this.props.title, this.state.rating)} >Submit</button>
                </form>
            </div>
        )
    }
}

export default Rating;