import React from "react";
import Typed  from "react-typed";
import { Link } from "react-scroll";


const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>Web development and websites promotion</h1>
        <Typed 
          className="typed-text"
          strings={["Web Design", "Web Development", "Facebook Ads SMM", "Google Ads", "Hosting", "Editing", "Logo Creator" ]}
          typeSpeed={50}
          backSpeed={60}
          loop
          />
          <Link smooth={true} to="contacts" offset={-110} href="#" className="btn-main-offer">
            contact me
          </Link>
      </div>
    </div>
  );
}

export default Header;
