import { useState } from "react"
import { Form } from "react-bootstrap"
export const AddCategory=({setCategories})=>{
    const [inputValue, setInputValue] = useState("")
   
    const onInputChange = ({target}) =>{
        setInputValue(target.value)
        
    }
    const onInputSubmit=(event)=>{
        event.preventDefault()        
        setCategories(categories=>[inputValue,...categories])       
        setInputValue("")
        
    }
    return (
        <Form onSubmit={onInputSubmit}>
            <Form.Label htmlFor="category"> Categories</Form.Label>
            <Form.Control style={{width:"400px"}} minLength={2} onChange={onInputChange} value={inputValue} type="text" id="category" placeholder="Digita categoria"/>
        </Form>

        
    )
}