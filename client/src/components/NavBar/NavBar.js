import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
    const useHistory = useHistory();

    const back = () => {
        history.goBack();
    }

    return (
        <nav className="navbar">
            <li>
                <a className='navbar-link' href="javascript:history.back()">Back</a>
            </li>
            <li>
                <a className='navbar-link' to="/">Home</a>
            </li>
            <li>
                <a className='navbar-link' to="/jobs">Search Jobs</a>
            </li>
        </nav>
    )
}

export default NavBar;