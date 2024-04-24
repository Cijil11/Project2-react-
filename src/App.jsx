import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/Header';
import bgImg from './assets/marketing.png';
import Cards from './Components/Cards';
import Footer from './Components/Footer';


function App() {

  return (
    <>
    <Header/>
      <div className='p' >
      <img src={bgImg} alt=""  className='bgi'/>
     

      <h1 ><br />Social Media Marketing is the <br /> Best Ever</h1>
      <h5>Launch your campaign and benefit from our expertise on designing and <br /> managing conversion centered bootstrap v5 html page.</h5><br /><br />
      <button className='btn2 btn-info'>Get Strated</button>
      <button className='btn2 '><i class="fa-solid fa-phone"></i>Contact Us</button>
 <br /><br />


<div style={{backgroundColor:'white'}}><hr className='hh' /><br />
  <span className='st'>Amazon</span>
  <span className='st'>Google</span>
  <span className='st'><i class="fa-solid fa-money-check-dollar"></i>PayPal</span>
  <span className='st'><i class="fa-brands fa-spotify"></i>Spotify</span>
  <span className='st'>Lenovo</span>
  <span className='st'><i class="fa-brands fa-shopify"></i>Shopify</span><br /><br /> 
<hr className='hh' />
</div>
</div><br /><br />

<div style={{textAlign:'center'}} ><br /><br />
  <h1 style={{fontFamily:'cursive'}}>Sample Features</h1><br />
  <p>Start working with Landrick that can provide everything you need to generate <br /> awareness, drive traffic, connect.</p><br /><br />
  
  <Cards/><br /><br />
  <button className='btn btn-success'>See More</button>
  <br /><br /><br />


</div>
<div className='row' id='paging'>
<div className='col-6'>
<img src={bgImg} alt=""  className='bgim'/>

</div>
<div className='col-6'>
<h1 style={{fontFamily:'cursive'}}>A better compose with landrick <br />  marketing</h1><br />
<p >You can combine all the Landrick templates into a single one, you can take a <br /> component from the Application theme and use it in the Website.</p><br />
<p style={{fontFamily:'fantasy'}}>*Digital Marketing Solutions for Tomorrow <br /> </p>
<p style={{fontFamily:'fantasy'}}>*Our Talented & Experienced Marketing Agency <br /> </p>
<p style={{fontFamily:'fantasy'}}>*Create your own skin to match your brand <br /> </p>
<br /><br />
</div>
</div>
<div style={{textAlign:'center'}} ><br /><br />
  <h1 style={{fontFamily:'cursive'}}>Get Started !</h1><br />
  <p>Start working with Landrick that can provide everything you need to generate <br /> awareness, drive traffic, connect.</p><br /><br />
  <button className='btn btn-success'>BUY NOW..</button> &nbsp;&nbsp;
  <button className='btn btn-warning'><i class="fa-solid fa-video"></i>Watch Now</button><br /><br />

  
  <br /><br /><br />


</div>
<Footer/>
    
    </>
  )
}

export default App
