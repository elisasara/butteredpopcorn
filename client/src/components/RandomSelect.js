import React, { Component } from "react";

class RandomSelect extends Component {
    state = {
        chosen: "",
        clicked: false
    }

    chooseRandom = () => {
        const options = this.props.options;
        const chosenIndex = Math.floor(Math.random() * options.length);
        this.setState({
            chosen: options[chosenIndex],
            clicked: true
        })
    }

    render() {
        return (
            <div>
                {this.state.clicked ? (
                    <div>
                        <button type="button" className="btn btn-secondary" id="randomButton" onClick={this.chooseRandom}>Try Again</button>
                        <center><h4>You should watch <em>{this.state.chosen.title}</em> next!</h4></center>
                    </div>
                ) : (
                        <button type="button" className="btn btn-secondary" id="randomButton" onClick={this.chooseRandom}>What should I watch next?</button>
                    )}
            </div>
        )
    }
}

export default RandomSelect;