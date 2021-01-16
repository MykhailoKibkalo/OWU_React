import React, {Component} from 'react';
import Services from "./services/services";

class FullUsers extends Component {
    state = {user: false};
    services = new Services();
    inputId = React.createRef();


    render() {
        let {user,user:{id}} = this.state;
        return (
            <div>
                <input type={'number'} onInput={this.readId} ref={this.inputId}/>
                <br/>
                {user.id &&
                <div>
                    <hr/>
                    <h2>Chosen User with ID:{user.id}</h2>
                    <h3>Name: {user.name}; City: {user.email}</h3>
                    <hr/>
                </div>
                }
            </div>
        );
    }

    readId = () => {
        this.services.getUserById(this.inputId.current.value).then(value => this.setState({user: value}));

    }
}

export default FullUsers;