import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    return (
        <nav className="Container">
            <h3>My App</h3>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;