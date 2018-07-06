import React, { Component } from "react";

class FindFriends extends Component {
    state = {
        searchFriends: "",
        results: []
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSearch = event => {

    }

    render() {
        return (
            <div className="container">
                <form className="form-inline">
                    <div className="form-group">
                        <label htmlFor="friendEmail">Search by Email:</label>
                        <input type="text" className="form-control" name="searchFriends" value={this.state.searchFriends} id="friendEmail" onChange={this.handleInputChange} />
                    </div>
                    <button type="submit" class="btn btn-primary">Search</button>
                </form>
                {this.state.results.length ? (
                    <h1>Friend Results Go Here!</h1>
                ) : (
                        <h1>Search for your friends here!</h1>
                    )}
            </div>
        )
    }
}

export default FindFriends;