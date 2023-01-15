import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

export function Navv() {
    return (
        <Navbar expand="lg" className={'nav sticky-top'}>
            <Container>
                <Link to={'/'}><Navbar.Brand><strong>OFFICIUM</strong></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto links">
                        <Nav.Link as={Link} to="/Finder"><span className={'link'}>JOB SEARCH</span></Nav.Link>
                        <Nav.Link as={Link} to="/Comparison"><span className={'link'}>COMPARISON</span></Nav.Link>
                        <Nav.Link as={Link} to="/About_us"><span className={'link'}>ABOUT US</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
