import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Peoples from "./component/Peoples/Peoples";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to={'/peoples'}> Show peoples</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path={'/peoples'} render={() => {
                            return <Peoples/>
                        }}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;