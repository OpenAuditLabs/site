import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? styles.sidebarOpen : styles.sidebarClosed}>
      <button onClick={toggleSidebar} className={styles.toggleButton}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      {isOpen && (
        <nav className={styles.navMenu}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
