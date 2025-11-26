import React from 'react';
import "./skills.css";
// Assurez-vous que le chemin vers votre fichier de données est correct
import {langues, softSkills, technicalSkills} from "../../data/skills"; 

export function Skills() {

    const maxLevel = 10;

    return (
        <div className="skills-main-block">
            
            {/* TITRE PRINCIPAL DE LA SECTION */}
            <h3 className="about-title">Compétences</h3> 
            
            {/* SOUS-TITRE 1 : TECHNIQUES */}
            <h3 className="skills-sub-title">Compétences Techniques</h3>
            <div className="technical-skills-grid">
                {technicalSkills.map(skill => (
                    <div key={skill.id} className="skill-item-compact">
                        <div className="skill-name-compact">{skill.name}</div>
                        <div className="progress-bar-compact">
                            <div
                                className="progress-compact"
                                style={{ width: `${(skill.level / maxLevel) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* SOUS-TITRE 2 : PERSONNELLES */}
            <h3 className="skills-sub-title">Qualités Personnelles</h3>
            <div className="soft-skills-tags-compact">
                {softSkills.map(skill => (
                    <span key={skill.id} className="soft-skill-tag">{skill.name}</span>
                ))}
            </div>
            
            {/* SOUS-TITRE 3 : LANGUES */}
            <h3 className="skills-sub-title">Langues</h3> 
            <div className="language-list-compact">
                {langues.map((langue, index) => (
                    <div key={index} className="language-item-compact">
                        {/* 1. Nom de la langue */}
                        <div className="language-name-compact">{langue.name}</div>
                        
                        {/* 2. Barre de progression */}
                        <div className="progress-bar-compact progress-bar-lang"> 
                            <div
                                className="progress-compact"
                                style={{ width: `${(langue.levelNumeric / maxLevel) * 100}%` }} 
                            ></div>
                        </div>
                        {/* 3. Le texte du niveau (langue.level) est enlevé ici */}
                    </div>
                ))}
            </div>

        </div>
    )
}