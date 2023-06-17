import React from 'react'
import logo from '../Assets/images/Logo.png'
import home from '../home.css'
const Header = () => {
  return (
    <div className='header_section my-4' id='header_number'>

   <div className='container-fluid header_section_content'>

         <div className='row my-2'>
             <div className='col-sm-12 col-md-2 d-flex logo_row align-items-center'>
             <a className="navbar-brand" href="#">  <img src={logo} className="img-fluid logo_header" alt="brand" /></a>
             <button type="button" className="btn btn-link header_sec_number d-flex d-md-none  ">051 844 2556</button>
             </div>

             <div className='col-sm-12 col-md-10 d-flex justify-content-end align-items-center logo_center'>
             <button type="button" className="btn btn-link header_sec_number d-none d-md-flex ">051 844 2556</button>
         
             <button type="button" className="btn btn-outline-light header_sec_register mx-3">Register Startup</button>
             <button type="button" className="btn btn-lg btn-primary mx-2 header_book_seat" >Book A Seat</button>
           
             </div>

         </div>
   </div>

 

   <div className='header_section_navbar'>
   <hr class="solid navborder"/>

                        <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                           
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link" aria-current="page" href="#">Workspace</a>
                                <a className="nav-link" href="#">Company</a>
                                <a className="nav-link" href="#">Packages</a>
                                <a className="nav-link" href="#">Photo Gallery</a>
                                <a className="nav-link" href="#">Our Blog</a>
                                <a className="nav-link" href="#">Contact us</a>
                       
                            </div>
                            </div>
                        </div>
                        </nav>

   </div>

   
  </div>
  )
}

export default Header
