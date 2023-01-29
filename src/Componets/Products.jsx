import React from 'react'
import Img1 from './Images/Img1.png'
import Img2 from './Images/Img2.png'
import Img3 from './Images/Img3.png'
import Img4 from './Images/Img4.jpg'
import Img5 from './Images/Img5.jpg'
import Img6 from './Images/Img6.jpg'
import Img7 from './Images/Img7.jpg'
import Img8 from './Images/Img8.jpg'

function Products() {
  return (
    <>



    <section>
    <div class="gallery">

        <div class="content">
        
            <img class="shoes" src={Img1} alt="shoes_img"/>
            <h3>mobile</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, ullam.</p>
            <h6>$55.00</h6>
            <ul>
                <li>
                <i class="fa fa-star checked"></i>
                <i class="fa fa-star checked"></i>
                <i class="fa fa-star checked"></i>
                <i class="fa fa-star checked"></i>
                <i class="fa fa-star"></i>
                </li>
            </ul>
            <button class="buy-1">buy now</button>
        </div>



          
        <div class="content">
        
            <img src={Img2} alt="earphone_img"/>
            <h3>bluetoot</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, ullam.</p>
            <h6>$100.00</h6>
            <ul>
                <li>
                <i class="fa fa-star checked"></i>
                <i class="fa fa-star checked"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                </li>
            </ul>
            <button class="buy-2">buy now</button>
        </div>

        
        <div class="content">
        
            <img src={Img3}alt="watch_img"/>
            <h3>Shose</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, ullam.</p>
            <h6>$85.00</h6>
            <ul>
                <li>
                <i class="fa fa-star checked"></i>
                <i class="fa fa-star checked"></i>
                <i class="fa fa-star checked"></i>
                <i class="fa fa-star"></i>
                </li>
            </ul>
            <button class="buy-3">buy now</button>
        </div>

          
        <div class="content">
        
            <img src={Img4} alt="mobile_img"/>
            <h3>School Bag</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, ullam.</p>
            <h6>$1000.00</h6>
            <ul>
                <li>
                <i class="fa fa-star checked"></i>
                <i class="fa fa-star checked"></i>
                <i class="fa fa-star checked"></i>
                <i class="fa fa-star checked"></i>
                </li>
            </ul>
            <button class="buy-4">buy now</button>
        </div>
    </div>
</section>
<br/>
<br/>
<br/>
<br/>

<div class="gallery">
    
    <div class="content">
    
        <img src={Img5} alt="camera_img"/>
        <h3>Laptop</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, ullam.</p>
        <h6>$75.00</h6>
        <ul>
            <li>
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star"></i>
            </li>
        </ul>
        <button class="buy-5">buy now</button>
    </div>



    
    <div class="content">
    
        <img src={Img6} alt="earphone_img"/>
        <h3>Bag</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, ullam.</p>
        <h6>$35.00</h6>
        <ul>
            <li>
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star"></i>
            </li>
        </ul>
        <button class="buy-6">buy now</button>
    </div>

    
    <div class="content">
    
        <img src={Img7} alt="watch_img"/>
        <h3>Smart Watch</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, ullam.</p>
        <h6>$95.00</h6>
        <ul>
            <li>
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star checked"></i>
            </li>
        </ul>
        <button class="buy-7">buy now</button>
    </div>


      
    <div class="content">
    
        <img src={Img8} alt="mobile_img"/>
        <h3>Camera</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, ullam.</p>
        <h6>$60.00</h6>
        <ul>
            <li>
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star checked"></i>
            </li>
        </ul>
        <button class="buy-8">buy now</button>
    </div>
</div>


    
  </> 
    
  )
}

export default Products;