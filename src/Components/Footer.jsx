import React from 'react'

export default function Footer() {
  return (
    <div style={{backgroundColor:"yellow"}}> <br /><br />
      <div   className='container mt-5 w-100'>
      <div className="d-lg-flex justify-content-between ">
        <div style={{width:'400px'}} className="intro">
          <h5><b style={{color:'black',fontSize:'40px',fontWeight:'bolder'}}><i class="fa-brands fa-slack"></i>Landrick</b>
          </h5>
          Start working with Landrick that can provide <br /> everything you need to generate awareness, <br /> drive traffic, connect.
        </div>
        <div className="links d-flex flex-column ">
          <h5><u>Company</u></h5>
          <li>About us</li>
          <li>Services</li>
          <li>Caeers</li>
          <li>Blog</li>

          </div>
        <div className="guides d-flex flex-column ">
          <h5><u>Useful Links</u></h5>
          <a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'black'}}>Terms of Services</a>
          <a href="https://reactrouter.com/en/main" target='_blank' style={{textDecoration:'none', color:'black'}}>Privacy Policy</a>
          <a href="https://react-bootstrap.github.io/" target='_blank' style={{textDecoration:'none', color:'black'}}>Documentation</a>
        </div>
        <div className="contact d-flex flex-column ">
          <h5>Contact Us</h5>
          <div className="d-flex">
            <input placeholder='Email Id Please' type="text" className='form-control '/>
            <button className='btn btn-info ms-2'><i className='fa-solid fa-arrow-right'></i></button>
          </div>
          <div className='icons d-flex justify-content-between mt-3'>
            <a href="" style={{textDecoration:'none', color:'black'}} target='_blank'>
              <i className='fa-brands fa-twitter'></i>
            </a>
            <a href="" style={{textDecoration:'none', color:'black'}} target='_blank'>
              <i className='fa-brands fa-instagram'></i>
            </a>
            <a href="" style={{textDecoration:'none', color:'black'}} target='_blank'>
              <i className='fa-brands fa-facebook'></i>
            </a>
            <a href="" style={{textDecoration:'none', color:'black'}} target='_blank'>
              <i className='fa-brands fa-linkedin'></i>
            </a>
            <a href="" style={{textDecoration:'none', color:'black'}} target='_blank'>
              <i className='fa-brands fa-github'></i>
            </a>
            <a href="" style={{textDecoration:'none', color:'black'}} target='_blank'>
              <i className='fa-solid fa-phone'></i>
            </a>
          </div>
        </div>
      </div>
        
      
    </div>
    <div style={{backgroundColor:'black',color:'white',width:'100%',height:'60px'}}><p className='text-center mt-5'>Copyright © Jan Batch 2024 Website. Built with React.</p></div>
    </div>
  )
}
