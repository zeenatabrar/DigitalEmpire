import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
// import { Alert,AlertIcon,AlertTitle,AlertDescription } from '@chakra-ui/react'
import { Textarea, useToast, Button, Text, Input } from '@chakra-ui/react'

const initial_data = {
  fname: '',
  lname: '',
  email: '',
  message: ''
}

const Contact = () => {
  const [data, setData] = useState(initial_data)
  const { fname, lname, email, message } = data;

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const postMessage = (data) => {
    return axios.post("https://65152628dc3282a6a3cdeb86.mockapi.io/messages", data);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (fname !== '' && lname !== '' && email !== '' && message !== '') {
      postMessage(data).then((res) => {
        function al() {
          toast({
            title: 'Successfully Done',
            description: "Successfully sent message !",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
        al()
        setData({ ...initial_data })
      })
    }
    else {
      function al() {
        toast({
          title: 'Fill all the fields',
          description: "Some fields are empty !",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
      al()
    }
  }


  // useEffect(()=>{

  //     getMessage()
  // },[data])

  return (
    <DIV>
      <div className="contact-text">
        <Text fontSize={"x-large"} mb={3}>Contact Us</Text>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate natus ex, nam laudantium culpa quos, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis natus quidem dolorum blanditiis. Quas eligendi culpa molestiae numquam sed ratione vel. Nobis molestiae eos iste consectetur eaque quidem velit mollitia.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum modi et atque quaerat, expedita odio nam impedit nobis ex quod nemo? Minus soluta doloribus, amet veniam provident animi optio accusamus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nulla amet! Quam laboriosam dicta repellendus molestias, suscipit sapiente adipisci excepturi, animi deserunt saepe aut cumque debitis placeat et reprehenderit consequuntur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere natus ratione sed asperiores inventore, autem suscipit. Porro voluptate dolore possimus, ea placeat totam optio dolorum? Deserunt cupiditate consequuntur suscipit inventore!</p>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className='name'>
            <Input type="text" placeholder="First Name" name='fname' value={fname} onChange={handleChange} />
            <Input type="text" placeholder="Last Name" name='lname' value={lname} onChange={handleChange} />
          </div>
          <div className='email'>
            <Input type="email" placeholder="Email" name='email' value={email} onChange={handleChange} />
          </div>
          <div className='message'>
            <Textarea border={"1px solid black"} type="text" placeholder="What can we help you" name='message' value={message} onChange={handleChange} />
          </div>
          <div className='button'>
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </DIV>
  )
}

const DIV = styled.div`
padding: 2.5rem;
display: flex;
align-items: center;
gap: 100px;
background-color: #f4f3e8;

.contact-text{
    width: 60%;
}
.contact-text h1{
    border-bottom: 1px solid;
}
.contact-form{
  display: flex;
  flex-direction: column;
  width: 40%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 15px;
  padding-bottom: 2rem;
  gap: 1.5rem;
  align-items: center;
}
form{
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 20px;
    height: 300px;
    width: 90%;
    input
    {
      border: 1px solid black;
    }
}
.name{
    display: flex;
    gap: 20px;
}
.name input{
    width: 100%;
    height: 25px;
    font-size: 100%;
}
.email input{
    width: 100%;
    height: 25px;
    font-size: 100%;
}
.message textarea{
    width: 100%;
    height: 100px;
    font-size: 15px;
}
.button{
    margin: auto;
}
.button button{
    width: 200px;
    border: none;
    height: 40px;
    background-color: #04045e;
    color: white;
    font-size: 100%;
}
.button button:hover{
    cursor: pointer;
}

@media (max-width: 900px)
{
  flex-direction: column;
  .contact-form
  {
    width: 70%;
  }
}
`

export default Contact;