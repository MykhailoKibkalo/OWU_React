import React, {Component} from 'react';

class User extends Component {
    render() {
        let {item, chosenUser} = this.props;
        return (
            <div>
                {item.name} --- {item.id} <button onClick={() => chosenUser(item.id)}> Chose me </button>
            </div>
        );
    }
}

export default User;