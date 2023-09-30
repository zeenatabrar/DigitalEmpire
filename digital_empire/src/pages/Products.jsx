import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import { addToCart, fetchdata } from "../Redux/action";

import Productcard from "../components/Productcard";
import { useSearchParams } from "react-router-dom";
import { FaStar } from "react-icons/fa"
import { Star } from "../components/star";
import { Sidebar } from "../components/Sidebar";

const Products = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.Productdata);
  const [searchParams] = useSearchParams()
  const paramObj = {
    params: {
      Category: searchParams.getAll("Category"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    }

  }

  const handleClick =(el)=>{
    dispatch(addToCart(el))
  }

  useEffect(() => {
    dispatch(fetchdata(paramObj));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])
  return (
    <DIV>
     
      <div className="side">
        <Sidebar />
      </div>
      <div className="product">

        {product.map((item) => (
          <Productcard
            key={item.id}
            {...item}
           handleClick={()=>handleClick(item)}
          ></Productcard>

        ))}

        <br />

      </div>

    </DIV>
  )
}
const DIV = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  
  .side {
    padding: 20px;
    width: 20%;
  }
  
  .product {
    width: 75%;
  }

  @media (max-width: 768px) { 
    flex-direction: column; 
    align-items: center;
    text-align: center; 
    .side, .product {
      width: 100%; 
      padding: 10px; 
    }
  }

  @media (max-width: 576px) { // Small screen size
    .side, .product {
      width: 100%; 
      padding: 10px; 
    }
  }
`;

export default Products;