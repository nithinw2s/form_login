import ResponsiveAppBar from "../../components/navbar";
import { useDispatch } from 'react-redux';

function Pricing() {

    
    const dispatch = useDispatch();
    return ( 
        <>
        <ResponsiveAppBar />
        <h1>this is pricing page</h1>
        </> );
}

export default Pricing;


