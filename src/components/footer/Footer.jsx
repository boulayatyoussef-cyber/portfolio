import React from 'react';
import './footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p className="copyright">
          © {currentYear} Youssef Boulayat - Tous droits réservés.
        </p>
        <div className="footer-links">
          <a href="https://github.com/ton-pseudo" target="_blank" rel="noreferrer" className="footer-link">
            GitHub
          </a>
          <a href="https://linkedin.com/in/ton-pseudo" target="_blank" rel="noreferrer" className="footer-link">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}