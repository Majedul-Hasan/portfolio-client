import React from 'react';

const NavigationContainer = ({ children }) => {
  return (
    <nav className='w-full'>
      <div className='nav nav-tabs nav-tabs-custom-inner'>{children}</div>
    </nav>
  );
};

export default NavigationContainer;
