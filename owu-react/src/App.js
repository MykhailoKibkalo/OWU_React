import React, {Component} from 'react';
import './App.css'
import AllUser from "./component/all-user/AllUser";
import AllPost from "./component/all-post/AllPost";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class App extends Component {

    render() {
        return (
            <Router>
            <div>
                <Link to={'/users'}>
                    Users
                </Link>

                <br/>

                <Link to={'/posts'}>
                    Posts
                </Link>

                <Switch>
                    <Route path={'/users'} render={() => {
                       return <AllUser/>
                    }}/>
                    <Route path={'/posts'} render={() => {
                       return <AllPost/>
                    }}/>
                </Switch>


            </div>
            </Router>
        );
    }
}

export default App;

