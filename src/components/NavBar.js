import {Navbar,Container,Nav,} from 'react-bootstrap';


const NavBar = () =>{
    return(
        <>
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg"  >
        <Container>
            <Navbar.Brand href="/">
                <span className= "text-danger">Y</span>ou 
                <span className="text-danger">F</span>reaky 
                <span className= "text-danger">S</span>hop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/category/Helmet">Helmets</Nav.Link>
                    <Nav.Link href="/category/Figura">Figura</Nav.Link>
                    <Nav.Link href="/category/Funko-Pop">Funko-Pops</Nav.Link>
                    <Nav.Link href="/category/Comic">Comics</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
        </>
    )
}

    export default NavBar;