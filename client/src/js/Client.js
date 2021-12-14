import React from "react";
import "../css/client.css"
import AppNavbar from "../components/AppNavbar";
import Footer from "./Footer";

function Client() {
	return (
		<div>
			<AppNavbar />
			<br /> <br />
			<div class="section-title">
				<h1>Our Client's </h1>
			</div>
			<div class="row1">
				<div class="column1">
					<div class="team">
						<div class="team-img">
							<img src="https://www.meme-arsenal.com/memes/1746aecb21a5a07efbc8d9e015be1622.jpg" alt="Team Image" ></img>
                            <a href="https://en.wikipedia.org/wiki/HTTP_404">404 error </a>
						</div>
						<div class="team-content">
							<h2>Mallur Mikeanna</h2>
							<h3>Elite Client</h3>
							<p>Most loyal and caring client of our company</p>
							<h4>mike23@gmail.com</h4>
							<a href="https://en.wikipedia.org/wiki/HTTP_404">404 error </a>
						</div>
					</div>
				</div>
				<div class="column1">
					<div class="team">
						<div class="team-img">
							<img src="https://cdn.vox-cdn.com/thumbor/VZNJM5S4Cw2i3JaycT9waVLCwqw=/715x248:1689x721/1200x800/filters:focal(972x299:1278x605)/cdn.vox-cdn.com/uploads/chorus_image/image/69305239/shrek4_disneyscreencaps.com_675.0.jpg" alt="Team Image" />
						</div>
						<div class="team-content">
							<h2>Shambur Shrekanna</h2>
							<h3>Gold Client</h3>
							<p>Purchases papers every week , i wonder why ??</p>
							<h4>greengod@gmail.com</h4>
						</div>
					</div>
				</div>

				<div class="column1">
					<div class="team">
						<div class="team-img">
							<img src="https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png" alt="Team Image" />
						</div>
						<div class="team-content">
							<h2>Pinkur Pummy</h2>
							<h3>Silver Client</h3>
							<p>Does not send the payment on time</p>
							<h4>pikuX2@gmail.com</h4>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Client;