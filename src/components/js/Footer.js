import React from "react"; 
import { 
Container, 
Row, 
Col
} from "react-bootstrap"; 

const Footer = () => { 
return ( 
		<div >
	<div style={{backgroundColor:"black", marginTop:"160px",marginBottom:"30px"}} > 
	<h1 style={{ color: "green", 
				textAlign: "center", 
				marginTop: "-50px",
				padding:"50px" }}> 
		Feelancing provide us opportunity as well as experience
	</h1> 
	<Container> 
		<Row> 
		<Col > 
			<h3 >About Us</h3> 
			<a style={{display:"flex"}}href="#">Aim</a> 
			<a style={{display:"flex"}}href="#">Vision</a> 
			<a style={{display:"flex"}}href="#">Testimonials</a> 
		</Col> 
		<Col> 
			<h3>Our Services</h3> 
			<a style={{display:"flex"}} href="#">Writing</a> 
			<a style={{display:"flex"}} href="#">Internships</a> 
			<a style={{display:"flex"}} href="#">Coding</a> 
			<a style={{display:"flex"}}href="#">Teaching</a> 
		</Col> 
		<Col> 
			<h3>Contact Us</h3> 
			<a style={{display:"flex" }} href="#">Uttar Pradesh</a> 
			<a style={{display:"flex"}}href="#">Ahemdabad</a> 
			<a style={{display:"flex"}}href="#">Indore</a> 
			<a style={{display:"flex",paddingBottom:"20px"}}href="#">Mumbai</a> 
		</Col> 
		<div className="d-none  d-md-block">
		<Col  > 
			<h3>Social Media</h3> 
			<a style={{display:"flex"}} href="#"> 
			<i className="fab fa-facebook-f"> 
				<span style={{ marginLeft: "10px" }}> 
				Facebook 
				</span> 
			</i> 
			</a> 
			<a style={{display:"flex"}} href="#"> 
			<i className="fab fa-instagram"> 
				<span style={{ marginLeft: "10px" }}> 
				Instagram 
				</span> 
			</i> 
			</a> 
			<a style={{display:"flex"}}href="#"> 
			<i className="fab fa-twitter"> 
				<span style={{ marginLeft: "10px" }}> 
				Twitter 
				</span> 
			</i> 
			</a> 
			<a style={{display:"flex"}} href="#"> 
			<i className="fab fa-youtube"> 
				<span style={{ marginLeft: "10px" }}> 
				Youtube 
				</span> 
			</i> 
			</a> 
		</Col> 
		</div>
		</Row> 
	</Container> 
	</div> 
	</div>
); 
}; 
export default Footer; 
