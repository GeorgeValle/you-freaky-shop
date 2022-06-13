import React, {useState, useEffect} from 'react';
import ItemDetail from '../components/ItemDetail'
import { Spinner } from 'react-bootstrap';
import { getData } from '../mocks/productsArray';
import { useParams } from 'react-router-dom';

const ItemDetailContainer=()=>{
    const [loader, setLoader]=useState(false);
    const [product, setProduct]=useState([]);
    const {id}=useParams();
    

    useEffect(()=>{
        setLoader(true)
        getData
        .then((res)=>setProduct(res.find(item=>item.id===id)))
        .catch((error)=> console.log(error))
        .finally(()=> setLoader(false))

    }, [id])
    //console.log(productList)
    return (
        <>
        

        {loader
            ?<Spinner animation="border" variant="primary"/>
            :<ItemDetail product={product}/>}
        </>
    );
}



export default ItemDetailContainer