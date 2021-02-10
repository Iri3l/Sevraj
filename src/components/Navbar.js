import React from 'react';
import logo from "../Free5.jpeg";
import { Link } from "react-scroll";
// React font awesome import //
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav  className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
      <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{ color:"#b5d3e7"}} />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link smooth={true} to="home" offset={-110} className="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="about" offset={-110}  className="nav-link" href="#">about me</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="services" offset={-110}  className="nav-link" href="#">services</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="experience" offset={-110}  className="nav-link" href="#">experience</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="portfolio" offset={-110}  className="nav-link" href="#">portfolio</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="contacts" offset={-110}  className="nav-link" href="#">contacts</Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
