
const Header = ({ handleClick }) => {
    const headerStyle = {
        backgroundColor: "lightblue",
        height: "100px",
        display: "flex",
        alignItems: "center"
    }

    return (
        <div style={headerStyle}>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Header;