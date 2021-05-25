import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Login from './Login';

const NavigationBar = () => {
    return (
        <Navbar className="d-flex justify-content-between align-items-center nav-bg">
            <Link to="/" className="brand">Dear Diary</Link>
            <Login />
            <Nav>
                <NavLink to="/favorite" className="custom-button">Favorites</NavLink>
            </Nav>
        </Navbar>
    )
}

export default NavigationBar;

