import { useState } from 'react';

import './App.css';
import { Button } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './features/theme/themeSlice';
import Navbar from './components/Navbar/Navbar';

function App() {
  const { theme } = useSelector((state) => state.theme);
  console.log(theme);
  const dispatch = useDispatch();

  const themeChange = () => {
    if (theme === 'dark') dispatch(toggleTheme('light'));
    if (theme === 'light') dispatch(toggleTheme('dark'));
  };

  return (
    <div className={theme}>
      <Navbar />

      <Button
        onClick={themeChange}
        className='dark:bg-light-green-600'>
        Button
      </Button>
    </div>
  );
}

export default App;
