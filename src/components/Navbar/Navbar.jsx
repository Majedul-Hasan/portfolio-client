import React from 'react';
import {
  Navbar,
  MobileNav,
  Collapse,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';
import Headroom from 'react-headroom';
import './navbar.style.css';
import { useDispatch, useSelector } from 'react-redux';
import Sun from '../../Icons/Sun';
import Moon from '../../Icons/Moon';
import { toggleTheme } from '../../features/theme/themeSlice';

const NavbarComponent = () => {
  const { theme } = useSelector((state) => state.theme);
  console.log(theme);
  const dispatch = useDispatch();

  const themeChange = () => {
    dispatch(toggleTheme(theme === 'dark' ? 'light' : 'dark'));
  };

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'>
        <a
          href='#intro'
          className='flex items-center text-gray-700 dark:text-gray-500 '>
          About
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'>
        <a
          href='#skills'
          className='flex items-center text-gray-700 dark:text-gray-500 '>
          Skils
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'>
        <a
          href='#education'
          className='flex items-center text-gray-700 dark:text-gray-500 '>
          Education
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'>
        <a
          href='#projects'
          className='flex items-center text-gray-700 dark:text-gray-500 '>
          Projects
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'>
        <Button onClick={themeChange}>
          {theme && theme === 'dark' ? (
            <Sun className='text-3xl' />
          ) : (
            <Moon className='text-3xl' />
          )}
        </Button>
      </Typography>
    </ul>
  );

  return (
    <Headroom>
      <Navbar className='sticky dark:bg-blue-gray-900/10 border-0  top z-10  rounded-none py-2 px-4 lg:px-8 lg:py-4 mx-auto'>
        <div className='flex items-center justify-between text-blue-gray-900'>
          <Typography
            as='a'
            href='#'
            className='mr-4 cursor-pointer py-1.5 font-medium text-xl'>
            <span className='grey-color'> &lt;</span>
            <span className='logo-name text-gray-700 '>Majedul Hasan</span>
            <span className='grey-color'>/&gt;</span>
          </Typography>
          <div className='flex items-center gap-4'>
            <div className='mr-4 hidden lg:block'>{navList}</div>

            <IconButton
              variant='text'
              className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
              ripple={false}
              onClick={() => setOpenNav(!openNav)}>
              {openNav ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </Navbar>
    </Headroom>
  );
};

export default NavbarComponent;
