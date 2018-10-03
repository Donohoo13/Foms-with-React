import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import ContactForm from './Form/form';
import ConfirmPassword from './Form/ConfirmPassword';
import './Form/CSS/app.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

      
       
       const RouterBrowser = () => (
         <Router>
           <div>
             <ol>
               <li> <link to="/">Home</link></li>
               <li> <link to="/form">Form</link></li>
               <li> <link to="/confirm-password">Confirm Password</link></li>
               <li> <link to="/example">Example</link></li>
            </ol>

            <Route exact path="/" component={home} />
            <Route path="/form" component={ContactForm} />
            <Route path="/confirm-password" component={ConfirmPassword} />
            {/* <Route path="/example" component={Example} /> */}

           </div>
         </Router>
       );
       
       
       const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
const Form = () => (
  <div>
    <h2>Form</h2>
  </div>
);
const ConfirmPassword = () => (
  <div>
    <h2>Confirm Password</h2>
  </div>
);



       
       
        // {/* <ContactForm/>
        // <ConfirmPassword/> */}
        // {/* <header className="App-header">
        //   <img src={logo} className="App-logo" alt="logo" />
        //   <p>
        //     Edit <code>src/App.js</code> and save to reload.
        //   </p>
        //   <a
        //     className="App-link"
        //     href="https://reactjs.org"
        //     target="_blank"
        //     rel="noopener noreferrer"
        //   >
        //     Learn React
        //   </a>
        // </header> */}
      
export default RouterBrowser;
