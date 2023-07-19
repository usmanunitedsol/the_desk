import React from 'react'
import validwhite1 from "../../Assets/images/valid-white1.png";
import freelance21Room from "../../Assets/images/freelance21.png";
import Videoimg from "../../Assets/images/Video.png";

const BenefitsDesk = () => {
  return (
    <section  id="BenefitsDesksection" className="container content_size BenefitsDesksection  text-center">

                 <div className="row BenefitsDesksrow d-flex align-items-center justify-content-center">

                    <img src={Videoimg} className='img-fluid videoimg' alt='video'/>
                 <div className="col-sm-12  col-md-4 BenefitsDeskcol1 ">
                       <p className='textGreen'>Benefits</p>
                       <h2 className='benefitsh1' style={{color:'white'}}>Benefits of Joining The Desk</h2>
                       <p style={{color:'white'}} className='my-4'>At The Desk you don’t have to pay any upfront fees, no deposits, or any other hidden charges. You start working the second you walk in.</p>

                       <button type="button" className="btn btn-lg btn-primary  ScheduleMyTour my-4 " >Schedule My Tour</button>
                  </div>


                   <div className="col-sm-12  col-md-3 BenefitsDeskcol2 ">
                    <div className='d-flex align-items-center'>
                    <img src={freelance21Room} className="img-fluid " alt="brand" />
                    <p className='mx-2 '>Dedicated desk</p>
                    </div>
                     <p className='text-start my-2'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur deserunt mollit anim id est laborum.</p>

                     <div className='d-flex align-items-center mt-4'>
                    <img src={validwhite1} className="img-fluid " alt="brand" />
                    <p className='mx-2 '>Flexible Payment Plans</p>
                    </div>
                     <p className='text-start my-2'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur deserunt mollit anim id est.</p>
                    </div>


                    <div className="col-sm-12  col-md-3 BenefitsDeskcol3">
                    <div className='d-flex align-items-center '>
                    <img src={freelance21Room} className="img-fluid " alt="brand" />
                    <p className='mx-2 '>Build Business Connections</p>
                    </div>
                     <p className='text-start my-2'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur deserunt mollit anim id est laborum.</p>

                     <div className='d-flex align-items-center mt-4 '>
                    <img src={validwhite1} className="img-fluid " alt="brand" />
                    <p className='mx-2 '>No Membership fee</p>
                    </div>
                     <p className='text-start my-2'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur deserunt mollit anim id est.</p>
                    </div>
      </div>
    </section>
  )
}

export default BenefitsDesk
