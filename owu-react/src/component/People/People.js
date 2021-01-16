import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class People extends Component {

    render() {
        let {peoples, match:{url}} = this.props;
        return (
            <div>
                Name: {peoples.name};
                Gender: {peoples.gender};
                <Link to={url+'/'+peoples.id}> Get more info</Link>
            </div>
        );
    }
}

export default withRouter(People);