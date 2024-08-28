import { render, screen } from "@testing-library/react"
import Sample from "../components/sample";

test('check the component loaded', () => { 
    // step for element loaded
    render(<Sample />);
    expect(screen.queryByText(/Test/)).toBeInTheDocument(); 
 })