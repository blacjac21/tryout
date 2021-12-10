import React from 'react';
import "../css/Carousel.css"
import photo1 from "../assets/1.jpg"
import photo2 from "../assets/2.jpg"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";



function Carousel() {
    return(
    <div id="slider">
            <AliceCarousel autoPlay autoPlayInterval="3000" infinite animationType="slide" autoHeight autoWidth disableButtonsControls disableDotsControls>
                <img src={photo1} className="sliderimg"/>
                <img src={photo2} className="sliderimg"/>
     
            </AliceCarousel>
 
    </div>
    );
}

export default Carousel;


/*
<ul id="slideWrap"> 
                <li><img src={photo1} alt=""/></li>
                <li><img src={photo2} alt=""/></li>
                
            </ul>
            <a id="prev" href="#">&#8810;</a>
            <a id="next" href="#">&#8811;</a>

*/