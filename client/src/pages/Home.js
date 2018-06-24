import React from "react";

class Home extends Component {
    state = {
        user: null
    }

    

    render() {
        (
            <div>
                <h1>Welcome to Buttered Popcorn!</h1>
                {this.state.user ? (
                    <div>
                        <h3>You are currently logged in as{this.state.user.username}</h3>
                    </div>
                ) : (
                        <div>
                            <a href="/register"><h3>Create an Account</h3></a>
                            <a href="/login"><h3>Log In</h3></a>
                        </div>)
                }
            </div>
        )
    }
}

export default Home