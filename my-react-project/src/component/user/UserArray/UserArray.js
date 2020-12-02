import React, {Component} from 'react';

class UserArray extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>
                <h3>
                    Name: {item.name}; Age: {item.age}; Status: {item.status.toString()};
                </h3>
            </div>
        );
    }
}

export default UserArray;