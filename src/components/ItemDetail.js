import ItemCount from './ItemCount';
import {Button,Card,Row,Col} from 'react-bootstrap'
import React,{useState, useContext }from'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

// Alert,
// useContext

const ItemDetail = ({product}) => {

    //const {img,price,title,description,stock}=product;

    const { addItem } = useContext(CartContext); 

    const [itemCount, setItemCount] =useState(0);

    //const [alertOpen, setAlertOpen] = useState(false);

    const onAdd = (qty) => {
        alert(`cargó ${qty} productos`)
        
        setItemCount(qty);
        addItem(product,qty);

            //harcoreo el array
        // let $cartList =JSON.parse(sessionStorage.getItem('cartList'))||[];

        // $cartList=[...$cartList,{id,title,price,img,qty}];

        // const $cartListJSON = JSON.stringify($cartList);      
        //         sessionStorage.setItem('cartList', $cartListJSON)
        //<Link to='/Cart' style={{textDecoration: "none"}}

    }
    
    
    
    return (
        <>
        
<Row xs={1} md={2} className="g-4" >
    <Col >
        <Card 
        body
        bg='dark'
        text='white'
        >
        
        <Card.Header>
            <Card.Title 
            className="card-title">
                {product.title}
            </Card.Title>
        </Card.Header>
        <Card.Img
            //alt={title}
            variant="top"
            src={product.img}
            //width="80%"
        />
        </Card>
    </Col>
    <Col >
        <Card 
        body
        bg="dark"
        text="white"
        >
        
            <Card.Header>
                <Card.Text>
                    {product.description}
                </Card.Text>
            </Card.Header>
            <Card.Body>
                <Card.Subtitle
                    className="mb-2 text-muted card-subtitle"
                    
                >
                    ${product.price} ARS
                </Card.Subtitle>
                <Card.Text
                className="card-text">
                    Stock de {product.stock} unidades.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                {/* <Alert
                    color="info"
                    isOpen={alertOpen}
                    >
                        {`Has sumado ${itemCount} productos al carrito`}
                </Alert> */}
                {
                itemCount===0
                ?<ItemCount stock={product.stock}  onAdd={onAdd}/>
                :<Link to='/Cart' ><Button variant="danger" onClick={(e) => {e.stopPropagation()}} outline>Checkout</Button></Link>
                }
                
            </Card.Footer>
        </Card>
    </Col>
</Row>
        
        </>
    )
}

export default ItemDetail