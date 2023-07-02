import { useState } from 'react';

import './App.css';
import { Button } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './features/theme/themeSlice';
import Navbar from './components/Navbar/Navbar';
import Sun from './Icons/Sun';
import Moon from './Icons/Moon';
import IntroCard from './components/IntroCard';
import ProjectsSection from './components/ProjectsSection';
import SkillSection from './components/SkillSection';
import EducationSection from './components/EducationSection';
import Footer from './components/Footer';

function App() {
  const { theme } = useSelector((state) => state.theme);
  console.log(theme);
  const dispatch = useDispatch();

  const themeChange = () => {
    dispatch(toggleTheme(theme === 'dark' ? 'light' : 'dark'));

    // if (theme === 'dark') dispatch(toggleTheme('light'));
    // if (theme === 'light') dispatch(toggleTheme('dark'));
  };

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
