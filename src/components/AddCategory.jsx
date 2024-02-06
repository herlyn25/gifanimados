import { useState } from "react"
import { Form } from "react-bootstrap"

export const AddCategory=({onNewCategory})=>{
    
    const [inputValue, setInputValue] = useState("")
   
    const onInputChange = ({target}) =>{
        setInputValue(target.value)        
    }
    const onInputSubmit=(event)=>{
        event.preventDefault()   
        if (inputValue.trim().length <=1) return;     
        onNewCategory(inputValue)       
        setInputValue("")
        
    }
    return (
        <Form onSubmit={onInputSubmit}>
            <Form.Label htmlFor="category"> Categorias</Form.Label>
            <Form.Control style={{width:"400px"}} minLength={2} onChange={onInputChange} value={inputValue} type="text" id="category" placeholder="Digita categoria"/>
        </Form>        
    )
}