import { useState } from 'react';

import './App.css';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import IntroCard from './components/IntroCard';
import ProjectsSection from './components/ProjectsSection';
import SkillSection from './components/SkillSection';
import EducationSection from './components/EducationSection';
import Footer from './components/Footer';

function App() {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className='dark:bg-black'>
        <Navbar />

        <div className=' text-black dark:text-white px-5  max-w-screen-2xl mx-auto '>
          <IntroCard />
          <ProjectsSection />

          <SkillSection />
          <EducationSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
