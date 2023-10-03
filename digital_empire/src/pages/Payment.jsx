import React, { useState } from 'react'
import styled from 'styled-components'
import { Input, Heading, Button, Textarea, Text } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer, Flex
} from '@chakra-ui/react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Payment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const toast = useToast()

  const cart = useSelector((store) =>
    store.cart
  )
  // console.log(cart)

  // payment method-----------------------------------------------------------
  const [payment, setPayment] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    method: ''
  })

  const { fname, lname, phone, email, address, city, state, zipCode, method } = payment



  const handlePayment = (e) => {
    let { value, name } = e.target
    setPayment((prev) => {
      return { ...prev, [name]: value }
    })
  }

  // console.log(payment)

  // cardpay--------------------------------------------------------


  const [pay, setPay] = useState({
    cname: '',
    cnumber: '',
    exdate: '',
    cvv: ''
  })

  const { cname, cnumber, exdate, cvv } = pay


  function cardPay(e) {
    const { name, value } = e.target
    setPay((prev) => {
      return { ...prev, [name]: value }
    })
  }


  const [flag, setFlag] = useState(false)

  function finalSubmit() {
    if (cname && cnumber && exdate && cvv) {
      setFlag(true)
      function redirect() {
        setTimeout(() => {
          return <Navigate to='/products' />
        }, 30)
      }
      redirect()

    }
    else {
      function al() {
        toast({
          title: 'Fill all the fields',
          description: "Some fields are empty !",
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: "top"
        })
      }
      al()
    }
  }

  // --------------------------------------------------------------------------



  function handleSubmit(e) {
    e.preventDefault()
    if (fname && lname && phone && email && address && city && state && zipCode && method) {
      if (method === 'card') {
        onOpen()
      }
      else {
        setFlag(true)
      }
    }
    else {
      function al() {
        toast({
          title: 'Fill all the fields',
          description: "Some fields are empty !",
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: "top"
        })
      }
      al()

    }

  }

  // --------------------grand Total---------------------
  let total = 0

  for (let i = 0; i < cart.length; i++) {
    total = total + (cart[i].price.replace(/,/g, '') * cart[i].quantity)
  }
  console.log(total)


  // console.log(parseInt(amt.replace(",","")))

  // ----------------------------------------------------------------------------

  if (flag) {
    return (<Alert
      status='success'
      variant='subtle'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      height='200px'
    >
      <AlertIcon boxSize='40px' mr={0} />
      <AlertTitle mt={4} mb={1} fontSize='lg'>
        Order Placed Successfully!
      </AlertTitle>
      <AlertDescription maxWidth='sm'>
        Thanks for oredering in our application. Our team will get back to you soon.
      </AlertDescription>
    </Alert>)
  }

  return (
    <DIV>
      <div className="amount-side">
        <TableContainer w="100%" class="summary-table">
          <Table variant='striped' colorScheme='teal'>
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead bgColor={"orange"}>
              <Tr class="summary-headings">
                <Th style={{ fontSize: "1rem" }}>Product</Th>
                <Th style={{ fontSize: "1rem" }}>Quantity</Th>
                <Th isNumeric style={{ fontSize: "1rem" }}>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cart.map((el) => <Tr>
                <Td>{el.name}</Td>
                <Td>{el.quantity}</Td>
                <Td isNumeric>{(el.price.replace(/,/g, '') * el.quantity).toLocaleString("en-In")}</Td>
              </Tr>)}

            </Tbody>
            <Tfoot>
              <Tr style={{ fontWeight: "400" }}>
                <Td>GST</Td>
                <Td></Td>
                <Td textAlign={"center"}>{(total * (18 / 100)).toLocaleString("en-In")}</Td>
              </Tr>
              <Tr bgColor={"green.400"}>
                <Td>Grand Total</Td>
                <Td></Td>
                <Td>{(total + (total * (18 / 100))).toLocaleString("en-In")}</Td>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </div>
      <div>
        <div className='form-side'>
          <div className='header'>
            <Heading textAlign={"center"} mb={"1rem"}>Basic Information</Heading>
          </div>
          <div className="payment-form">

            <form >
              <div className='name-surname'>
                <div className='first-name'>
                  <label>FirstName</label>
                  <Input type="text" name='fname' value={fname} onChange={handlePayment} />
                </div>
                <div className="last-name">
                  <label>Last Name</label>
                  <Input type="text" name='lname' value={lname} onChange={handlePayment} />
                </div>
              </div>

              <div className="phone-adress">
                <div className="phone">
                  <label>Phone Number</label>
                  <Input type="number" name='phone' value={phone} onChange={handlePayment} />
                </div>
                <div className="email">
                  <label>Email Address</label>
                  <Input type="email" name='email' value={email} onChange={handlePayment} />
                </div>
              </div>
              <div className="full-adress">
                <label>Full Adress</label>
                <Textarea border={"1px solid black"} name='address' value={address} onChange={handlePayment}></Textarea>
              </div>
              <div className="city-state-zipcode">
                <div className='city'>
                  <label>City</label>
                  <Input type="text" name='city' value={city} onChange={handlePayment} />
                </div>

                <div className="state">
                  <label>State</label>
                  <Input type="text" name='state' value={state} onChange={handlePayment} />
                </div>

                <div className="zipcode">
                  <label>Zip-code</label>
                  <Input type="number" name='zipCode' value={zipCode} onChange={handlePayment} />
                </div>
              </div>

              <h3 className='pay-head'>Payment Method</h3>
              <div className="payment-type">

                <div className="card pay">
                  <input type="radio" name='method' value='card' checked={method === 'card'} onChange={handlePayment} />
                  <label>Card</label>
                </div>
                <div className="upi pay">
                  <input type="radio" name='method' value='upi' checked={method === 'upi'} onChange={handlePayment} />
                  <label>Upi</label>
                </div>
                <div className="cash pay">
                  <input type="radio" name='method' value='cash' checked={method === 'cash'} onChange={handlePayment} />
                  <label>Cash on delivery</label>
                </div>

              </div>

              <div className="place-order">
                <Button type='submit' onClick={handleSubmit}>Place Order</Button>
              </div>

              <div id='sign-in-button'></div>

            </form>

          </div>
        </div>

        <div className='payment-method'>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
              bg="rgba(0, 0, 0, 0.6)"
              zIndex="1000"
              backdropFilter="blur(8px)"
            />
            <ModalContent bgColor={"#f7eeca"}>
              <ModalHeader textAlign={"center"}>Payment Details</ModalHeader>
              <ModalCloseButton />
              <ModalBody>

                <Text mt={3}>Card Name</Text>
                <Input type="text" name='cname' border={"1px solid black"} value={cname} onChange={cardPay} />
                <Text mt={3}>Card Number</Text>
                <Input type="text" name='cnumber' border={"1px solid black"} value={cnumber} onChange={cardPay} />
                <Flex className='cvv' gap={2} mt={3}>
                  <div>
                    <Text>expiry date</Text>
                    <Input type="date" name='exdate' border={"1px solid black"} value={exdate} onChange={cardPay} />
                  </div>
                  <div>
                    <Text>CVV</Text>
                    <Input type='password' name='cvv' border={"1px solid black"} value={cvv} onChange={cardPay} />
                  </div>
                </Flex>

              </ModalBody>

              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant='ghost' bgColor={"green.400"} onClick={finalSubmit}>Pay</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

        </div>
      </div>


    </DIV>
  )
}

