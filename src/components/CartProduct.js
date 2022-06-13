// import React from 'react'
import {useContext} from "react"
import {Button,Card,Row,Col} from 'react-bootstrap'
import {CartContext} from "../context/CartContext";

// Alert,
//, useState
const CartProduct = (key,img,title,price,qty) => {

    const {removeItem} =useContext(CartContext);

    //const list = useContext(CartContext);
    //const [alertOpen, setAlertOpen]= useState(false);
    
    // const deleted = () =>{
    //     removeItem(key)
    //     setAlertOpen(true)
    //     setTimeout(() =>{
    //         setAlertOpen(false)
    //     },3000)
    // }



    return (
    <>
    {/* <div>CartProduct</div> */}
    <Row>
                <Col sm="10" md="8" lg="6">
                <Card 
                    
                    bg="dark"
                    
                    >
        
                    <Card.Header>
                        <Card.Title >
                            
                            {title}
                        </Card.Title>
                    </Card.Header>
                    <Card.Img
                    //alt={title}
                    src={img}
                    variant="top"
                    //width="100%"
                    />
                    <Button onClick={removeItem(key)}>Remover producto</Button>
                    </Card>
                </Col>
                <Col sm="10" md="8" lg="6">
                    <Card 
                        body
                        bg="dark"
                        
                    >
        
                    <Card.Header>
                        <Card.Text>
                            {qty}
                        </Card.Text>
                    </Card.Header>
            <Card.Body>
                <Card.Subtitle
                    className="mb-2 text-muted"
                    
                >
                    ${price}
                </Card.Subtitle>
                <Card.Text>
                    Stock de {qty} unidades.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
            
                
            </Card.Footer>
        </Card>
                {/* <Alert
                    color="info"
                    isOpen={alertOpen}
                    >
                        {`Se eliminó ${qty} productos del carrito`}
                </Alert> */}
    </Col>
</Row>

</>   
    
    )
}


export default CartProduct
