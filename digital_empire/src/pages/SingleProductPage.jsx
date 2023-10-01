import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { Star } from "../components/star";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { PRODUCT_ADDED_TO_CART } from "../Redux/actionTypes";
import { IoIosCart } from "react-icons/io";


const SingleProductPage = () => {
  const { id } = useParams()
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const dispatch = useDispatch()
  const card = useSelector((state) => state.card)
  console.log(card)
  const [data, setData] = useState({})
  const fetch = (id) => {
    axios.get(`https://digital-empire.onrender.com/products/${id}`)
      .then((res) => setData(res.data));
  }
  const handleButtonClick = () => {
    setIsButtonDisabled(true);
    dispatch({ type: PRODUCT_ADDED_TO_CART, payload: data })
  }
  useEffect(() => {
    fetch(id)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(id)
  return (
    <DIV>
      <Container>
        <CenteredImage src={data.image} alt="Your Image" />
      </Container>
      <div className="Detail">
        <p className="name">{data.name}</p>
        <br></br>
        <p style={{ fontSize: "20px" }}><b>M.R.P- ₹{data.price}</b></p>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Star
            rating={data.rating}
          />
        </div>
        <br />
        <p className="information"><i><b>Information</b></i> - {data.info}</p>
        <br />
        <DetailsContainer>
          <DetailsHeading>Details</DetailsHeading>
          <DetailsList>
            {data &&
              data.details &&
              Object.entries(data.details).map(([key, value]) => (
                <DetailItem key={key}>
                  {key} - {value}
                </DetailItem>
              ))}
          </DetailsList>
        </DetailsContainer>
        <ActionButton onClick={handleButtonClick} disabled={isButtonDisabled}>
          <div className="flex">
            <IoIosCart className="cartIcon" /><span>{isButtonDisabled ? 'Added to Cart' : 'Add to Cart'}</span>
          </div>
        </ActionButton>
      </div>
    </DIV>
  )
}
const DIV = styled.div`
width:95%;
margin:auto;
display:flex;
justify-content:space-between;
 .Image{
    width:40%;
    img{
        width:100%
    }
 };
 .Detail{
    width:50%;
    padding-top:20px;
    .name{
      font-size:30px;
      text-align:center
    }
    .rating{
      font-size:20px;
      text-align:center
    }
    .information{
        font-size:20px;
        text-align:center
    };
   
 }
 @media (max-width: 768px) {
    flex-direction: column;

    .Image,
    .Detail {
      width: 100%;
      text-align: center;
    }

    .Image img {
      margin-bottom: 20px;
    }
  }

`
const DetailsContainer = styled.div`

  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const DetailsHeading = styled.h2`
  font-size:30px;
  margin-bottom: 10px;
`;

const DetailsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const DetailItem = styled.li`
  font-size:20px;
  margin-bottom: 5px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  
 
  justify-content: center;
  height: 100vh; /* Set the height of the container */
`;

const CenteredImage = styled.img`
  max-height: 100%; /* Ensure the image doesn't exceed the container's height */
  max-width: 100%; /* Ensure the image doesn't exceed the container's width */
  margin: auto; /* Center the image within the container */
`;
const ActionButton = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  background: #db0c20;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border: none;
  transition: background 0.3s;
  margin-top: 10px;
  max-width: 30rem;

  &:disabled {
    background: #ccc;
    color:black;
    cursor: not-allowed;
  }

  &:active {
    background: #2a0ba8;
  }

  .flex
  {
    display: flex;
    gap: 0.5rem;
  }

  .cartIcon
  {
    position: relative;
    top: 0.25rem;
  }
`
export default SingleProductPage