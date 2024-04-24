import React from 'react'
import Card from 'react-bootstrap/Card';
import './Model.css'

export default function Cards() {
  return (
    <div>
      <div className='rowg'>
      <Card style={{ width: '18rem' }} className='z'>
      <Card.Body>
        <Card.Title><i class="fa-solid fa-laptop"></i>Fully Responsive</Card.Title>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}  className='z'>
      <Card.Body>
        <Card.Title><i class="fa-solid fa-heart"></i>Browser Compatibility</Card.Title>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}  className='z'>
      <Card.Body>
        <Card.Title><i class="fa-solid fa-eye"></i>Retina Ready</Card.Title>
        
      </Card.Body>
    </Card>
    </div><br />

    <div className='rowf'>
      <Card style={{ width: '18rem' }}  className='z'>
      <Card.Body>
        <Card.Title><i class="fa-solid fa-gear"></i>Easy to customize</Card.Title>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}  className='z'>
      <Card.Body>
        <Card.Title><i class="fa-solid fa-feather-pointed"></i>Feather Icons</Card.Title>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}  className='z'>
      <Card.Body>
        <Card.Title><i class="fa-solid fa-house"></i>W3c Valid Code</Card.Title>
        
      </Card.Body>
    </Card>
    </div>
    </div>
    
  )
}
