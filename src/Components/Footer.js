import React from "react";
import logo1 from '../Assets/images/Logo (1).png'
import logo_fb from '../Assets/images/Facebook.png'
import logo_intsa from '../Assets/images/Instagram.png'
import logo_linkdin from '../Assets/images/Linkedin.png'

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start text-white footer_web">
        <div className="content_size">

       
        <section className="container d-flex justify-content-center justify-content-lg-between footer_section p-4 ">
        

         
          <div className="me-5 d-none d-lg-flex align-items-center">
            <span className="footer_location d-flex align-items-center">Lower Ground, Plot 349, Street 1, I-9/3, Islamabad, Pakistan</span>
          </div>

          <div className="d-flex align-items-center">
          <button type="button" className="btn btn-link header_sec_number d-none d-md-flex ">+ 92 51 8442556</button>
         
         <button type="button" className="btn btn-outline-light footer_req mx-3">Request A Call</button>
          </div>
        </section>

        <hr className="container"/>

        <section className="footer_section ">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-5 col-lg-5 col-xl-5 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                <a> <img src={logo1} className="img-fluid logo_footer" alt="brand" /></a>
                </h6>
                <p>
                Our mission at TheDesk is to offer the best facilities, amenities and features under one roof. Building a talented community, TheDesk is a professional platform for budding entrepreneurs, long-term freelancers, overtime workers.
                </p>
              </div>

              <div className="col-md-2 text_styling col-lg-2 col-xl-2 mx-auto mb-4">
                <p className="text-uppercase  mb-4">Company</p>
                <p>
                  <a href="#!" className="text-reset">
                    Workspace
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                   About
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                   Packages
                  </a>
                </p>
              </div>

              <div className="col-md-2 col-lg-2 text_styling col-xl-2 mx-auto mb-4">
               
                <p className="mt-5 ">
                  <a href="#!" className="text-reset ">
                   Photo Gallery
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Blog
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                   Contact
                  </a>
                </p>
              
              </div>

              <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <p className="text-uppercase  mb-4">Follow Us on</p>
                        <div className="social_icons">
                        <a> <img src={logo_fb} className="img-fluid logo_fb" alt="brand" /></a>
                        <a> <img src={logo_intsa} className="img-fluid logo_intsa" alt="brand" /></a>
                        <a> <img src={logo_linkdin} className="img-fluid logo_linkdin" alt="brand" /></a>
                        </div>
              </div>
            </div>
          </div>
        </section>

             <hr className="container"/>
        <div className="container footer_section  p-4 d-flex justify-content-between">        
           <p>
            Copyright © 2022 TheDesk. All rights reserved.
            </p>
            <p>
            Design & Developed by Unitedsol
            </p>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
