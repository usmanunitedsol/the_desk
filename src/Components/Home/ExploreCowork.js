import React from 'react'
import g1 from "../../Assets/images/Mask group.jpg";
import g2 from "../../Assets/images/Mask group (1).jpg";
import g3 from "../../Assets/images/Mask group (2).jpg";
import  g4 from "../../Assets/images/galary-img1 2.png"

const ExploreCowork = () => {
  return (
<section  id="Exploresection" className="container content_size ExploreCoworksection  text-center">
<div className="row ExploreCoworkrow d-flex align-items-center justify-content-center gx-0">
<h2>Explore the Desk CoWorking Space</h2>
        <p className="my-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore<br/> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br/>  aliquip ex ea commodo consequat. 
        </p>

        <div className='col-sm-12 col-md-3 '> 
        <img src={g1} className="img-fluid " alt="brand" />
      
        </div>

        <div className='col-sm-12 col-md-3 '> 
    
        <img src={g2} className="img-fluid " alt="brand" />
   
        </div>

        <div className='col-sm-12 col-md-3 '> 

        <img src={g3} className="img-fluid " alt="brand" />
     
        </div>

        <div className='col-sm-12 col-md-3'> 
      
        <img src={g4} className="img-fluid " alt="brand" />



        </div>
        <div className='col-sm-12 col-md-3'> 
      
      <img src={g4} className="img-fluid " alt="brand" />


      
      </div>


      <div className='col-sm-12 col-md-3 '> 

<img src={g3} className="img-fluid " alt="brand" />

</div>

<div className='col-sm-12 col-md-3 '> 
    
    <img src={g2} className="img-fluid " alt="brand" />

    </div>

    <div className='col-sm-12 col-md-3 '> 
        <img src={g1} className="img-fluid " alt="brand" />
      
        </div>


        <button type="button" className="btn btn-lg btn-primary mx-2 join_us_home mt-5 " >Explore Gallery</button>
        
</div>
</section>
  )
}

export default ExploreCowork
