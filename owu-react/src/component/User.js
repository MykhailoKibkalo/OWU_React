export default function User (props) {

    let {item} = props;

    return (

        <div>
            ID:{item.id};
            Name: {item.name}
        </div>
    );
}