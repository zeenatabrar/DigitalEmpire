import { useDispatch,useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import { fetchdata } from "./redux/Product/action";
import { Productcard } from "./Productcard";
import { useSearchParams } from "react-router-dom";
import { Sidebar } from "./sidebar";
export const ProductPage=()=>{
   
   
    const dispatch=useDispatch();
    const product = useSelector((state) => state.ProductReducer.Productdata);
    const[searchParams,setSearchParams]=useSearchParams()
    const paramObj={
        params:{
            Category:searchParams.getAll("Category"),
            _sort:searchParams.get("order")&&"price",
            _order:searchParams.get("order"),
        }
            
    }
    
    useEffect(()=>{
       dispatch(fetchdata(paramObj))
    },[searchParams])
    return(
        <DIV>
        <div className="side">
        <Sidebar/>
        </div>
        <div className="product">
        
        {product.map((item)=>(
            <Productcard
            key={item.id}
            {...item}
            ></Productcard>
           
        ))}
    
         <br/>
    
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
