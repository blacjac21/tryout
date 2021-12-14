import React from 'react';
import "../css/contactus.css"
import AppNavbar from '../components/AppNavbar';
import Footer from './Footer';

function contactUs(){
  return(
    <div>
    <AppNavbar/>
    <br/> <br/>

     <div class="container1">
     <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">Mahalakshmi Laypout</div>
          <div class="text-two">Bengaluru-86</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+91 9845392357</div>
          
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">support@filcon.com</div>
          <div class="text-two">filcon@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have any queries with our products or wnt to buy our products, you can send me message from here.We would be pleased to help you .</p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name"></input>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"></input>
        </div>
        <div class="input-box message-box">
          
        </div>
        <div class="button">
          <input type="button" value="Send Now" ></input>
        </div>
       </form>
       </div>
      </div>
     </div>
     <Footer/>
     </div>
    )
}

export default contactUs;
      