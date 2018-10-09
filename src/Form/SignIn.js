import React, { Component } from 'react';

class signIn extends Component {
    formSubmit(event) {
        alert('Welcome Back!')
    }

    render() {
        return(
            // <label for="form">Login</label>
                <form className="Login" onSubmit={this.formSubmit}>
                    <input type="text" placeholder="Username"></input>
                    <input type="password" placeholder="Password"></input>
                    <input type="submit" value="Sign In"></input>
                </form>
        )
    }
}

export default signIn