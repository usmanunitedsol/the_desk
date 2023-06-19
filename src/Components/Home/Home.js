import React from "react";
import internet from "../Home/home_images/internet.png"
import Conference from "../Home/home_images/Conference.png"
import location2 from "../Home/home_images/location2.png"
import parking from "../Home/home_images/parking-lot.png"

const Home = () => {
  return (
    <>
      <section id="intro-section" className="home_page_banner  text-center">
        <div className="container content_size">
          <div className="row">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <p className="mb-4">
                  Sustainable, Professional & Strategically Located
                </p>
                <h2 className="mb-3">CoWorking Space In Islamabad</h2>
                <p className="mb-4">
                  The Soundest Solution to supplement Your Daily Work Hours.{" "}
                  <br />
                  Join The Desk and Be the Boss of Yourself!
                </p>
                <a
                  className="btn btn-outline-light book_a_tour btn-lg m-2"
                  href="#"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >
                  Book a Tour
                </a>
                <a
                  className="btn btn-outline-light tech_incub btn-lg m-2"
                  href="#"
                  target="_blank"
                  role="button"
                >
                  Tech Incubation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



                    
      <section id="join-section" className="home_page_join-section  text-center" >
        <div className="container content_size">
          <div className="row d-flex align-items-center justify-content-center">
           <h2 >
           Community, Creativity, Comfort & More 
           </h2>
           <p className="my-4">Our mission at TheDesk is to offer the best facilities, amenities and features under one roof. Building a talented community, TheDesk is a professional platform for budding entrepreneurs, long-term freelancers, overtime workers and other types of independent and self-employed workers.<br/><br/>From our own innovation, we have designed a place that not only helps your grow, but gives you a greater value for money than any other coworking space in Pakistan.</p>

           <div className="col-sm-12 col-md-3" >
           <a> <img src={internet} className="img-fluid logo_footer" alt="brand" /></a>
           <p>High Speed Internet</p>
         


           </div>
           <div className="col-sm-12  col-md-3 mt-2" >
           <a> <img src={Conference} className="img-fluid logo_footer" alt="brand" /></a>
           <p>Conference Room</p>


           </div>
        

           <div className="col-sm-12 col-md-3 mt-2" >
           <a> <img src={parking} className="img-fluid logo_footer" alt="brand" /></a>
         
           <p>Huge Parking Space</p>

           </div>
           <div className="col-sm-12 col-md-3 mt-2" >
           <a> <img src={location2} className="img-fluid logo_footer" alt="brand" /></a>
         
           <p>Strategic Location</p>

           </div>

           <button type="button" className="btn btn-lg btn-primary mx-2 join_us_home mt-4 " >Join us now</button>
           </div>
        </div>
      </section>
    </>
  );
};

export default Home;
