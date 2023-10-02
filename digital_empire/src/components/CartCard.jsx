import styled from "styled-components"
import { Link } from "react-router-dom"
import { Star } from "./star"
import { useEffect, useState } from "react"
const  CartCard = ({ id, image, name, price, removeProduct, buyProducts,  }) => {

  price = price.toLocaleString("en-In");
  return (
    <><DIV>
          <img src={image} alt="" />
        <p className="name">{name}</p>
        <br></br>
        {/* <div>
            <button onClick={() => handleDecClick(quantity)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => handleIncClick(quantity)}>+</button>
           </div> */}
        <h3>₹ {price}</h3>
        <br />
        <button onClick={buyProducts}>Buy</button>
        <br />
        <button onClick={removeProduct}>Remove</button>
    
    </DIV >
    </>
  )
}

const DIV = styled.div`
    display:flex;
    width:100%;
    height:400px;
    margin-bottom:1.5rem;
    gap: 2rem;
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





