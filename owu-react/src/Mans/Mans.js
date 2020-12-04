import React, {Component} from 'react';
import Man from "./Man/Man";

class Mans extends Component {


    render() {
        let {mans} = this.state;
        return (
            <div>
                {mans.map(value => {
                    return(<Man item={value} key={value.id}/>)
                })}

                <Man/>

            </div>
        );
    }
}

export default Mans;