import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
    const history = useHistory();

    const back = () => {
        history.goBack();
    }

    return (
        <nav class="navbar">
            <li>
                <a className='navbar-link' href="javascript:history.back()">Back</a>
            </li>
            <li>
                <Link className='navbar-link' to="/">Home</Link>
            </li>
            <li>
                <Link className='navbar-link' to="/jobs">Search Jobs</Link>
            </li>
        </nav>
    )
}

export default NavBar;