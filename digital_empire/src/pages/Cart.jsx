import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from '../components/CartCard'
import { removeItem } from '../Redux/action'
// import Productcard from '../components/Productcard'
import Payment from './Payment'
import { useNavigate } from 'react-router-dom'




const Cart = () => {
  const cart = useSelector(store=> store.cart)
  console.log(cart)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = (id)=>{
  dispatch(removeItem(id))
}

const buyProd = () =>{
 navigate("/payment")
}


  useEffect(()=>{
  
  },[dispatch])

let sum =0;
for(let i=0;i<cart.length;i++){
  sum+=cart[i]["price"]
}

  return (
    <div>
      <h1>Cart</h1>
      <h2>Total Item = {cart.length}</h2>
      {
        cart.length>0 && 
        cart.map((item)=>(
          <CartCard key={item.id} {...item} handleClick={()=>handleClick(item.id)}  buyProd={buyProd}/>
        )) 
      }
     <h3>TotalAmount:{sum}</h3>

    </div>
  )
}

export default Cart