import React from 'react';

export default function Section4() {
  const parcours = [
    { titre: "Admission encore dans une grande école d'ingénieurs", date: "2026 - 2029", lieu: "Ecoles ciblées: IMT, Télécom SudParis, ESIEA, CYTech, Junia ISEN..." },
    { titre: "CPGE MP2I/MPI: Maths, Physique, Informatique", date: "2024 - 2026", lieu: "Lycée Colbert de Tourcoing" },
    { titre: "Baccalauréat en Sciences mathématiques", date: "2023 - 2024", lieu: "Lycée qualifiant Moulay Baamrane : Mention trés bien" }
  ];

  return (
    <section id="formation">
      <div className="outer-gray-card">
        <h2 className="section-main-title">Formation</h2>
        <div style={{ paddingLeft: '10px' }}>
          {parcours.map((item, i) => (
            <div key={i} style={{ marginBottom: '20px', borderLeft: '2px solid #007AFF', paddingLeft: '15px' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#fff' }}>{item.titre}</h3>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>{item.date} | <span style={{ color: '#007AFF' }}>{item.lieu}</span></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}