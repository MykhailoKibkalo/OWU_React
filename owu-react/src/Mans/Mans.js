import React, {Component} from 'react';
import Man from "./Man/Man";
import Couples from "../Couples/Couples";

class Mans extends Component {
state = {mans : [
        {id:1,name: 'andrey', age: 50, wife_id: 10},
        {id:2,name: 'viktor', age: 25, wife_id: 9},
        {id:3,name: 'nazar', age: 39, wife_id: 8},
        {id:4,name: 'sasha', age: 18, wife_id: 7},
        {id:5,name: 'yra', age: 41, wife_id: 6}
    ]};

    render() {
        let {mans} = this.state;
        return (
            <div>
                {mans.map(value => {
                    return(<Man item={value} key={value.id}/>)
                })}
                {mans.map(value => {
                    return(<Couples itemM={value} key={value.id}/>)
                })}

            </div>
        );
    }
}

export default Mans;