import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from 'styled-components';

export const Sidebar = () => {
  const [searchParams, setsearchParams] = useSearchParams()
  const [category, setcategory] = useState(searchParams.getAll("Category") || [])
  const [order, setorder] = useState(searchParams.get('order') || "")

  const handlechange = (e) => {
    const { value } = e.target
    let newcategory = [...category]
    if (newcategory.includes(value)) {
      newcategory = newcategory.filter((el) => el !== value)

    }
    else {
      newcategory.push(value)
    }
    setcategory(newcategory)

  }
  const handleorder = (e) => {
    const { value } = e.target
    setorder(value)
  }

  useEffect(() => {
    let params = {
      Category: category,

    }
    order && (params.order = order)

    setsearchParams(params)
  }, [category, order])
  return (
    <Div>
      <CheckboxContainer>
        <p>Category</p>
        <label>
          <CheckboxInput
            type="checkbox"
            value={"Smartphones"}
            onChange={handlechange}
            checked={(category).includes('Smartphones')}
          />
          Smartphones
        </label>
        <br />
        <label>
          <CheckboxInput
            type="checkbox"
            value={"Gaming Smartphones"}
            onChange={handlechange}
            checked={(category).includes('Gaming Smartphones')}
          />
          Gaming Smartphones
        </label>
        <br />
        <label>
          <CheckboxInput
            type="checkbox"
            value={"Laptops"}
            onChange={handlechange}
            checked={(category).includes('Laptops')}
          />
          Laptops
        </label>
        <br />
        <CheckboxLabel>
          <CheckboxInput
            type="checkbox"
            value={"Gaming Laptops"}
            onChange={handlechange}
            checked={(category).includes('Gaming Laptops')}
          />
          Gaming Laptops
        </CheckboxLabel>
        <br />
        <label>
          <CheckboxInput
            type="checkbox"
            value={"Earphones"}
            onChange={handlechange}
            checked={(category).includes('Earphones')}
          />
          Earphones
        </label>
        <br />
        <label>
          <CheckboxInput
            type="checkbox"
            value={"Smartwatches"}
            onChange={handlechange}
            checked={(category).includes('Smartwatches')}
          />
          Smartwatches
        </label>
        <br />
        <label>
          <CheckboxInput
            type="checkbox"
            value={"Smart TVs"}
            onChange={handlechange}
            checked={(category).includes('Smart TVs')}
          />
          Smart TVs
        </label>
      </CheckboxContainer>


      <RadioContainer>
        <p>Sort by Price</p>
        <label>
          <RadioInput
            type="radio"
            name="order"
            value={"asc"}
            onChange={handleorder}
            defaultChecked={order === "asc"}
          />
          Low to High
        </label>
        <br />
        <label>
          <RadioInput
            type="radio"
            name="order"
            value={"desc"}
            onChange={handleorder}
            defaultChecked={order === "desc"}
          />
          High to Low
        </label>
        <br />
        <label>
          <RadioInput
            type="radio"
            name="order"
            value={""}
            onChange={handleorder}
            defaultChecked={order === ""}
          />
          Reset
        </label>
      </RadioContainer>




    </Div>

  )
}

const Div = styled.div`
    text-align:center;
    padding:30px;
`
const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin-top: 20px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    cursor: pointer;

    input[type="radio"] {
      margin: 0 8px 0 0;
    }
  }
`;

const RadioInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  border-radius: 50%;
  cursor: pointer;

  &:checked {
    background-color: #000;
  }
`;
const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin-bottom: 10px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    cursor: pointer;

    input[type="checkbox"] {
      margin: 0 8px 0 0;
    }
  }
`;

const CheckboxInput = styled.input`
  appearance: none;
  text-align:center;
  width: 20px;
  height: 20px;
  border: 2px solid #111010;
  border-radius: 4px;
  cursor: pointer;

  &:checked {
    background-color: #a26e6e;
  }
`;

const CheckboxLabel = styled.label`
  font-size: 16px;
`;