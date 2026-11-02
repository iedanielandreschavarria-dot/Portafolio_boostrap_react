import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import RecommendationsSection from './components/RecommendationsSection';
import LeaveRecommendationForm from './components/LeaveRecommendationForm';
import Footer from './components/Footer';

import {
  profileData,
  skillsData,
  projectsData,
  initialRecommendationsData,
} from './data/portfolioData';

/**
 * Componente Principal App
 * Orquesta todas las secciones del portafolio web, maneja el estado de las
 * recomendaciones y envuelve el contenido principal en un Container de Bootstrap.
 */
function App() {
  const [recommendations, setRecommendations] = useState(initialRecommendationsData);

  const handleAddRecommendation = ({ name, text }) => {
    const newRec = {
      id: Date.now(),
      text,
      author: name || undefined,
    };
    setRecommendations((prev) => [...prev, newRec]);
  };

  return (
      <div id="home" className="portfolio-app min-vh-100 d-flex flex-column">
        {/* Encabezado y barra de navegación */}
        <Header
          name={profileData.name}
          email={profileData.email}
          phone={profileData.phone}
        />

        {/* Contenido principal dentro de un Container de Bootstrap */}
        <Container as="main" className="flex-grow-1 py-4 px-md-5">
          <AboutMe name={profileData.name} bio={profileData.bio} />
          <SkillsSection skills={skillsData} />
          <ProjectsSection projects={projectsData} />
          <RecommendationsSection recommendations={recommendations} />
          <LeaveRecommendationForm onAddRecommendation={handleAddRecommendation} />
        </Container>

      {/* Pie de página con botón Scroll to Top */}
      <Footer />
    </div >
  );
}

export default App;
