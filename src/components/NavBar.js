import {Navbar,Container,Nav,} from 'react-bootstrap';
import CartWidget from './CartWidget';

import { Link } from 'react-router-dom';


const NavBar = () =>{
    return(
        <>
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg"  >
        <Container>
            <Link to='/' style={{textDecoration: "none"}}>
            <Navbar.Brand >
                <span className= "text-danger">Y</span>ou 
                <span className="text-danger">F</span>reaky 
                <span className= "text-danger">S</span>hop
            </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Item>
                    {/* <Link to="/">Helmets</Link> */}
                    <Link to="/category/Helmet">Helmets</Link>
                    </Nav.Item>
                    <Nav.Item>
                    {/* <Link to="/">Figura</Link> */}
                    <Link to="/category/Figura">Figura</Link>
                    </Nav.Item>
                    <Nav.Item>
                    {/* <Link to="/">Funko-Pops</Link> */}
                    <Link to="/category/Funko-Pop">Funko-Pops</Link>
                    </Nav.Item>
                    <Nav.Item>
                    {/* <Link to="/">Comics</Link> */}
                    <Link to="/category/Comic">Comics</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
            <CartWidget/>
        </Container>
    </Navbar>
        </>
    )
}

    export default NavBar;