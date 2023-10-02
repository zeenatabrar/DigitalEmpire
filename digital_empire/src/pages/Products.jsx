import { useDispatch, useSelector } from "react-redux";
import { useEffect ,useState} from "react";
import { fetchdata } from "../Redux/action";
import { useSearchParams } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import styled from "styled-components";
import Productcard from "../components/Productcard";
import Loading from "../components/Loading";

const Products = () => {
  const dispatch = useDispatch();
  const product = useSelector((store) => store.productData);
  const count = useSelector((store) => store.page);
  const isLoading = useSelector((store) => store.isLoading);
  const [currentPage, setCurrentPage] =useState(1);
  const [Page] =useState(Math.ceil(count/10));
  
  const [searchParams] = useSearchParams();
  console.log(Math.ceil(count/10))
 
  function decrement() {
    setCurrentPage(currentPage - 1);
  }
  function increment() {
    setCurrentPage(currentPage + 1);
  }
  const paramObj = {
    params: {
      Category: searchParams.getAll("Category"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    }

  }

  useEffect(() => {
    dispatch(fetchdata(currentPage,paramObj));
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage,searchParams]);
  return (
    <DIV>

      <div className="side">
        <Sidebar />
      </div>
      <div className="product">

        {isLoading ? <Loading /> : product.map((item) => (
          <Productcard
            key={item.id}
            {...item}
          ></Productcard>
        ))}

        <br />
        <div>
     <button disabled={currentPage === 1 ? true : false} onClick={decrement}>
        PREVIOUS
      </button>

         <span style={{fontSize:'30px'}}> {` ${currentPage}`}  </span>

        <button disabled={currentPage === Math.ceil(count/10)? true : false} onClick={increment}>
        NEXT
      </button>
    </div>

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
    margin-top: 1.5rem;
    width: 80%;
  }

  @media (max-width: 1240px)
  {
    .side
    {
      width: 30%;
    }
    .product
    {
      width: 70%;
    }
  }

  @media (max-width: 820px) { 
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