import React from 'react';
import FrontEndTechComponentContainer from './FrontEndTechComponentContainer';
// import FrontEndTechComponentContainer from './FrontEndTechComponentContainer';
// import BackEndTechComponentContainer from './BackEndTechComponentContainer';
// import DatabaseTechComponentContainer from './DatabaseTechComponentContainer';
// import WebfarmworkTechComponentContainer from './WebfarmworkTechComponentContainer';
// import CloudDevOpsTechComponentContainer from './CloudDevOpsTechComponentContainer';
// import MobilityTechComponentContainer from './MobilityTechComponentContainer';

const RightStackTechs = ({
  stackTech,
  setStackTech,
  stackTitle,
  setStackTitle,
}) => {
  return (
    <div
      className=' tab-content-custom w-9/12'
      id='tech-pills-tabContent'>
      <FrontEndTechComponentContainer
        stackTitle={stackTitle}
        setStackTitle={setStackTitle}
        stackTech={stackTech}
        setStackTech={setStackTech}
      />
      {/* <BackEndTechComponentContainer
        stackTitle={stackTitle}
        setStackTitle={setStackTitle}
        stackTech={stackTech}
        setStackTech={setStackTech}
      />
      <DatabaseTechComponentContainer
        stackTitle={stackTitle}
        setStackTitle={setStackTitle}
        stackTech={stackTech}
        setStackTech={setStackTech}
      />
      <WebfarmworkTechComponentContainer
        stackTitle={stackTitle}
        setStackTitle={setStackTitle}
        stackTech={stackTech}
        setStackTech={setStackTech}
      />
      <CloudDevOpsTechComponentContainer
        stackTitle={stackTitle}
        setStackTitle={setStackTitle}
        stackTech={stackTech}
        setStackTech={setStackTech}
      />
      <MobilityTechComponentContainer
        stackTitle={stackTitle}
        setStackTitle={setStackTitle}
        stackTech={stackTech}
        setStackTech={setStackTech}
      /> */}
    </div>
  );
};

export default RightStackTechs;
