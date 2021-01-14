import React, {Component} from 'react';
import User from "../User/User";
import {Service} from "../Services/Service";
class AllUser extends Component {

    state = {user:[], chosenOne:null}

    userService = new Service()
    componentDidMount() {
        this.userService.getAllUser().then(value => this.setState({user:value}))
    }

    choseUser = (id) => {
        this.setState({chosenOne: this.state.user.find(value => value.id === id)})
    }

    render() {
        let {user,chosenOne} = this.state;
        return (
            <div>
                {
                    user.map(value => <User item={value} key={value.id} chosenUser={this.choseUser} />)
                }
                {
                    chosenOne &&
                    <h2>
                        {chosenOne.id} - {chosenOne.username}
                    </h2>
                }
            </div>
        );
    }
}

export default AllUser;