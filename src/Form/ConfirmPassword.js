import React, { Fragment } from 'react'
import './CSS/ConfirmPassword.css';

class ConfirmPassword extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        pass1: '',
        pass2: ''
    }
    this.passwordChange1 = this.passwordChange1.bind(this);
    this.passwordChange2 = this.passwordChange2.bind(this);
    this.passwordSubmit = this.passwordSubmit.bind(this);
}

    passwordChange1(event) {
        this.setState({
            pass1: event.target.value,
        });
    }
    passwordChange2(event) {
        this.setState({
            pass2: event.target.value,
        });
        console.log(this.state.pass2)
    }
    passwordSubmit(event) {
        console.log(this.state)
    if(this.state.pass1 === this.state.pass2) {
        return(alert('Holla At Ya\'ll boy'))
    } else {
        return(alert('WRONG!! Don\'t match!'))
    }
    }


    render() {
        return(
            <form class='passwordForm' onSubmit={this.passwordSubmit}>
                <label></label>
                    <input id='password1' type='password' placeholder='Password' 
                    onChange={this.passwordChange1} value={this.state.pass1} required/>
                <label></label>
                    <input id='password2' type='password' placeholder='Confirm Password' 
                    onChange={this.passwordChange2} value={this.state.pass2}/>
                    <input id='passwordButton' type='submit' value='Check'/>
            </form>
        )
    }
}

export default ConfirmPassword