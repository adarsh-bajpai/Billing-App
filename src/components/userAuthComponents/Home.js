import React from 'react'
import {Carousel} from 'react-bootstrap'
import Bill1 from './Bill1.jpg'
import Bill2 from './Bill2.jpg'
import images from './images.jpg'
import './NavBar.css'

const Home = (props) => {

    return (
        <div style={{margin:"30px 30px"}}>  
        <Carousel controls={false} fade={true} pause={true}>
  <Carousel.Item interval={2000}>
    <img 
      className="d-flex w-100"
      height="600px"
      src={Bill1}
      alt="First slide"
    />
    <Carousel.Caption>
      
      <h3 style={{color:"grey"}}>Are You looking for Some Trade ..??</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img 
    className="d-flex w-100"
       height="600px" 
      src={images}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 style={{color:"grey"}}>Are you Ready to Calculate your Expense..??</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
       className="d-flex w-100 "
       height="600px"
      src={Bill2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style={{color:"grey"}}> Dont Be Late Register Now!!!</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       </div>
    )
}
export default Home