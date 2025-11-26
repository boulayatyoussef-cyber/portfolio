import {projets} from "../../data/projets";

import './projets.css';

export default function Projets() {

    return (
        <div className="projets">
            <h2>Projets personnels et académiques</h2>
            <div className="projets-grid">
                {projets.map((projet, index) => (
                    <div className="projet-card" key={index}>
                        <h3>{projet.titre}</h3>
                        <p>{projet.details}</p>
                        <div className="technologies">
                            {projet.technologies.map((tech, i) => (
                                <span key={i} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <a href={projet.lien} target="_blank" rel="noopener noreferrer" className="project-details">
                            Voir le projet
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}