import React, {Component} from 'react';
import FullUsers from "./FullUsers";

class AllUser extends Component {

    render() {
        let {item} = this.props;
        return (
            <div>
                <FullUsers item={item} key={item.id}/>
            </div>
        );
    }
}

export default AllUser;