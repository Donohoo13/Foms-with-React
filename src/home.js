import React, { Component } from 'react';
import ContactForm from './Form/form';
import ConfirmPassword from './Form/ConfirmPassword';
import Example from './Form/Example';
import './Form/CSS/Home.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (
  <Router>
    <div class='navBar'>
      <ul class='bullets'>
        <li class='navLinks'>
          <Link to="/">
            <input class='navLinksInput' type='button' value='Home'></input>
          </Link>
        </li>
        <li class='navLinks'>
          <Link to="/signUp">
            <input class='navLinksInput' type='button' value='Sign Up'></input>
          </Link>
        </li>
        <li class='navLinks'>
          <Link to="/confirmPassword">
            <input class='navLinksInput' type='button' value='Confirm Password'></input>
          </Link>
        </li>
        <li class='navLinks'>
          <Link to="/example">
            <input class='navLinksInput' type='button' value='Example'></input>
          </Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/signUp" component={ContactForm} />
      <Route path="/confirmPassword" component={ConfirmPassword} />
      <Route path="/example" component={Example} />
    </div>
  </Router>
);

const Home = () => (
    <div>
        <h2>
        Home
        </h2>
    </div>
);

// const signUp = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// );

// const Example = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>

//     <Route path={`${match.url}/:topicId`} component={Topic} />
//     <Route
//       exact
//       path={match.url}
//       render={() => <h3>Please select a topic.</h3>}
//     />
//   </div>
// );

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );


export default BasicExample;