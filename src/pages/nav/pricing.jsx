import ResponsiveAppBar from "../../components/navbar";
import { useDispatch } from 'react-redux';
import { increment, decrement } from "../../features/exampleSlice";

function Pricing() {

    
    const dispatch = useDispatch();
    return ( 
        <>
        <ResponsiveAppBar />
        <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
        <h1>this is pricing page</h1>
        </> );
}

export default Pricing;