const DIV = styled.div`
  /* margin: 0px; */
  text-align: left;
  /* background-color: #f4f3e8; */
  display: flex;
  justify-content: space-around;


  .summary-table
  {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    /* border-radius: 15px; */
  }

  .form-side{
    margin: 50px;
    width: 90%;
    border: 1px solid;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 0.5rem;
    border-radius: 15px;
    background-color: #f4e8b8;
  }
  .amount-side{
    margin: 50px;
    width: 40%;
  }

  .header{
    border-bottom: 1px solid;
  }
  .name-surname,.phone-adress,.city-state-zipcode{
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
    width: 100%;
  }

  .name-surname Input,.phone-adress Input{
    width: 350px;
  }

  label{
    font-size: large;
  }

  form{
    margin: 15px;
    input{
      border: 1px solid black;
    }
  }

  Button{
    background-color: #7676f0;
  }
  .place-order{
    text-align: end;
  }

  Tfoot{
    font-weight: 700;
  }

  .payment-type{
    display: flex;
    gap: 50px;
  }

  .pay-head{
    font-size: 25px;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .pay{
    display: flex;
    gap: 15px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;

    .form-side, .amount-side {
      width: 100%;
      margin: 20px 0;
    }

    .name-surname Input, .phone-adress Input {
      width: 100%;
    }
  }
`

export default Payment