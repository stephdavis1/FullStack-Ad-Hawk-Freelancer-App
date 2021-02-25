import { Link, useHistory } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavbarBrand from "react-bootstrap/NavbarBrand"

const NavBar = () => {
    const history = useHistory();

    const back = () => {
        history.goBack();
    }
    return (
        <Nav className="justify-content-center" activeKey="/">
            <a class="navbar-brand">
            <img src='https://i.imgur.com/5gwyncf.png' width="100" height="30" alt="ad-hawk"></img>
            </a>
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/alljobs">All Jobs</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/myjobs">My Jobs</Nav.Link></Nav.Item>
        </Nav>
    )
}

export default NavBar;


