import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from '../components/CartCard';
import { PRODUCT_REMOVE_FROM_CART } from '../Redux/actionTypes';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(cart);
  let iniQuantity = new Array(cart.length).fill(1);
  const [quantity, setQuantity] = useState(iniQuantity);
  // console.log(quantity)

  const removeProduct = (id) => {
    dispatch({type:PRODUCT_REMOVE_FROM_CART, payload : id })
  }

  const buyProducts = () => {
    navigate("/payment")
  }

  const handleIncClick = (i) => {
    setQuantity(prevQuantity => {
      const updatedQuantity = [...prevQuantity];
      updatedQuantity[i] += 1;
      return updatedQuantity;
    });
   
  };
  
  const handleDecClick = (i) => {
    setQuantity(prevQuantity => {
      const updatedQuantity = [...prevQuantity];
      // updatedQuantity[i] -= 1;
      if (updatedQuantity[i] > 1) {
        updatedQuantity[i] -= 1;
      }
      return updatedQuantity;
    });
  };

  let sum=0;
  for(let i=0; i<cart.length;i++) {
    const price = parseFloat(cart[i].price.replace(/,/g, ''));
    sum+= price * Number(quantity[i])
    console.log(sum)
  }
  useEffect(()=> {
  },[dispatch])
  

  return (
    <WRAPPER>
      <h2>Total items : {cart.length}</h2>
      {
        cart.length>0 && cart.map((prod,i) => (
          <div className='main'>
          <CartCard 
          key={prod.id} 
          {...prod} 
          // handleDecClick={handleDecClick}
          // quantity={quantity[i]}
          // handleIncClick={handleIncClick}
          removeProduct={() => removeProduct(prod.id)} 
          buyProducts={buyProducts} />
           <div>
            <button onClick={() => handleDecClick(i)}>-</button>
            <p>{quantity[i]}</p>
            <button onClick={() => handleIncClick(i)}>+</button>
           </div>
        </div>
        ))
      }
      <h2>Total Amount : {sum}</h2>
    </WRAPPER>
   
 
    
               

   
  )
}



export default Cart

const WRAPPER = styled.div`

  /* background-color:red; */
  border:1px solid teal
 

`