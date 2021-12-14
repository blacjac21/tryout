import React from "react";
import "../css/Footer.css"
import { Link } from "react-router-dom";

function Footer(){
  return(
    <footer class="footer-distributed">

			<div class="footer-left">

				<h3 class="pesu" >Filcon Sales and Services</h3>

				<p class="footer-links">
					<a href="/home" class="link-1">Home</a>
					
					<a href="/home">About us</a>
				
					<a href="/contactUs">Contact</a>
				
					<a href="/cc">Products</a>
					
					<a href="/client">Client</a>
					
					
				</p>

				<p class="footer-company-name">Filcon Sales and services © 2021</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>No.86,3rd Main 2nd stage</span> Mahalakshmi Layout,Bengaluru-560086</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+91 9845392357</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:filcon.m@gmail.com">filcon.m@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				

				

			</div>

		</footer>
    
  );
};

export default Footer;