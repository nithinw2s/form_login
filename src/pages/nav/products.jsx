import { useEffect } from "react";
import ResponsiveAppBar from "../../components/navbar";
import Card1 from "../../components/productCard";
import { fetchCardProducts } from "../../redux_slices/cardPdtSlice";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";


function Products() {

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(fetchCardProducts())
    },[dispatch])

    
    // const products = useSelector((state) => state.cardproducts.items[0]);
    // console.log(products)
  


    return ( 
        <>
        <ResponsiveAppBar />
        {/* <h1>This is products page</h1> */}
        <Card1 />
        </> );
}

export default Products;