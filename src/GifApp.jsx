import { useState } from "react";
import { AddCategory, GifGrid } from "./components/index";

export default function GifApp(){
    const [categories, setCategories]= useState(['Naruto'])    
    const onAddCategory=(newCategory)=>{
        if (categories.includes(newCategory)) return;
        setCategories([newCategory,...categories])        
    }
    return (
    <div className="align-content-align-items-center">
       <AddCategory onNewCategory = {onAddCategory} />    
            {categories.map((c)=>
                <GifGrid key={c} category = {c} />
            )}                 
    </div>
    )
}