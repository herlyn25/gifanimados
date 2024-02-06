import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
export default function GifApp(){
    const [categories, setCategories]= useState(['Naruto', 'Dragon Ball'])    
    const onAddCategory=(newCategory)=>{
        if (categories.includes(newCategory)) return;
        setCategories([...categories,newCategory])        
    }
    return (
    <>
       <AddCategory onNewCategory = {onAddCategory} />       
       {categories.map((c)=><GifGrid category = {c} /> )}
       
    </>
    )
}