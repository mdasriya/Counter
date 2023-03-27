import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Counter from "./components/Counter"



// Counter test 
describe("Test The Counter Component", ()=> {
    it("counter should render",()=> {
      render(<Counter />)
      const text = screen.getByTestId("counter")
      const button = screen.getByTestId("add")
     
  
      expect(text).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });

    it("it Should have initialValue 0",()=>{
        render(<Counter />)
        const text = screen.getByTestId("counter")
        screen.debug();
        expect(text).toHaveTextContent("0")
    })

    it("onClicking add count value should increase",()=>{
        render(<Counter />)
        const text = screen.getByTestId("counter") 
        expect(text).toHaveTextContent

        const addBtn = screen.getByTestId("add") 
        fireEvent.click(addBtn)
        
        expect(text).toHaveTextContent("5") 

        fireEvent.click(addBtn)
        expect(text).toHaveTextContent("10") 
    })
  })