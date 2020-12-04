import React, {Component} from 'react';



class Mans extends Component {


    render() {
        let {item} = this.props;
        return (
            <div>
                Name: {item.name}, age: {item.age}.
            </div>
        );
    }
}

export default Mans;