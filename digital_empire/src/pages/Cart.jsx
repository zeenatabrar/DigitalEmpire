import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from '../components/CartCard';
import { PRODUCT_REMOVE_FROM_CART, cart_quantity_dec, cart_quantity_inc } from '../Redux/actionTypes';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Card, CardHeader, CardBody, VStack, HStack, Spacer, Text, Button } from "@chakra-ui/react";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeProduct = (id) => {
    dispatch({ type: PRODUCT_REMOVE_FROM_CART, payload: id })
  }

  const handleIncClick = (id) => {
    dispatch({ type: cart_quantity_inc, payload: id })
  };

  const handleDecClick = (id) => {
    dispatch({ type: cart_quantity_dec, payload: id })
  };

  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    const price = parseFloat(cart[i].price.replace(/,/g, ''));
    sum += price * Number(cart[i].quantity);
    console.log(sum);
  }

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);


  return (
    <>
      <h2 style={{ marginTop: "1rem", fontSize: "1.5rem" }}>Total items : {cart.length}</h2>
      <hr />
      <br />
      <WRAPPER>
        <LEFTSECTION>
          {console.log(cart)}
          {
            cart.length > 0 && cart.map((product) => {
              return <CartCard key={product.id} {...product} removeProduct={removeProduct} handleDecClick={handleDecClick} handleIncClick={handleIncClick} />
            })
          }
        </LEFTSECTION>
        <RIGHTSECTION>
          <Card className='card'>
            <CardHeader fontWeight={"bold"}>Summary</CardHeader>
            <hr style={{ height: "1px", background: "black" }} />
            <CardBody>
              <HStack>
                <VStack align={"right"}>
                  <Text fontSize="md">products price :</Text>
                  <Text fontSize="md">GST :</Text>
                  <Text fontSize="md">Total cost :</Text>
                </VStack>
                <Spacer></Spacer>
                <VStack>
                  <Text fontSize="md" fontWeight={"bold"}>{sum.toLocaleString("en-In")}</Text>
                  <Text fontSize="md" fontWeight={"bold"}>
                    {(Math.round(sum * (18 / 100))).toLocaleString("en-In")}
                  </Text>
                  <Text fontSize="md" fontWeight={"bold"}>
                    {(Math.round(sum * (18 / 100)) + sum).toLocaleString("en-In")}
                  </Text>
                </VStack>
              </HStack>
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
      </WRAPPER >
    </>
  )
}


export default Cart

const WRAPPER = styled.div`
  /* background-color:red; */
  margin-top: 1rem;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 600px)
  {
    flex-direction: column;
  }
`;

const LEFTSECTION = styled.div`
width: 40%;

@media (max-width: 600px)
{
  width: 100%;
}
`;

const RIGHTSECTION = styled.div`
width: 30%;
@media (max-width: 830px)
{
  width: 50%;
}
@media (max-width: 600px)
{
  width: 100%;
}
.card
{
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 15px;
  margin: auto;
  margin-top: 2rem;
  margin-left:0rem;
  margin-bottom:0rem;
  width: 100%;
}
`;