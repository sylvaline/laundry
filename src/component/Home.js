import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home_landing_page">
        <div className="landing_page_title">
        <h2>The Most Iconic Name in Dry Cleaning</h2>
        </div>
        <button>
          <Link to="/get-started">GET STARTED</Link>
        </button>
      </div>
      <div className="landing_for_mobile">
            <h2>The Most Iconic Name in Dry Cleaning</h2>
            <button>
            <Link to="/get-started">GET STARTED</Link>
            </button>
        </div>

      <div className="discover_section">
        <div className="left">
          <h1>Discover Franchising with Laundry Connect</h1>
          <p>
            Laundry Connect is a recognized name in the dry cleaning industry
            with over 60 years of innovation & leadership experience. Our system
            was developed in 1949 when Henry Martin recognized that it was
            feasible for smaller, full service dry cleaning plants to provide
            quick service cost effectively. That began Laundry Connect, the
            pioneer of on-premise; quick dry cleaning service. Currently,
            Laundry Connect franchisees operate more than 350 stores in the
            United States and other countries around the world.
          </p>
        </div>
        <div className="right">
          <img src="\image\d1.jpg" alt="More" />
        </div>
      </div>

      <div className="types_section">
        <h2>Find the right business that is right for your investment level</h2>
        <div className="types_section_inner">
          <div className="top">
            <div className="card">
              <img src="\image\h1.jpg" alt="" />
              <h4>Conversions</h4>
              <p>
                Purchase an existing dry cleaning store and gain the benefits of
                the Martinizing iconic brand support behind you
              </p>
              <p>Franchise Fee: $25,000</p>
              <button>LEARN MORE</button>
            </div>
          </div>
          <div className="buttom">
            <div className="card">
              <img src="\image\h1.jpg" alt="" />
              <h4>Plant with Retail Store</h4>
              <p className="delivary_type">Brick & Mortar + Delivery</p>
              <p>Investment: $91,502 – $206,212</p>
              <p>Franchise Fee: $25,000</p>
              <button>LEARN MORE</button>
            </div>

            <div className="card">
              <img src="\image\h1.jpg" alt="" />
              <h4>Plant with Retail Store</h4>
              <p className="delivary_type">Brick & Mortar + Delivery</p>
              <p>Investment: $91,502 – $206,212</p>
              <p>Franchise Fee: $25,000</p>
              <button>LEARN MORE</button>
            </div>

            <div className="card">
              <img src="\image\h1.jpg" alt="" />
              <h4>Plant with Retail Store</h4>
              <p className="delivary_type">Brick & Mortar + Delivery</p>
              <p>Investment: $91,502 – $206,212</p>
              <p>Franchise Fee: $25,000</p>
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="reason_section">
        <div className="reason_section_inner">
          <h2>Reasons to own a Martinizing Dry Cleaning Franchise</h2>
          <div class="service-container">
            <div class="service-box serviceicon">
              <i class="fas fa-expand-arrows-alt "></i>
              <h3>Scalability</h3>
            </div>
            <div class="service-box serviceicon">
              <i class="far fa-check-circle "></i>
              <h3>Iconic Brand Recognition</h3>
            </div>
            <div class="service-box serviceicon">
              <i class="fas fa-chalkboard-teacher "></i>
              <h3>Technology</h3>
            </div>
            <div class="service-box serviceicon">
              <i class="fas fa-chart-area "></i>
              <h3>Recession Resistant</h3>
            </div>
            <div class="service-box">
              <i class="fas fa-dollar-sign "></i>
              <h3>Repeating Revenue</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="become_section">
          <div className="become_section_inner">
              <div className="left">
              <img src="\image\h1.jpg" alt="" />
              </div>
              <div className="right">
                <h2>Steps to Become a Martinizing Dry Cleaning Franchise Partner</h2>
                <ol>
                    <li className="line li1">
                        <Link to="/steps-to-ownership">Speak with a Martinizing Dry Cleaning Representative</Link>
                    </li>

                    <li className="line li2">
                        <Link to="/steps-to-ownership">Review our opportunity through our website</Link>
                    </li>

                    <li className="line li3">
                        <Link to="/steps-to-ownership">Review FDD and perform Due Dilligence on the opportunity.</Link>
                    </li>

                    <li className="line li4">
                        <Link to="/steps-to-ownership">Meet the Laundry Connect Team Day</Link>
                    </li>

                    <li className="li5">
                        <Link to="/steps-to-ownership">Become a Laundry Connect Franchisee</Link>
                    </li>
                </ol>
              </div>
          </div>
      </div>


    </div>
  );
}

export default Home;
