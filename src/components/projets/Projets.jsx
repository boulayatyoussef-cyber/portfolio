import React from 'react';
import './projets.css';

const ProjectCard = ({ title, desc, link, tags }) => {
  return (
    <div className="project-card-minimal">
      <div className="project-info">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag-pill">{tag}</span>
          ))}
        </div>
      </div>
      <a href={link} target="_blank" rel="noreferrer" className="project-action-btn">
        Voir le projet
      </a>
    </div>
  );
};

export default function Projets() {
  const projects = [
    { 
      title: "🎯Le Compte est Bon!", 
      desc: "Algorithme optimisé de résolution du jeu ‘Le Compte est Bon’ en C.", 
      tags: ["Langage C"], 
      link: "https://github.com/boulayatyoussef-cyber/Le-compte-est-bon-" 
    },
    { 
      title: "🧮Solveur Number Match", 
      desc: "Solveur de grilles numériques optimisé en OCaml.", 
      tags: ["Langage OCaml"], 
      link: "https://github.com/boulayatyoussef-cyber/Number_match1" 
    },
    { 
      title: "🧮Calculatrice en notation polonaise", 
      desc: "Une mini calculatrice qui utilise la notation polognaise.", 
      tags: ["Langage C"], 
      link: "https://github.com/boulayatyoussef-cyber/calculatrice_polognaise" 
    },
    { 
      title: "🌐Simulateur de réseaux en OCAML", 
      desc: "Un simulateur de réseau performant et robuste développé en OCaml.", 
      tags: ["OCaml"], 
      link: "https://github.com/boulayatyoussef-cyber/simulateur_reseau" 
    },
    {
      title: "📝 Mini editeur de texte", 
      desc: "Mon editeur est un traiteur de texte ultra-léger et performant.", 
      tags: ["Langage C", "Python"], 
      link: "https://github.com/boulayatyoussef-cyber/editeur_texte" 
    },
    {
      title: "♟️ Jeu d'Échecs avec IA",
      desc: "Un jeu d'échecs complet développé en Python utilisant la bibliothèque Pygame.",
      tags: ["Python"],
      link: "https://github.com/boulayatyoussef-cyber/jeu_chess"
    }

  ];

  return (
    <section id="projets" className="main-projects-container">
      {/* CADRE GRIS GLOBAL */}
      <div className="projects-outer-wrapper">
        
        {/* TITRE UNIQUE SANS LE TEXTE AU-DESSUS */}
        <h2 className="section-main-title">Projets personnels et académiques</h2>
        
        <div className="projects-grid-layout">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}