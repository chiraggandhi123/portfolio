import React, { useEffect } from "react";
import "./index.css";
const Navbar = ({links, activeLink, setActiveLink}:{links: string[], activeLink:number ,setActiveLink: (ix:number)=>void}) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {links.map((item, idx) => {
          return (
            
              <li key={idx} className="navbar-item" onClick={()=> setActiveLink(idx)}>
                <button className={`navbar-link ${activeLink === idx ? 'active': ''}`} data-nav-link="">
                  {item}
                </button>
              </li>
            
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
