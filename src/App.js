import React from 'react';
import './App.css';

// Importations des composants
import Header from "./components/header/Header";
import Section1 from "./sections/section1/Section1";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Section4 from "./sections/section4/Section4";
import ContactInfo from "./components/contactInfo/ContactInfo";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        {/* 1. Profil (Haut) */}
        <Section1 /> 

        {/* 2. À propos de moi (Unique) */}
        <section>
          <div className="outer-gray-card">
            <h2 className="section-main-title">À propos de moi</h2>
            <p className="about-text">
              Étudiant en CPGE MP2I/MPI, passionné par l’informatique et issu d’une formation scientifique rigoureuse, je vise une intégration en école d’ingénieurs en alternance à la rentrée de septembre 2026. Je suis donc à la recherche d’un contrat d’apprentissage de 3 ans en DevOps, Cloud ou développement logiciel, en lien avec mes aspirations professionnelles.   </p>
          </div>
        </section>

        {/* 3. Formation scolaire */}
        <Section4 /> 

        {/* 4. Layout Qualités + Compétences */}
        <section className="dual-layout">
          
          <div className="right-column">
            <Section2 />
          </div>
        </section>

        {/* 5. Projets et Contact */}
        <Section3 />
        <ContactInfo />
      </main>

      <Footer />
    </div>
  );
}

export default App;