import React, {Component} from 'react';
import {Service} from "../Service/Service";

class FullPeople extends Component {

    state = {chosenPeople: []};
    service = new Service();
    async componentDidMount() {
        let {id} = this.props;
        await this.service.getPeopleById(id)
            .then(chosenPeople => {
                this.setState({chosenPeople});
            })
    }

    render() {
      let {chosenPeople: {name,height,mass,eye_color}} = this.state;
        return (
            <div>
                <h3> About: {name}</h3>
                {name &&
                <div>
                   Height: {height};
                   Mass:{mass};
                   Eye: {eye_color};
                </div>}
            </div>
        );
    }
}

export default FullPeople;