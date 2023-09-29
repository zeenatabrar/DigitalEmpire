import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
// import { Alert,AlertIcon,AlertTitle,AlertDescription } from '@chakra-ui/react'
import { Textarea, useToast, Button } from '@chakra-ui/react'

const initial_data = {
  fname: '',
  lname: '',
  email: '',
  message: ''
}

const Contact = () => {
  const [data, setData] = useState(initial_data)
  const { fname, lname, email, message } = data
  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => {
      return { ...prev, [name]: value }
    })
  }

  // const getMessage=()=>{
  //     axios.get(https://65152628dc3282a6a3cdeb86.mockapi.io/messages)
  //     .then((res)=>{console.log(res.data)})
  //     .catch((err)=>{console.log(err)})
  // }

  // console.log(data)

  const postMessage = (data) => {
    return axios.post("https://65152628dc3282a6a3cdeb86.mockapi.io/messages", data);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (fname != '' && lname != '' && email != '' && message != '') {
      postMessage(data).then((res) => {
        alert('Successfully submitted')
        setData({ ...initial_data })
      })
    }
    else {
      alert('Fill all the Fields')
    }
  }

  // useEffect(()=>{

  //     getMessage()
  // },[data])

  return (
    <DIV className="contact-main">
      <div className="contact-text">
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate natus ex, nam laudantium culpa quos, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis natus quidem dolorum blanditiis. Quas eligendi culpa molestiae numquam sed ratione vel. Nobis molestiae eos iste consectetur eaque quidem velit mollitia.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum modi et atque quaerat, expedita odio nam impedit nobis ex quod nemo? Minus soluta doloribus, amet veniam provident animi optio accusamus.</p>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className='name'>
            <input type="text" placeholder="First Name" name='fname' value={fname} onChange={handleChange} />
            <input type="text" placeholder="Last Name" name='lname' value={lname} onChange={handleChange} />
          </div>
          <div className='email'>
            <input type="email" placeholder="Email" name='email' value={email} onChange={handleChange} />
          </div>
          <div className='message'>
            <Textarea type="text" placeholder="What can we help you" name='message' value={message} onChange={handleChange} />
          </div>
          <div className='button'>
            <button>Submit</button>
          </div>
        </form>
      </div>

    </DIV>
  )
}

const DIV = styled.div`
margin: 170px;
display: flex;
align-items: center;
/* background-color: #f4f3e8; */

gap: 100px;
.contact-text{
    width: 60%;
}
.contact-text h1{
    border-bottom: 1px solid;
}
.contact-form{
    width: 40%;
}
form{
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 20px;
    height: 300px;
    width: 90%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
`

export default Contact;