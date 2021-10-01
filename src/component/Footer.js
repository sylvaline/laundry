import React from "react";
import { Link } from "react-router-dom";
import p1 from '../asset/image/cfb.png'

function Footer() {
  return (
    <div className="footer">
      <div className="footer_inner">
        <div className="ready_footer">
          <h1>Ready To Learn More?</h1>
          <div className="ready_footer_inner">
            <div className="make_call">
              <a href="tel:345-765-8990">
                <i class="fas fa-phone-volume"></i>Text or Call 345-765-8990
              </a>
            </div>
            <h2></h2>
            <div className="request">
              <Link to="/cta_section">
                <i class="fas fa-info"></i>Request more Information
              </Link>
            </div>
          </div>
        </div>

        <div className="footer_logo">
          <div className="footer_logo_inner">
            <div className="footer_item">
              <div class="franchise">
                <h3>A Clean Franchise Brands Company </h3>
                <img src="\image\cfb.png" alt="" />
              </div>
              <div class="franchise sitelogo">
                <img src="\image\logo.jpg" alt="" />
                
              </div>
            </div>

            <div className="footer_item">
              <div className=" footphone">
                <a href="tel:248-654-7559">457-654-7453</a>
              </div>
              <ul class="footer-nav">
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-131">
                  <a href="GG">International</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-130">
                  <a href="KK">Veterans</a>
                </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-74">
                  <a href="FF">Privacy Policy</a>
                </li>
                <li class=" menu-item-type-custom menu-item-object-custom menu-item-75">
                  <a href="D">Disclaimer</a>
                </li>
              </ul>
              <div class="social-icons">
                <a target="_blank" href="dd" >
                  <span><i className="fab fa-facebook"></i></span>
                </a>
                <a target="_blank" href="dd" >
                  <span><i className="fab fa-linkedin"></i></span>
                </a>
              </div>
            </div>

            <div className="footer_item">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia itaque molestias cupiditate voluptates, magni corrupti rem, voluptas blanditiis ducimus repudiandae fugiat? Placeat cum ex dolore tempora incidunt alias. Iure, ratione.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia itaque molestias cupiditate voluptates, magni corrupti rem, voluptas blanditiis ducimus repudiandae fugiat? Placeat cum ex dolore tempora incidunt alias. Iure, ratione</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
          <div className="footer_bottom_inner">
              <div className="left">
              <p>&copy; Laundry Connections. All Rights Reserved</p> 
              </div>
              <div className="right">
                  <p>Powered By Someone</p>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Footer;
