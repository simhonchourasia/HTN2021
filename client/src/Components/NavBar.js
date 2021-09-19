import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  const url = process.env.REACT_APP_AUTH0_CLIENT_URL;
  return (
    <div className="nav-container mb-3">
      <nav class="navbar navbar-expand navbar-light bg-light">
        
        <a class="navbar-brand" href={url}>
            Industry Baby
        </a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
      <a class="nav-item nav-link" href={`${url}events`}>About Us</a>
      <a class="nav-item nav-link" href={`${url}profile`}>Learn More</a>
    </div>
  </div>
      </nav>
    </div>
  );
};





export default NavBar;