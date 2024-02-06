import React from 'react'
import Card from 'react-bootstrap/Card';

const GifItem = ({url, title}) => {
  return (    
    <Card className='mb-2 m-auto' style={{ width: '10rem', height:'20rem', background:"black", color:"red" }}>
      <Card.Img style={{}} variant="top" src={url}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>        
      </Card.Body>      
    </Card>   
  )
}

export default GifItem
