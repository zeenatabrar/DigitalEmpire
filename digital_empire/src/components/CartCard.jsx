import styled from "styled-components"
import { Link } from "react-router-dom"
import { Star } from "./star"
import { useEffect, useState } from "react"
import { IconButton,Input,InputRightElement,InputLeftElement,InputGroup, Button } from "@chakra-ui/react"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"

const  CartCard = ({ id, image, name, price, removeProduct, setQuantity, quantity, index }) => {
  price = price.toLocaleString("en-In");
  return (
    <><DIV>
        <img src={image} alt="" className="image"/>
        <div className="col-flex">
          <div><p className="name">{name}</p></div>
          <div><h3>₹ {price}</h3></div>
          <InputGroup>
          <InputLeftElement>
            <IconButton 
            ml={1} 
            colorScheme="blue"
            icon={<MinusIcon/>}
            onClick={()=>{
              if(quantity[index] > 1)
              {
                setQuantity((prev)=> prev.map((el,ind)=>ind===index ? el-1 : el));
              }
            }}
            >
            </IconButton>
          </InputLeftElement>
          <Input value={quantity[index]} textAlign={"center"} mx="auto" />
          <InputRightElement>
          <IconButton 
              mr={1} 
              colorScheme="blue"
              icon={<AddIcon/>}
              onClick={()=>{
                setQuantity((prev)=> prev.map((el,ind)=>ind===index ? el+1 : el));
              }}
            >
            </IconButton>
          </InputRightElement>
          </InputGroup>
          <Button bgColor={"red.500"} onClick={()=>removeProduct(id)} mx="auto" w="40%">Remove</Button>
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
    @media (max-width: 768px) {
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

// import styled from "styled-components"
// import { Link } from "react-router-dom"
// import { Star } from "./star"
// import { useEffect, useState } from "react"
// const  CartCard = ({ id, image, name, price,quantity, removeProduct, buyProducts, handleDecClick,handleIncClick }) => {
   
//   price = price.toLocaleString("en-In");
//   return (
//     <><DIV>
//           <img src={image} alt="" />
//         <p className="name">{name}</p>
        
//         <br></br>
    
//             <button onClick={() => handleDecClick(id)}>-</button>
//             <span>{quantity}</span>
//             <button onClick={() => handleIncClick(id)}>+</button>
           
//         <h3>₹ {price}</h3>
//         <br />
//         <button onClick={buyProducts}>Buy</button>
//         <br />
//         <button onClick={removeProduct}>Remove</button>
    
//     </DIV >
//     </>
//   )
// }

// const DIV = styled.div`
//     display:flex;
//     width:100%;
//     height:400px;
//     margin-bottom:1.5rem;
//     gap: 2rem;
//     box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
//     .img{
//       width:30%;
//       margin-top: auto;
//       margin-bottom: auto;
//       padding:10px;
//       img{
//         max-width: 100%;
//         max-height: 300px; /* Added maximum height */
//         object-fit: cover;
//         border-radius: 10px;
//         margin: auto;
//         /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); */
//       }
//       &:hover {
//       transform: scale(1.1); /* Increase size on hover */
//      }
//     }
//     .detail{
//      width:60%;
//      padding-left:30px;
//      margin-top: auto;
//      margin-bottom: auto;
//       .name{
//         font-size:30px
//       }
//       h3{
//         font-size:30px
//       }
//     }
//     @media (max-width: 768px) {
//     flex-direction: column;
//     height:auto;
//     .img,
//     .detail {
//       width: 100%;
//       height:auto;
//     }

//     .img img {
      
//       max-width: 100%;
//        max-height: 300px;
//     }
//   }

//   @media (max-width: 576px) {
//     .detail {
//       padding-left: 0;
//     }
//   }
// `;

// export default CartCard;





