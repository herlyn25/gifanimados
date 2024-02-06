import GifItem from "./GifItem"
import useFetchGifs from "../hooks/useFetchGifs"

const GifGrid = ({category}) => {
  const {images, isLoading}= useFetchGifs(category)
  
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