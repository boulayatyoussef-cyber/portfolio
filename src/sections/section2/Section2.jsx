import React from 'react';
import './section2.css';

const SkillBar = ({ name, level }) => {
  const barColor = level >= 80 
    ? "linear-gradient(90deg, #007AFF, #4ade80)" 
    : "linear-gradient(90deg, #007AFF, #0056b3)";

  return (
    <div className="skill-card-glow">
      <span className="skill-title-white">{name}</span>
      <div className="progress-container-dark">
        <div className="progress-bar-fill" style={{ width: `${level}%`, background: barColor }}></div>
      </div>
    </div>
  );
};

export default function Section2() {
  const techniques = [
    { n: "C", l: 70 }, { n: "Ocaml", l: 70 }, { n: "Java", l: 40 },
    { n: "Python", l: 70 }, { n: "HTML & CSS", l: 80 },
    { n: "LINUX & UNIX", l: 80 }, { n: "WINDOWS", l: 80 }, {n: "SQL", l: 45}, {n: "GIT", l: 45}
  ];

  const langues = [
    { n: "Français", l: 90 }, { n: "Anglais", l: 80 }, { n: "Arabe", l: 90 }
  ];

  return (
    <section id="section2">
      <div className="outer-gray-card main-glow">
        <h2 className="section-main-title">Compétences</h2>
        
        {/* TITRES ENCADRÉS AVEC RETOUR À LA LIGNE FORCÉ */}
        <div className="category-block">
          <div className="category-frame">QUALITÉS PERSONNELLES</div>
          <div className="qualities-tags-container">
            {["Communication", "Travail en groupe", "Discipliné", "Esprit d'analyse", "Sens de l’organisation", "Autonomie"].map((q, i) => (
              <span key={i} className="quality-pill-neon">{q}</span>
            ))}
          </div>
        </div>

        <div className="category-block">
          <div className="category-frame">TECHNIQUES</div>
          <div className="skills-grid-compact">
            {techniques.map((s, i) => (
              <SkillBar key={i} name={s.n} level={s.l} />
            ))}
          </div>
        </div>

        <div className="category-block">
          <div className="category-frame">LANGUES</div>
          <div className="skills-grid-compact">
            {langues.map((l, i) => (
              <SkillBar key={i} name={l.n} level={l.l} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}