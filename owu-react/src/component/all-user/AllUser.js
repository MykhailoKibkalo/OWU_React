import React, {Component} from 'react';
import {UserService} from "../services/UserService";
import User from "../user/User";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class AllUser extends Component {

    state = {users:[], chosenUser: {}};
    userService = new UserService();

    async componentDidMount() {
        let users =  await this.userService.getAllUser();
        this.setState({users});
    }

    render() {
        let {users} = this.state;
               return (
            <div>
                {users.map(value => <User key={value.id} item={value}/>)}

                <hr/>
                <Switch>
                    <Route path={'/users/:id'} render={(props) => {
                        let {chosenUser} = this.state;
                         this.userService.getUserById(props.match.params.id)
                            .then(value => {
                                  this.setState({chosenUser: value})
                                console.log(chosenUser);
                            })

                         return ` Name:${chosenUser.name} ID: ${chosenUser.id}`

                    }}/>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default AllUser;