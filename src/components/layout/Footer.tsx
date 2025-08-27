import React from "react";

export default function Footer() {
  return (
    <footer aria-label="site-footer" className="placeholder-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Company — All rights reserved.</p>
      </div>
    </footer>
  );
}
