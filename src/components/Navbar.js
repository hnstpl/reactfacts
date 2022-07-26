import logo from "../images/react.png"

function Navbar(){
    return (
        <nav>
            <img src={ logo } alt="Logo"  />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    );
}

export default Navbar