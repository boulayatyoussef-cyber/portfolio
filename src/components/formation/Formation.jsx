import React from 'react';
import './formation.css';

export default function Formation() {
  const parcours = [
    {
      titre: "Admission encore dans une grande école d'ingénieur",
      date: "2026 - 2029",
      ecoles: "Ecoles ciblées: Les IMT, Télécom SudParis, Cy Tech, Epita, ESIEA..."
    },
    {
      titre: "CPGE MP2I/MPI: Maths, Physique, Informatique",
      date: "2024 - 2026",
      ecoles: "Lycée Colbert de Tourcoing"
    },
    {
      titre: "Baccalauréat en Sciences mathématiques",
      date: "2023 - 2024",
      ecoles: "Lycée qualifiant Moulay Baamrane: Mention Trés bien"
    }
  ];

  return (
    <section id="formation" className="section-container">
      <div className="outer-gray-card">
        <h2 className="section-main-title">Formation</h2>
        <div className="timeline">
          {parcours.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{item.titre}</h3>
                <span className="timeline-date">{item.date}</span>
                <p className="timeline-location">{item.ecoles}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}