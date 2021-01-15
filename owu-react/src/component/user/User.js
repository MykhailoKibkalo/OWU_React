import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class User extends Component {

    render() {

        let {item, match:{url}} = this.props;
        // console.log(url);
               return (
            <div>
                ID: {item.id}; Name: {item.name}; City: {item.address.city}  <Link to={`${url}/${item.id}`}> Info </Link>
            </div>
        );
    }
}

export default withRouter(User);