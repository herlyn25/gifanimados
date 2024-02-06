import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export default function GifApp(){
    const [categories, setCategories]= useState(['Naruto', 'Dragon Ball'])
    
    const onAddCategory=()=>{
       setCategories(["Dragon Zkai",...categories])
    }
    
    return (
    <>
       <AddCategory setCategories = {setCategories} />
       <ol>
        {
            categories.map((category)=> <li key={category}>{category}</li>)
        }
       </ol>
    </>
    )
}