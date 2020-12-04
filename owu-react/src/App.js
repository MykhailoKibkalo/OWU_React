import React, {Component} from 'react';
import Mans from "./Mans/Mans";
import Man from "./Mans/Man/Man";
import './App.css'
class App extends Component {
    state = {
        mans : [
            {id:1,name: 'andrey', age: 50, wife_id: 10},
            {id:2,name: 'viktor', age: 25, wife_id: 9},
            {id:3,name: 'nazar', age: 39, wife_id: 8},
            {id:4,name: 'sasha', age: 18, wife_id: 7},
            {id:5,name: 'yra', age: 41, wife_id: 6}
        ],
        womans : [
            {id:6,name: 'anya', age: 29, husband_id: 5},
            {id:7,name: 'alina', age: 15, husband_id: 4},
            {id:8,name: 'ira', age: 31, husband_id: 3},
            {id:9,name: 'diana', age: 22, husband_id: 2},
            {id:10,name: 'yulia', age: 21, husband_id: 1}
        ],
        couples : [],
    }
    render() {
        return (
            <div className={'Table'}>
                <div className={'Mans'}>
                    <p>Mans</p>
                    <Mans/>
                </div>

                <div className={'Womans'}>
                    <p>Womans</p>
                    {/*<Womans/>*/}
                </div>

                <div className={'Couples'}>
                    <p>Couples</p>
                    {/*<Couples/>*/}
                </div>
            </div>
        );
    }
}

export default App;