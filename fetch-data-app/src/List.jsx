import ListItem from "./ListItem.jsx"

const List = ({ items }) => {
    return (
        <ul>
            {items.map(item => (
                <ListItem key={item.id} item={item} />
            ))}
        </ul>
    )
}

export default List