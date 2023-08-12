import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import {RiArrowDropDownLine} from 'react-icons/ri';
import {AiOutlineSearch} from 'react-icons/ai';

function Navbar() {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => setClick(!click);

  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="nav-left">
          <h1>EDYODA</h1>
          <span>Courses <RiArrowDropDownLine/></span>
          <span>Program <RiArrowDropDownLine/></span>
      </div>
      
      <ul className={click ? "nav-menu active " : "nav-menu"}>
        <li>
          <Link to="/"><AiOutlineSearch style={{marginTop:"10px"}} size={25}/></Link>
        </li>
        <li>
          <Link to="/search">Log in</Link>
        </li>
        <li>
          <button className="nav-button">Join now</button>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size="20" style={{ color: "#212121" }} />
        ) : (
          <FaBars size={20} style={{ color: "#212121" }} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
