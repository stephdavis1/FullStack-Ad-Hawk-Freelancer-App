import { Link, useHistory } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
    const history = useHistory();

    const back = () => {
        history.goBack();
    }
    return (
        <Nav className="justify-content-center" activeKey="/">
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/alljobs">All Jobs</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/myjobs">My Jobs</Nav.Link></Nav.Item>
        </Nav>
    )
}

export default NavBar;


