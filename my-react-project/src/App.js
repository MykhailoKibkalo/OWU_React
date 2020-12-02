import React, {Component} from 'react';
import UserArray from "./component/user/UserArray/UserArray";
import UserAdressArray from "./component/user/UserAdressArray/UserAdressArray";
import UserCar from "./component/user/UserCar/UserCar";


class App extends Component {
    users = [{name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}];
    usersAddress = [{id:1,name: 'vasya', city: 'Lviv', street: 'Shevchenko', number: 16},
        {id:2,name: 'petya',address: 'Kyiv', street: 'Shevchenko', number: 1},
        {id:3,name: 'kolya',address: 'Lviv', street: 'Shevchenko', number: 121},
        {id:4,name: 'olya', address: 'Ternopil', street: 'Shevchenko', number: 90},
        {id:5,name: 'max',address: 'Lviv', street: 'Shevchenko', number: 115},
        {id:6,name: 'anya', address: 'Kyiv', street: 'Shevchenko', number: 2},
        {id:7,name: 'oleg', address: 'Ternopil', street: 'Shevchenko', number: 22},
        {id:8,name: 'andrey',address: 'Lviv', street: 'Shevchenko', number: 43},
        {id:9,name: 'masha',address: 'Kyiv', street: 'Shevchenko', number: 12},
        {id:10,name: 'olya', address: 'Lviv', street: 'Shevchenko', number: 16},
        {id:11,name: 'max',address: 'Ternopil', street: 'Shevchenko', number: 121}];
    cars = [
        {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
        {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
        {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
        {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
        {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
        {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
        {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
        {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
        {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
        {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
        {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
        {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
        {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}];
    render() {
        return (
            <div>
                
                <h2>Array "Users"</h2>
                <div>
                    {
                        this.users.map((item) => {
                            return(<UserArray item={item}/>);
                        })

                    }
                </div>
                <h2>Array "UsersAdress"</h2>
                <div>
                    {
                        this.usersAddress.map((item) => {
                            return(<UserAdressArray userA={item}/>)
                        })
                    }
                </div>
                <h2>Array "UsersCAR"</h2>
                <div>
                    {
                        this.cars.map((item, index) => {
                            return(<UserCar car={item}/>)
                        })
                    }
                </div>
            </div>

        );
    }
}

export default App;