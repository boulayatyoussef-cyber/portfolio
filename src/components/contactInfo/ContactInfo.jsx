import React from 'react';
import './contactInfo.css';
import { contactInfo } from '../../data/contactInfo'; // Chemin corrigé selon ton arborescence

export default function ContactInfo() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-outer-wrapper main-glow">
        <h2 className="section-main-title">Contactez-moi</h2>
        
        <p className="contact-subtitle">
          Vous pouvez me contacter pour toute question ou échange, je répondrai avec plaisir.
        </p>

        <div className="contact-info-list">
          {contactInfo.map((info) => (
            <div key={info.id} className="contact-item-card">
              {/* Conteneur d'icône avec fond blanc pour faire ressortir les logos noirs */}
              <div className="contact-icon-wrapper">
                <img src={info.icon} alt={info.key} className="contact-icon-img" />
              </div>

              <div className="contact-details">
                {/* Titre de catégorie encadré */}
                <div className="category-frame-contact">{info.key}</div>
                <a 
                  href={info.link || `mailto:${info.value}`} 
                  target={info.link ? "_blank" : "_self"} 
                  rel="noreferrer" 
                  className="contact-value-glow"
                >
                  {info.value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}