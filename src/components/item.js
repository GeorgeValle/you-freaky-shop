import React from 'react'
import {Card,Button,} from 'react-bootstrap'
// import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';

const Item = ({product}) => {
    
    const {id, img,price,title/*,stock*/}=product;

    return (
    <>
    <div>
    <Card
        body
        bg="dark"
        
        
    >
    
        <Card.Img
            //alt={title}
            src={img}
            variant="top"
            //width="100%"
        />
        <Card.Header>
        <Card.Title 
            >
            {title}
        </Card.Title>
        </Card.Header>
        <Card.Body>
        
        <Card.Subtitle
            className="mb-2 text-muted"
            
        >
            ${price}
        </Card.Subtitle>
    
        
        </Card.Body>
        <Card.Footer>
        <Card.Text>
        <Link to={`/Item/${id}`}><Button variant="primary">Ver Detalles</Button></Link>
        </Card.Text>
        {/* <ItemCount stock={stock}/> */}
        </Card.Footer>
    </Card>
</div>

    </>
    
    )
}

export default Item;