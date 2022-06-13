import React,{ createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

  // const [cartList, setCartList] = useState([]);

  // const addItem = (item, setCantidad) => {
  // console.log(setCantidad);
  // console.log(item)
  // console.log(item.id)

  
  //   const exist = cartList.find((cartItem) => cartItem.id === item.id);
    
  //   if (exist) {
      
  //     setCartList(

  //       cartList.map((cartItem) =>

  //         cartItem.id === item.id

  //           ? { ...cartItem, cantidad: cartItem.cantidad + setCantidad }

  //           : cartItem

  //       )

  //     );

  //   } else {

  //     setCartList([...cartList, { ...item, cantidad: setCantidad }]);

  //     //let $cartList =JSON.parse(sessionStorage.getItem('cartList'))
  //                //let $cartList =JSON.parse(sessionStorage.getItem('cartList'))||[];
  //               //const $cartListJSON = JSON.stringify(cartList);      
  //               //sessionStorage.setItem('cartList', $cartListJSON)

  //   }
  //   //const $cartListJSON = JSON.stringify(cartList);      
  //               //sessionStorage.setItem('cartList', $cartListJSON)
  // };


  //const [compra, setCompra] = useState([]);
  const [cartList, setCartList] = useState([]);

  const addItem = (item, qty) => {
    const {id, img, title, price}=item
    let cartTemp=[]
    let found = cartList.find(product => product.id === id);
    let founded= cartTemp.find(product => product.id === id)
  
    if (found === undefined) {
          setCartList([
              ...cartList,
              {
                  idItem: id,
                  imgItem: img,
                  nameItem: title,
                  costItem: price,
                  qtyItem: qty
              }
            ]);

          } else {
            //al encontrarlo, entonces aumentamos el qty de ese producto
                found.qtyItem += qty;
          }
          
          if (founded === undefined) {
            cartTemp=[
                ...cartTemp,
                {
                    id,
                    img,
                    title,
                    price,
                    qty
                }
              ];
  
            } else {
              //al encontrarlo, entonces aumentamos el qty de ese producto
              founded.qty += qty;
            }


          console.log(qty)


    
    

          console.log(cartList)
          console.log(cartTemp)
          const $cartListJSON = JSON.stringify(cartTemp);      
                sessionStorage.setItem('cartList', $cartListJSON)

    // let found = cartList.find(product => product.idItem === item.id);
    // if (found === undefined) {
    //     setCartList([
    //         ...cartList,
    //         {
    //             idItem: item.id,
    //             imgItem: item.image,
    //             nameItem: item.name,
    //             costItem: item.cost,
    //             qtyItem: qty
    //         }
            
    //     ]);
    // } else {
    //     //al encontrarlo, entonces aumentamos el qty de ese producto
    //     found.qtyItem += qty;
    // }
    // console.log(cartList)
};

  const removeItem = (id) => {

    setCartList(cartList.filter((item) => item.id !== id));
    //cartTemp.filter((product)=>product.id !==id);

  };

  const clear = () => {

    setCartList([]);
    const $cartListJSON = JSON.stringify([]);      
    sessionStorage.setItem('cartList', $cartListJSON)

  };

  return (

    <CartContext.Provider value={{  addItem, removeItem, clear }}>

      {children}

    </CartContext.Provider>

  );

};

export default CartContextProvider;