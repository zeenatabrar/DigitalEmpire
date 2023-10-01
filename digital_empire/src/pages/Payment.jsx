import React, { useState } from 'react'
import styled from 'styled-components'
import { Input,Heading,Button,Textarea,Text } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,

  TableContainer,Flex
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

import { RecaptchaVerifier,getAuth,signInWithPhoneNumber  } from '@firebase/auth'

const Payment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

// payment method-----------------------------------------------------------
  const [paymentMethod,setPaymentMethod]=useState('')



  const handlePayment=(e)=>{
    let {value}=e.target
    setPaymentMethod(value)
  }

// --------------------------------------------------------------------------

  function handleSubmit(e){
    e.preventDefault()
    if(paymentMethod==='card'){
      onOpen()
    }
    else{

    }
  }

// OTP verification------------------------------------------------------------
const [mobile,setMobile]=useState('')
console.log(mobile)

function setupRecaptcha(){
  const auth = getAuth();
  window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSentOtp();
    console.log('Recaptcha verified')
  }
});
}

const onSentOtp=()=>{
  setupRecaptcha()
      const phoneNumber ='+91' + mobile
    const appVerifier = window.recaptchaVerifier;
    

    const auth = getAuth();
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;
              console.log('otp sent')
              // ...
            }).catch((error) => {
              // Error; SMS not sent
              // ...
              console.log('SMS not sent')
            });
}
// ----------------------------------------------------------------------------
  
  return (
    <DIV>
      <div className='form-side'>
        <div className='header'>
          <Heading>Basic Information</Heading>
        </div>
        <div className="payment-form">

          <form >
            <div className='name-surname'>
              <div className='first-name'>
                <label>FirstName</label>
                <Input type="text"/>
              </div>
              <div className="last-name">
                <label>Last Name</label>
                <Input type="text" />
              </div>
            </div>

            <div className="phone-adress">
              <div className="phone">
                <label>Phone Number</label>
                <Input type="number" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
              </div>
              <div className="email">
                <label>Email Address</label>
                <Input type="email" />
              </div>
            </div>
            <div className="full-adress">
              <label>Full Adress</label>
              <Textarea name="adress"  ></Textarea>
            </div>
            <div className="city-state-zipcode">
              <div className='city'>
                <label>City</label>
                <Input type="text" />
              </div>

              <div className="state">
                <label>State</label>
                <Input type="text" />
              </div>

              <div className="zipcode">
                <label>Zip-code</label>
                <Input type="number" />
              </div>
            </div> 

            <h3 className='pay-head'>Payment Method</h3>
            <div className="payment-type">
              
              <div className="card pay">
                <input type="radio" name='card' value='card' checked={paymentMethod==='card'} onChange={handlePayment}/>
                <label>Card</label>
              </div>
              <div className="upi pay">
                <input type="radio" name='upi' value='upi' checked={paymentMethod==='upi'} onChange={handlePayment}/>
                <label>Upi</label>
              </div>
              <div className="cash pay">
                <input type="radio" name='cash' value='cash' checked={paymentMethod==='cash'} onChange={handlePayment}/>
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
      <div className="amount-side">
        <TableContainer>
          <Table variant='simple'>
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Quantity</Th>
                <Th isNumeric>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Mobile</Td>
                <Td>1</Td>
                <Td isNumeric>200000</Td>
              </Tr>
              
            </Tbody>
            <Tfoot>
              <Tr>
                <Td>Grand Total</Td>
                <Td></Td>
                <Td isNumeric>200000</Td>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </div>
      <div className='payment-method'>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Payment Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

              <Text mt={3}>Card Name</Text>
              <Input type="text"  />
              <Text mt={3}>Card Number</Text>
              <Input type="text"/>
              <Flex className='cvv' gap={2} mt={3}>
                <div>
                <Text>expiry date</Text>
                <Input type="text"/>
                </div>
                <div>
                  <Text>CVV</Text>
                  <Input type='password'/>
                </div>
              </Flex>

            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost' onClick={onSentOtp}>Send OTP</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
      
    </DIV>
  )
}

const DIV=styled.div`
  /* margin: 0px; */
  text-align: left;
  /* background-color: #f4f3e8; */
  display: flex;
  justify-content: space-around;

  .form-side{
    margin: 50px;
    width: 50%;
    border: 2px solid;
  }
  .amount-side{
    margin: 50px;
    width: 30%;
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
`

export default Payment