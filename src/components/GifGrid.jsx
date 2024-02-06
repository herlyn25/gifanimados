import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
import GifItem from "./GifItem"

const GifGrid = ({category}) => {
  const [images, setImages]= useState([]) 
  const getImages = async () =>{
    const newImages = await getGifs(category)
    setImages(newImages)    
  }

  useEffect(()=>{ 
    getImages()    
  },[])
  
  return (
      <>
        <h1>{category}</h1>       
              
            <div className="row">
              {images.map( image =>(
                <GifItem key={image.id} {...image} />
              ))  } 
            </div>           
              
      </>
    )
  }

export default GifGrid