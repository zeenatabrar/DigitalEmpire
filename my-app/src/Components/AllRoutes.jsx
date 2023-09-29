import { Route,Routes } from "react-router-dom"
import { ProductPage } from "./ProductPage"
import { SingleProductPage } from "./SingleProductPage"
export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<ProductPage/>}/>
            <Route path="/product/:id"element={<SingleProductPage/>}/>
        </Routes>
    )
}