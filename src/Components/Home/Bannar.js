import React from 'react'

const Bannar = () => {
  return (
    <div>
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
    </div>
  )
}

export default Bannar
