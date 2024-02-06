import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export default function GifApp(){
    const [categories, setCategories]= useState(['Naruto', 'Dragon Ball'])    
    const onAddCategory=(newCategory)=>{
        if (categories.includes(newCategory)) return;
        setCategories([...categories,newCategory])        
    }
    return (
    <>
       <AddCategory onNewCategory = {onAddCategory} />
       <ol>
        {categories.map((category)=> <li key={category}>{category}</li>)}
       </ol>
    </>
    )
}