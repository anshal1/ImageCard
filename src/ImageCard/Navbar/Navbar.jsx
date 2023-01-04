import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const navi = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="main_navbar_container">
        <nav id="nav">
          <h1 className="brand_name">Image Card Shop</h1>
          <div className="dropdown">
            <div className="cards_link">
              <p onClick={()=>{navi("/")}} className={`${location.pathname === "/" ? "active" : ""}`} >Card 1</p>
              <p onClick={()=>{navi("/Card2")}} className={`${location.pathname === "/Card2" ? "active" : ""}`}>Card 2</p>
              <p onClick={()=>{navi("/Card3")}} className={`${location.pathname === "/Card3" ? "active" : ""}`}>Card 3</p>
              <p onClick={()=>{navi("/Card4")}} className={`${location.pathname === "/Card4" ? "active" : ""}`}>Card 4</p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
