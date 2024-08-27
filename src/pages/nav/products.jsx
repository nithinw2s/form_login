import ResponsiveAppBar from "../../components/navbar";
import { useDispatch } from 'react-redux';
import { increment, decrement } from "../../redux_slices/exampleSlice";

function Products() {

    
    const dispatch = useDispatch();
    return ( 
        <>
        <ResponsiveAppBar />
        <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
        <h1>this is products page</h1>
        </> );
}

export default Products;