import ResponsiveAppBar from "../../components/navbar";
import { useDispatch } from 'react-redux';
import { increment, decrement } from "../../features/exampleSlice";

function Blog() {

    const dispatch = useDispatch();
    return ( 
        <>
        <ResponsiveAppBar />
        <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
        <h1>this is blog page</h1>
        </>
     );
}

export default Blog;