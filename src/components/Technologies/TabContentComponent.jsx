import React from 'react';

const TabContentComponent = ({
  techName,
  techDetail,
  techLogoUrl,
  stackTech,
}) => {
  //   console.log(first);
  return (
    <div
      className={`tab-pane fade show ${
        stackTech === techName ? 'active' : 'hidden'
      }`}>
      <div className='innerContent'>
        <div className='mainTitle d-flex align-items-center'>
          <div className=' iconWrapper me-3'>
            <img
              className='techimg '
              alt={techName}
              src={techLogoUrl}
            />
          </div>
          <div className='textWrapper'>{techName}</div>
        </div>
        <div className='contentWrapper'>{techDetail}</div>
      </div>
    </div>
  );
};

export default TabContentComponent;
