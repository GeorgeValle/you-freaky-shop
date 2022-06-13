import { FcPaid } from "react-icons/fc";
import {CartContext} from "../context/CartContext";
import {useContext, useState } from "react"
import CartProduct from "./CartProduct";
import {Button} from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';



const Cart = () => {

    
    
    //const { cartList } = useContext(CartContext);
    const list =useContext(CartContext);
    const [cartList,setCartList]= useState([]);
    


    let $cartList =JSON.parse(sessionStorage.getItem('cartList'))||[];
    setCartList($cartList);
    
    return(
        <>
        <h1>Carro de compras</h1>;
        <Link to="/"><Button>Seguir Comprando</Button></Link>
        <Button onClick={list.clear} >Remover todo</Button>
        
        {    
            
            cartList.length ===0
            ?<h2>Su carro esta vacio <FcPaid/></h2>
            
            :cartList.map((item) =><CartProduct key={item.id} img={item.img} title={item.title} price={item.price} qty={item.qty}/>)            

        }

            
        </>
    );




}

export default Cart;