import styled from "styled-components"
import { Button } from '@chakra-ui/react'

import { Card, CardHeader, CardBody, Heading, Text } from '@chakra-ui/react'

const About = () => {
  return (
    <DIV className="about">
      <div className="top-section">
        <div className="image">
          <img src="https://img.freepik.com/premium-photo/futuristic-gadgets-showcase-lineup-sleek-modern-technological-devices_977107-682.jpg" alt="" />
        </div>
        <div className="about-title">
          <Heading>About Us</Heading>
          <p>Welcome to our website. We are a fantastic organization doing amazing things! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae atque cumque mollitia suscipit laborum hic veritatis nostrum dignissimos nobis repellendus quia perspiciatis delectus dicta aliquid blanditiis, ipsa cum molestias.</p>
          <Button colorScheme='blue'>Learn More</Button>
        </div>

      </div>

      <div className="card">
        {/* <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'> */}
        <Card w={400} bg='rgb(131,176,220)' color='white' mx={"auto"}>
          <CardHeader >
            <Heading size='md' textAlign='left' fontSize={32}> 1...</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ab, amet qui dolor sit laboriosam necessitatibus. Ipsam, distinctio! Cumque atque numquam voluptate unde porro, cupiditate facilis amet minus enim exercitationem.</p>
          </CardBody>

        </Card>
        <Card w={400} bg='rgb(229,234,247)' mx={"auto"}>
          <CardHeader>
            <Heading size='md' textAlign='left' fontSize={32} >2...</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores cumque nam sint perferendis atque placeat fugit qui consequatur libero, quae possimus repellat dignissimos impedit obcaecati aliquid dicta modi ipsam!</p>
          </CardBody>

        </Card>
        <Card w={400} bg='rgb(32,68,103)' color='white' mx={"auto"}>
          <CardHeader>
            <Heading size='md' textAlign='left' fontSize={32}> 3...</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus perferendis dolores id labore obcaecati pariatur laborum eaque! Odit impedit commodi nesciunt quasi quo saepe inventore iure et, esse illum totam!</p>
          </CardBody>

        </Card>
        {/* </SimpleGrid> */}
      </div>


      <div className="social-links">
        {/* <Heading>Social Media Links</Heading> */}
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>

    </DIV>

  )
}

const DIV = styled.div`

  text-align: center;
  /* margin: 20px; */
  background-color: #f4f3e8;
  /* background-color: #064ba7; */


.about h1 {
  font-size: 36px;
}

.about p {
  font-size: 18px;
  margin-bottom: 20px;
}

.social-links a {
  display: inline-block;
  margin: 0 10px;
  font-size: 24px;
}
.top-section{
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.top-section img{
  margin: auto;
  margin-top: 30px;
  border-radius: 50%;
  width: 70%;
}

.about-title
{
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (max-width: 800px)
{
  .top-section
  {
    flex-direction: column;
    gap: 1.5rem;
  }
}
.image,.about-title{
  width: 80%;
}
.card{
  display: flex;
  /* flex-direction: column; */
  margin-top: 3rem;
  justify-content: center;
  gap: 1.5rem;
  /* align-items: center; */
}

@media (max-width: 700px)
{
  .card
  {
    flex-direction: column;
    width: 90%;
    margin: auto;
    margin-top: 3rem;
  }
}

.social-links{
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: rgb(32,68,103);
  color: white;
  padding-top: 50px;
  padding-bottom: 50px;
}

`

export default About