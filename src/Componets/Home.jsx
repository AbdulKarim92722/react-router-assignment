import React from 'react';
import Img1 from './Img1.jpg'
import Img2 from './Img2.jpg'
import Img3 from './Img3.jpg'


function Homepage() {
  return (
  
    
  <>
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={Img1} className="d-block w-100" alt="..."/>
        <div className="carousel-caption">
          <h5>We will purchase you the best Products</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime explicabo, aliquid eveniet deleniti, vero molestiae sunt aspernatur ipsam nostrum nisi omnis consectetur dolorum vitae saepe illo aut. Excepturi, cumque animi.</p>
          <p><a href="#" className="btn btn-light mt-3">Learn More</a></p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={Img2} className="d-block w-100" alt="..."/>
        <div className="carousel-caption">
          <h5>buy one get one free </h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime explicabo, aliquid eveniet deleniti, vero molestiae sunt aspernatur ipsam nostrum nisi omnis consectetur dolorum vitae saepe illo aut. Excepturi, cumque animi.</p>
          <p><a href="#" className="btn btn-light mt-3">Learn More</a></p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={Img3} className="d-block w-100" alt="..."/>
        <div className="carousel-caption">
          <h5>return cashe posiblite</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime explicabo, aliquid eveniet deleniti, vero molestiae sunt aspernatur ipsam nostrum nisi omnis consectetur dolorum vitae saepe illo aut. Excepturi, cumque animi.</p>
          <p><a href="#" className="btn btn-light mt-3">Learn More</a></p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

  
  </>
    
    
  )
}

export default Homepage;