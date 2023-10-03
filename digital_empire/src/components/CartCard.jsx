import styled from "styled-components"
import { IconButton, Input, InputRightElement, InputLeftElement, InputGroup, Button } from "@chakra-ui/react"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"

const CartCard = ({ id, image, name, price, quantity, removeProduct, handleDecClick, handleIncClick }) => {
  let pr = (price.replace(/,/g, '') * quantity)
  pr = pr.toLocaleString("en-In");

  return (
    <><DIV>
      <img src={image} alt="" className="image" />
      <div className="col-flex">
        <div><p className="name">{name}</p></div>
        <div><h3>₹ {pr}</h3></div>
        <InputGroup>
          <InputLeftElement>
            <IconButton
              ml={1}
              colorScheme="blue"
              icon={<MinusIcon />}
              onClick={() => {
                if (quantity > 1) {
                  handleDecClick(id);
                }
              }}
            >
            </IconButton>
          </InputLeftElement>
          <Input value={quantity} textAlign={"center"} mx="auto" />
          <InputRightElement>
            <IconButton
              mr={1}
              colorScheme="blue"
              icon={<AddIcon />}
              onClick={() => {
                if (quantity < 3) {
                  handleIncClick(id);
                }
              }}
            >
            </IconButton>
          </InputRightElement>
        </InputGroup>
        <Button bgColor={"red.500"} onClick={() => removeProduct(id)} mx="auto" w="40%">Remove</Button>
      </div>
    </DIV >
    </>
  )
}

const DIV = styled.div`
  .image
  {
    width: 15rem;
    height: 12rem;
  }

  @media (max-width: 600px)
  {
    .image
    {
      margin: auto;
    }
  }
  .col-flex
  {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: auto;
    margin-bottom: auto;
  }
  padding-right: 1rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
  border-radius: 15px;
    display:flex;
    width:100%;
    margin-bottom:1.5rem;
    gap: 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    .img{
      width:30%;
      margin-top: auto;
      margin-bottom: auto;
      padding:10px;
      img{
        max-width: 100%;
        max-height: 300px; /* Added maximum height */
        object-fit: cover;
        border-radius: 10px;
        margin: auto;
        /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); */
      }
      &:hover {
      transform: scale(1.1); /* Increase size on hover */
     }
    }
    .detail{
     width:60%;
     padding-left:30px;
     margin-top: auto;
     margin-bottom: auto;
      .name{
        font-size:30px
      }
      h3{
        font-size:30px
      }
    }
    @media (max-width: 980px) {
    flex-direction: column;
    height:auto;
    .img,
    .detail {
      width: 100%;
      height:auto;
    }

    .img img {
      
      max-width: 100%;
       max-height: 300px;
    }
  }

  @media (max-width: 576px) {
    .detail {
      padding-left: 0;
    }
  }
`;

export default CartCard;