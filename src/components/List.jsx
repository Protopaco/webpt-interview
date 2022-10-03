import Death from './Death';

const List = ({ listItems }) => {

    return (
        <ul>
            {listItems.length > 0 ?
                listItems.map(listItem => <Death death={listItem} />)
                : null
            }
        </ul>
    )
}

export default List;