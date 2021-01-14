import React, {Component} from 'react';
import Mans from "./Mans/Mans";
import './App.css'
import Womans from "./Womans/Womans";
class App extends Component {

    render() {
        return (
            <div className={'Table'}>
                <div className={'Mans'}>
                    <p className={'H1'}>Mans</p>
                    <Mans/>
                </div>

                <div className={'Womans'}>
                    <p className={'H1'}>Womans</p>
                    <Womans/>
                </div>

                <div className={'Couples'}>
                    <p className={'H1'}>Couples</p>
                    {/*<Couples/>*/}
                </div>
            </div>
        );
    }
}

export default App;