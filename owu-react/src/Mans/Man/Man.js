import React, {Component} from 'react';
import Mans from "./Mans";

class Man extends Component {

    render() {
        let {mans} = this.state;
        return (
            <div>
                {mans.map(value => {
                    return(<Mans item={value} key={value.id}/>)})
                }
            </div>
        );
    }
}

export default Man;