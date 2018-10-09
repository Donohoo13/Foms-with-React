import React, {Component} from 'react'
import './CSS/form.css';

class ContactForm extends Component {
    formSubmit(event) {
        alert('Good Work')
    }

    render() {
        return(
            <form id='signUp' onSubmit={this.formSubmit}>
                <label class='signUpFormL'> First Name:</label>
                    <input class='signUpInput' type='text' placeholder='John' name='First Name' required></input>
                <label class='signUpFormL'> Last Name:</label>
                    <input class='signUpInput' type='text' placeholder='Smith' name='Last Name'></input>
                <label class='signUpFormL'> Phone Number:</label>
                    <input class='signUpInput' type='tel' placeholder='*** *** ****' name='Phone Number'></input>   
                <label class='signUpFormL'> Email:</label>
                    <input class='signUpInput' type="email" placeholder='johnsmith123@js.com' name='Email'></input>
                <label class='signUpFormL'> Password:</label>
                    <input class='signUpInput' type="password" name='Password'></input>
                <input class='submitButton' type='submit' value='Submit' ></input>
            </form>
            
        )
    }
}
// class Form extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
          
//         </form>
//       );
//     }
//   }

  export default ContactForm