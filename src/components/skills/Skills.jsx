import React from 'react';
import './skills.css';

const SkillBar = ({ name, level }) => {
  // Vert si niveau >= 80%, Bleu sinon (comme demandé précédemment)
  const barColor = level >= 80 ? "#4ade80" : "#007AFF";

  return (
    <div className="skill-card">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
      </div>
      <div className="skill-progress-bg">
        <div 
          className="skill-progress-fill" 
          style={{ width: `${level}%`, backgroundColor: barColor }}
        ></div>
      </div>
    </div>
  );
};

export default function Skills() {
  const techniques = [
    { name: "C", level: 80 }, { name: "Ocaml", level: 75 },
    { name: "Java", level: 65 }, { name: "Python", level: 90 },
    { name: "HTML & CSS", level: 85 }, { name: "LINUX & UNIX", level: 80 },
    { name: "WINDOWS", level: 100 }
  ];

  const langues = [
    { name: "Français", level: 100 },
    { name: "Anglais", level: 85 },
    { name: "Arabe", level: 100 }
  ];

  const personnelles = ["Communication", "Travail en groupe", "Discipliné", "Esprit d'analyse"];

  return (
    <div className="skills-container-full">
      <h2 className="main-title-underlined">Compétences</h2>

      {/* SECTION TECHNIQUES */}
      <div className="skills-category">
        <h3 className="category-subtitle">Compétences Techniques</h3>
        <div className="skills-grid">
          {techniques.map((s, i) => <SkillBar key={i} name={s.name} level={s.level} />)}
        </div>
      </div>

      {/* SECTION PERSONNELLES */}
      <div className="skills-category">
        <h3 className="category-subtitle">Qualités Personnelles</h3>
        <div className="qualities-flex">
          {personnelles.map((q, i) => <span key={i} className="quality-tag">{q}</span>)}
        </div>
      </div>

      {/* SECTION LANGUES */}
      <div className="skills-category">
        <h3 className="category-subtitle">Langues</h3>
        <div className="skills-grid">
          {langues.map((s, i) => <SkillBar key={i} name={s.name} level={s.level} />)}
        </div>
      </div>
    </div>
  );
}