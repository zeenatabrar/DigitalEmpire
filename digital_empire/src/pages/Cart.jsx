import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from '../components/CartCard';
import { PRODUCT_REMOVE_FROM_CART } from '../Redux/actionTypes';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import {Card,CardHeader,CardBody,VStack,HStack,Spacer,Text,StackDivider,Button} from "@chakra-ui/react";
import Productcard from "../components/Productcard";

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
    if(cart.length === 0)
    {
      navigate("/");
    }
  },[cart])
  

  return (
    <>
    <h2 style={{marginTop: "1rem", fontSize: "1.5rem"}}>Total items : {cart.length}</h2>
    <WRAPPER>
      <LEFTSECTION>
        {console.log(cart)}
        {
          cart.length > 0 && cart.map((product,index)=>{
            return <CartCard key={product.id} {...product} removeProduct={removeProduct} index={index} quantity={quantity} setQuantity={setQuantity}/>
          })
        }
      </LEFTSECTION>
      <RIGHTSECTION>
        <Card w="20rem" className='card'>
          <CardHeader fontWeight={"bold"}>Summary</CardHeader>
          <hr style={{height: "1px", background: "black"}} />
          <CardBody>
            <VStack>
              <HStack>
              <Text fontSize="md">products price :</Text>
              <Spacer></Spacer>
              <Text fontSize="md" fontWeight={"bold"}>{sum.toLocaleString("en-In")}</Text>
              </HStack>
              <HStack>
              <Text fontSize="md">GST :</Text>
              <Spacer></Spacer>
              <Text fontSize="md" fontWeight={"bold"}>{Math.round(sum*(18/100))}</Text>              </HStack>
              <StackDivider></StackDivider>
              <HStack>
              <Text fontSize="md">Total cost :</Text>
              <Spacer></Spacer>
              <Text fontSize="md" fontWeight={"bold"}>{Math.round(sum*(18/100)) + sum}</Text>
              </HStack>
            </VStack>
          </CardBody>
              <hr style={{height: "1px", background: "black"}} />
              <Button 
                onClick={()=>{navigate("/payment")}} 
                bgColor={"green.400"} 
                mt="1rem"
                w="40%"
                mx="auto"
                mb={4}
              >
                Checkout
              </Button>
        </Card>
      </RIGHTSECTION>
      {/* {
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
      } */}
    </WRAPPER>
    </>
  )
}



export default Cart

const WRAPPER = styled.div`
  /* background-color:red; */
  margin-top: 1rem;
  display: flex;
  justify-content: space-evenly;
`;

const LEFTSECTION = styled.div`

`;

const RIGHTSECTION = styled.div`
.card
{
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 15px;
  margin: auto;
  margin-top: 2rem;
}
`;

// import React, { useEffect, useState } from 'react'
// import CartCard from '../components/CartCard';
// import { useDispatch, useSelector } from 'react-redux'
// // import CartCard from '../components/CartCard';
// import { PRODUCT_REMOVE_FROM_CART ,cart_quantity_dec,cart_quantity_inc} from '../Redux/actionTypes';
// import { useNavigate } from 'react-router';
// import styled from 'styled-components';

// const Cart = () => {
//   const cart = useSelector((store) => store.cart);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
 
//   // cart=cart.map(item=>{
//   //   return {...item,quantity:1}
//   // })
  
// console.log(cart)


//   const removeProduct = (id) => {
//     dispatch({type:PRODUCT_REMOVE_FROM_CART, payload : id })
//   }

//   const buyProducts = () => {
//     navigate("/payment")
//   }

//   const handleIncClick = (id) => {
//     dispatch ({ type:cart_quantity_inc,payload:id})


    
//   };
  
//   const handleDecClick = (id) => {
//     dispatch ({ type:cart_quantity_dec,payload:id})
//   };

//   // let sum=0;
//   // for(let i=0; i<cart.length;i++) {
//   //   const price = parseFloat(cart[i].price.replace(/,/g, ''));
//   //   sum+= price * Number(quantity[i])
//   //   console.log(sum)
//   // }
//   useEffect(()=> {
//   },[dispatch])
  

//   return (
//     <WRAPPER>
//       <h2>Total items : {cart.length}</h2>
//       <div>
//         {cart.map(item=>(
//           <CartCard
//             key={item.id}
//             {...item}
            
//             buyProducts={buyProducts}
//             handleDecClick={handleDecClick}
//             handleIncClick={handleIncClick}
//             removeProduct={removeProduct}
//           />
//         ))}
//       </div>
//       <h2>Total Amount :0</h2>
//     </WRAPPER>
   
 
    
               

   
//   )
// }



// export default Cart

// const WRAPPER = styled.div`

//   /* background-color:red; */
//   border:1px solid teal
 

// `



