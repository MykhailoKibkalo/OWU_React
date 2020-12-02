import React, {Component} from 'react';

class UserCar extends Component {
    render() {
        let {car} = this.props;
        return (
            <div>
                <h3>
                Producer: {car.producer}; Model: {car.model}; Year: {car.year}; Color: {car.color}; Type: {car.type}; Engine: {car.engine}; Volume: {car.volume}; Power: {car.power};
                </h3>
            </div>
        );
    }
}

export default UserCar;