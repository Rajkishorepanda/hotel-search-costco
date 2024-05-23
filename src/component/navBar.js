import * as React from "react";
import '../style/navBar.css'

const MenuItem = ({ children, className }) => (
  <div className={className} role="menuitem" tabIndex="0">
    {children}
  </div>
);

function NavBar() {
  return (

      <nav className="menu-container" aria-label="Main Navigation">
        <MenuItem className="menu-item menu-item-home">Home</MenuItem>
        <MenuItem className="menu-item menu-item-packages">Packages</MenuItem>
        <MenuItem className="menu-item menu-item-hotels">Hotels</MenuItem>
        <MenuItem className="menu-item menu-item-cruises">Cruises</MenuItem>
        <MenuItem className="menu-item menu-item-cars">Rental Cars</MenuItem>
        <MenuItem className="menu-item menu-item-theme-parks">Theme Parks & Specialty</MenuItem>
      </nav>
      
  );
}

export default NavBar;