import React from 'react';
import profileImage from "../../assets/profileImage.png"; 
import './profile.css';

export default function Profile() {

    // Contenu du paragraphe "À propos de moi"
    const presContent = `
        <p class="about-content">
            Actuellement étudiant en CPGE MP2I/MPI au Lycée Colbert de Tourcoing, avec une grande passion pour les mathématiques et l'informatique, notamment le développement logiciel, la cybersécurité, l'intelligence artificielle, le machine learning et le développement d'algorithmes.
        </p>
        <p class="about-content">
            Je recherche un contrat d'apprentissage afin de mettre en pratique mes compétences techniques et de contribuer à des projets innovantes et concrets dans un environnement professionnel.
        </p>
    `;

    return (
        <section id="profile-main" className="cv-container">
            
            {/* 1. Colonne de gauche (Photo et Infos de base) */}
            <div className="left-column">
                
                {/* Photo de profil */}
                <div className="profile-section">
                    <img src={profileImage} alt="Photo de Youssef Boulayat" className="profile-photo"/>
                </div>
                
                {/* Informations de base (Nom et prénom, Domaine) */}
                <div className="contact-info">
                    {/* MODIFICATION ICI */}
                    <p><strong>Nom et prénom:</strong> Youssef Boulayat</p>
                    {/* MODIFICATION ICI */}
                    <p><strong>Domaine:</strong> Étudiant en CPGE MP2I/MPI</p>
                </div>
                
            </div>

            {/* 2. Colonne de droite (Contenu principal) */}
            <div className="right-column">
                
                {/* Le titre "About me" peut être changé en "À propos de moi" si vous le souhaitez */}
                <h3 className="about-title">À propos de moi</h3>
                
                {/* Paragraphe de description */}
                <div dangerouslySetInnerHTML={{__html: presContent}}></div> 
            </div>
        </section>
    );
}