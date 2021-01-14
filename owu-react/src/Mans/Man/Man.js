import React, {Component} from 'react';
class Man extends Component {

    render() {
        let {item} = this.props;
        return (
            <div className={'item'}>
                Name: {item.name}, age: {item.age}.
            </div>
        );
    }
}

export default Man;