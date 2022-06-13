import React,{useState}from'react';
import {Button,Badge }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineAddShoppingCart, MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";


//El componente contador
const ItemCount = ({stock, onAdd})=>{
    // inicializamos la variable contador (el desafio pide que empiece en 1).
    const[counter, setCounter]=useState(0);
    let[disabledPlus, setDisabledPlus]=useState("primary");
    let[disabledMinus, setDisabledMinus]=useState("primary");
    //suma el use state
    
    const add=()=>{
        counter!==stock 
        ?setCounter(counter+1,disabledMinus="primary")
        :setDisabledPlus(disabledPlus='secondary');
        //counter>0&&setDisabledPlus(disabledPlus="primary");
        setDisabledMinus(disabledMinus="primary");
    }
    //resta el use state
    const subtract=()=>{
        counter!==0
        ?(setCounter(counter-1 ) )
        :setDisabledMinus(disabledMinus='secondary');
        //counter>0&&setDisabledMinus(disabledMinus="primary");
        setDisabledPlus(disabledPlus="primary");
    }

    return(
        <>
    
        <Button  onClick={add} variant={disabledPlus}><AiOutlinePlusCircle style={{color: 'white', fontSize: '18px'}} /></Button>
        <Badge bg="secondary">{counter}</Badge>
        <Button onClick={subtract} variant={disabledMinus}><AiOutlineMinusCircle style={{color: 'white', fontSize: '18px'}} /></Button>
        
        {
            counter===0
        ?<Button  variant="outline-secondary"> <MdOutlineShoppingCart style={{color: 'white', fontSize: '18px'}}/> Agregar al carrito</Button>
        :<Button  variant="outline-primary" onClick={()=>onAdd(counter)} > <MdOutlineAddShoppingCart style={{color: 'white', fontSize: '18px'}}/> Agregar al carrito</Button>
        }
    

        </>
        )
    }

    export default ItemCount;