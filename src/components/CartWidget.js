import { BsFillCartFill } from "react-icons/bs";
import {Button,Badge,Nav,  }from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useContext } from "react";
// import CartContext from "../context/CartContext";



const CartWidget = () =>{
    // const quantity =useContext(CartContext);

    return(
        <>
            <Nav.Item>
            <Link to="/Cart">
            <Button 
                Variant="secondary"
            >   
                <BsFillCartFill style={{color: 'white', fontSize: '24px'}} />
                <Badge bg="danger" text="ligth" pill >4</Badge>

            </Button>     
            </Link>
            </Nav.Item>
        </>

    )
}

export default CartWidget;