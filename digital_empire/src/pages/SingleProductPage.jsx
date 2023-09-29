import { useParams } from "react-router-dom";
import { styled } from "styled-components";

import { useEffect, useState } from "react";
import axios from "axios";

const SingleProductPage = () => {
  const { id } = useParams()

  const [data, setData] = useState({})
  const fetch = (id) => {
    axios.get(`https://digital-empire.onrender.com/products/${id}`)
      .then((res) => setData(res.data))
  }
  useEffect(() => {
    fetch(id)
    if (data.Category === "Smartphones") {

    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(id)
  return (
    <DIV>
      <div className="Image">
        <img src={data.image} alt="" />
      </div>
      <div className="Detail">
        <p className="name">{data.name}</p>
        <p className="rating">Rating - {data.rating}</p>
        <p className="information">{data.info}</p>
        <p className="name">{data.name}</p>
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
    .name{
      font-size:30px;
      text-align:center
    }
    .rating{
      font-size:20px;
      text-align:center
    }
    .information{
        font-size:15px;
        text-align:center
    }
 }
`
export default SingleProductPage