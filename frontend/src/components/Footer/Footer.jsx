import React from "react";
import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-left">
          {/* <img src={assets.logo} alt="logo" className="logo" /> */}
          <h2 className="logo">Food Delivery</h2>
          <p>
          Welcome to Food delivery website, your one-stop destination for delicious food delivered right to your doorstep. From local favorites to international cuisines, we offer a wide variety of dishes to satisfy every craving. Enjoy fresh, high-quality meals with quick and reliable delivery, all at the tap of a button. Let us make your mealtime easy and enjoyable!
          </p>
          <div className="social-icons">
            <img src={assets.facebook_icon} alt="facebook-icon" />
            <img src={assets.linkedin_icon} alt="linkedin-icon" />
            <img src={assets.twitter_icon} alt="twitter-icon" />
          </div>
        </div>
        <div className="footer-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>Get In Touch!!!</h2>
          <ul>
            <li>+94 77 111 11 11</li>
            <li>fooddelivery@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p>Copyright 2024 fooddelivery.com -All Rights reserved</p>
    </div>
  );
};

export default Footer;
