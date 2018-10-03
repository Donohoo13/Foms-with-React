import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'

class Subjects extends Component {
    Example = ({ match }) => (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
        );

        render() {
            const match = this.props.match
            return (
                <div>
                <h2>Subjects</h2>
                <ul>
                    <li>
                    <Link to={`${match.url}/Dancing`}>Gettin' Boogie With It!</Link>
                    </li>
                    <li>
                    <Link to={`${match.url}/Butter`}>What you put on that toast?</Link>
                    </li>
                    <li>
                    <Link to={`${match.url}/Cocoa-Puffs`}>Better grab the milk.</Link>
                    </li>
                </ul>

                <Route path={`${match.url}/:topicId`} component={this.Example} />
                <Route
                    exact path={match.url}
                    render={() => <h3>Please select a subject.</h3>}
                />
                </div>
            );
        }
    }
    
    

export default Subjects