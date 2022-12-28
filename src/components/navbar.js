import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navv() {
    return (
        <Navbar expand="lg" className={'nav sticky-top'}>
            <Container>
                <Navbar.Brand href="#home"><strong>OFFICIUM</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto links">
                        <Nav.Link href="#home">HOMEPAGE</Nav.Link>
                        <Nav.Link href="#link">JOB SEARCH</Nav.Link>
                        <Nav.Link href="#link">ABOUT US</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navv;