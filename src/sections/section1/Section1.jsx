import React from 'react';
import './section1.css';
// On importe l'image localement pour éviter les erreurs de chemin hhh
import photoProfil from './profileImage.png'; 

export default function Section1() {
  return (
    <div className="section-profile">
      <div className="profile-img-container">
        <img src={photoProfil} alt="Youssef Boulayat" className="profile-img" />
      </div>
      
      <div className="profile-info-block">
        <h1>Youssef BOULAYAT</h1>
        <p>Étudiant en CPGE passionné par le développement, le Cloud et le DevOps</p>
        <div className="availability-badge">
          <span className="status-dot"></span>
          Actuellement à la recherche d’une alternance
        </div>
      </div>
    </div>
  );
}