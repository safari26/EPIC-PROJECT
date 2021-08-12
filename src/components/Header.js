import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
      <selection className="Header">
          <nav className=" container navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to ="/" className="navbar-brand" >EPIC</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">Home </Link>
                </li>
                <li className="nav-item">
                  <Link to="/About Us" className="nav-link">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="Create" className="nav-link">Create</Link>
                </li>
                
              </ul>
            </div>
          </nav>
      </selection>
    );
  }
  
  export default Header;