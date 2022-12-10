import logo from './logo.png';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <img src={logo} className="logo" alt="logo"/>
            <div className="links">
            <a href="/">Home</a>
            <a href="/create">Inloggen</a>
            </div>
        </nav>
    );
}
 
export default Navbar;