// const ListItem = ({a}) => {       OR
const ListItem = (values) => {
    return (
        <li>
            <div>
                {/* {a}      OR  */}
                {values.a }
            </div>
            <button style={{ background: 'crimson', color: 'white' }}>Delete</button>
        </li>

    );
}

export default ListItem;