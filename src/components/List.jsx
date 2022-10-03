import Death from './Death';

const List = ({ listItems }) => {

    return (
        <ul>
            <li>
                {listItems.length > 0 ?
                    listItems.map(listItem => <Death death={listItem} />)
                    : null
                }
            </li>
        </ul>
    )
}

export default List;