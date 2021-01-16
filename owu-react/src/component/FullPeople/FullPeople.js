import React, {Component} from 'react';
import {Service} from "../Service/Service";

class FullPeople extends Component {

    state = {chosenPeople: [], nameID: ''};
    service = new Service();

     componentDidMount() {
        let {id,results} = this.props;
        console.log(results);
        const res = results.filter(value => value.name === id);
        this.setState({nameID: res[0]});
    }

    render() {
        let {nameID} = this.state;
        console.log(nameID.name);
        return (
            <div>
                {nameID &&

                <div>
                    Name: {nameID.name}
                    Height: {nameID.height};
                    Mass:{nameID.mass};
                    Eye: {nameID.eye_color};
                </div>
                }

            </div>


        )
    }

}

export default FullPeople;