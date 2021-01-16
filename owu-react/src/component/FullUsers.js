import {Context} from "./services/ContextServices";

export default function FullUsers(props) {
    let {item} = props;
    return (
        <div>
            {
                item && item.map(value => <div>{value.id} {value.name} </div>)
            }
            <Context.Consumer>
                {
                    (value) => value
                }
            </Context.Consumer>
        </div>
    );
}