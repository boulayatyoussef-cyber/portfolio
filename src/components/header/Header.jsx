import React from 'react';
import './header.css';

export default function Header() {
  return (
    <header className="main-header">
      <nav className="nav-container">
        {/* Ton logo à gauche */}
        <div className="logo">YB.</div>

        {/* Liens centrés avec ancres */}
        <ul className="nav-links">
          <li><a href="#profile">Profile</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#projets">Projets académiques et personnels</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}