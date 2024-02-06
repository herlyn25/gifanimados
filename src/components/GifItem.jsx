import React from 'react'
import Card from 'react-bootstrap/Card';

const GifItem = ({url, title}) => {
  return (    
    <Card className='m-2' style={{ width: '13rem', height:'20rem', background:"black", color:"red", }}>
      <Card.Img style={{height:"70%"}} variant="top" src={url}/>
      <Card.Body>
        <Card.Title style={{height:"30%"}}>{title}</Card.Title>        
      </Card.Body>      
    </Card>   
  )
}

export default GifItem
