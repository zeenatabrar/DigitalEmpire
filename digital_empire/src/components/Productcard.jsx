import styled from "styled-components"
import { Link } from "react-router-dom"
import { Star } from "./star"
const Productcard = ({ id, image, name, rating, price }) => {
  return (
    <><DIV>
      <div className="img">
        <Link to={`/product/${id}`}>
          <img src={image} alt="" />
        </Link>
      </div>
      <div className="detail">
        <p className="name">{name}</p>
        <br></br>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Star 
        rating={rating}
        />
        </div>
        <br></br>
        <h3>M.R.P:-{price}</h3>
      </div>
    </DIV >
    </>
  )
}
const DIV = styled.div`
    display:flex;
    width:100%;
   
    margin-bottom:20px;
    .img{
      width:30%;
      
      padding:10px;
      img{
        width:70%;
        height:300px;
        margin: auto;
      }
    }
    .detail{
     width:60%;
     padding-left:30px;
      .name{
        font-size:30px
      }
    }
    @media (max-width: 768px) {
    flex-direction: column;

    .img,
    .detail {
      width: 100%;
    }

    .img img {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 576px) {
    .detail {
      padding-left: 0;
    }
  }
`;

export default Productcard;