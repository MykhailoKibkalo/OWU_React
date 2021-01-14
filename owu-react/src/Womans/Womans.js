import React, {Component} from 'react';
import Woman from "./Woman/Woman";
import Couples from "../Couples/Couples";

class Womans extends Component {
   state = {womans : [
        {id:6,name: 'anya', age: 29, husband_id: 5},
        {id:7,name: 'alina', age: 15, husband_id: 4},
        {id:8,name: 'ira', age: 31, husband_id: 3},
        {id:9,name: 'diana', age: 22, husband_id: 2},
        {id:10,name: 'yulia', age: 21, husband_id: 1}
    ]}
    render() {
       let {womans} = this.state;
        return (
            <div>
                {womans.map(value => {
                        return(<Woman item={value} key={value.id} />)
                    })}
                {womans.map(value => {
                    return(<Couples itemW={value} key={value.id} />)
                })}
            </div>
        );
    }
}

export default Womans;