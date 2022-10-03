import Score from './Score';

const Header = ({ handleClick, scoreObject }) => {
    const headerStyle = {
        backgroundColor: "lightblue",
        height: "100px",
        display: "flex",
        alignItems: "center"
    }

    return (
        <div style={headerStyle}>
            <button onClick={handleClick}>Click Me</button>
            <Score scoreObject={scoreObject} />
        </div>
    );
}

export default Header;