import React, {Component} from 'react';
import AllUser from "./component/AllUser";
import {Context} from "./component/services/ContextServices";

class App extends Component {

    state = {users: []};

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                this.setState({users});
            })
    }

    input1 = React.createRef();

    render() {
        let {users} = this.state;
        return (
            <div>
                    <input ref={this.input1} onInput={this.readInput}/>

                <Context.Provider value={'hello'}>
                    <div>
                        <AllUser item={users} key={users.id}/>
                    </div>
                </Context.Provider>
            </div>
        );
    }

    readInput = () => {
        console.log(this.input1.current.value)
    }
}

export default App;