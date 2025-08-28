import React from "react";

export default function Navbar() {
  return (
    <nav aria-label="site-navigation" className="placeholder-navbar">
      <div className="container">
        <span className="brand">Brand</span>
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
