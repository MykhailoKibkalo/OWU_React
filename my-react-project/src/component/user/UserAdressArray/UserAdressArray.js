import React, {Component} from 'react';

class UserAdressArray extends Component {
    render() {
        let {userA} = this.props;
        return (
            <div>
                <h3>
                ID: {userA.id}; Name: {userA.name}; City: {userA.city}; St.: {userA.street}; Number: {userA.number};
                </h3>
            </div>
        );
    }
}

export default UserAdressArray;