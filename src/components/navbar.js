import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

function Navv() {
    return (
        <Navbar expand="lg" className={'nav sticky-top'}>
            <Container>
                <Link to={'/'}><Navbar.Brand><strong>OFFICIUM</strong></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto links">
                        <Nav.Link className={'d-lg-none'}><Link to={'/'}><span className={'link'}>HOMEPAGE</span></Link></Nav.Link>
                        <Nav.Link><Link to={'/Finder'}><span className={'link'}>JOB SEARCH</span></Link></Nav.Link>
                        <Nav.Link><Link to={'/About'}><span className={'link'}>ABOUT US</span></Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navv;