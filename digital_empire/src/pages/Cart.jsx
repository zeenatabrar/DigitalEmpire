import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from '../components/CartCard';
import { PRODUCT_REMOVE_FROM_CART } from '../Redux/actionTypes';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Card, CardHeader, CardBody, VStack, HStack, Spacer, Text, StackDivider, Button } from "@chakra-ui/react";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(cart);
  let iniQuantity = new Array(cart.length).fill(1);
  const [quantity, setQuantity] = useState(iniQuantity);
  // console.log(quantity)

  const removeProduct = (id) => {
    dispatch({ type: PRODUCT_REMOVE_FROM_CART, payload: id })
  }

  // const buyProducts = () => {
  //   navigate("/payment")
  // }

  // const handleIncClick = (i) => {
  //   setQuantity(prevQuantity => {
  //     const updatedQuantity = [...prevQuantity];
  //     updatedQuantity[i] += 1;
  //     return updatedQuantity;
  //   });

  // };

  // const handleDecClick = (i) => {
  //   setQuantity(prevQuantity => {
  //     const updatedQuantity = [...prevQuantity];
  // updatedQuantity[i] -= 1;
  //     if (updatedQuantity[i] > 1) {
  //       updatedQuantity[i] -= 1;
  //     }
  //     return updatedQuantity;
  //   });
  // };

  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    const price = parseFloat(cart[i].price.replace(/,/g, ''));
    sum += price * Number(quantity[i])
    console.log(sum)
  }
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart])


  return (
    <>
      <h2 style={{ marginTop: "1rem", fontSize: "1.5rem" }}>Total items : {cart.length}</h2>
      <WRAPPER>
        <LEFTSECTION>
          {console.log(cart)}
          {
            cart.length > 0 && cart.map((product, index) => {
              return <CartCard key={product.id} {...product} removeProduct={removeProduct} index={index} quantity={quantity} setQuantity={setQuantity} />
            })
          }
        </LEFTSECTION>
        <RIGHTSECTION>
          <Card w="20rem" className='card'>
            <CardHeader fontWeight={"bold"}>Summary</CardHeader>
            <hr style={{ height: "1px", background: "black" }} />
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
                  <Text fontSize="md" fontWeight={"bold"}>{Math.round(sum * (18 / 100))}</Text>              </HStack>
                <StackDivider></StackDivider>
                <HStack>
                  <Text fontSize="md">Total cost :</Text>
                  <Spacer></Spacer>
                  <Text fontSize="md" fontWeight={"bold"}>{Math.round(sum * (18 / 100)) + sum}</Text>
                </HStack>
              </VStack>
            </CardBody>
            <hr style={{ height: "1px", background: "black" }} />
            <Button
              onClick={() => { navigate("/payment") }}
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
  margin-left:0rem;
  margin-bottom:0rem;
}
`;