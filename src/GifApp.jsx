import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
export default function GifApp(){
    const [categories, setCategories]= useState(['Dragon Ball'])    
    const onAddCategory=(newCategory)=>{
        if (categories.includes(newCategory)) return;
        setCategories([...categories,newCategory])        
    }
    return (
    <div>
       <AddCategory onNewCategory = {onAddCategory} />       
       
            {categories.map((c)=>
                <GifGrid key={c} category = {c} />
            )}   
               
    </div>
    )
}