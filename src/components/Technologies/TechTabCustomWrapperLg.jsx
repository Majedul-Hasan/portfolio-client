import LeftNavs from './LeftNavs';
import RightStackTechs from './RightStackTechs';

const TechTabCustomWrapperLg = ({
  stackTech,
  setStackTech,
  stackTitle,
  setStackTitle,
}) => {
  return (
    <div className='techTabCustomWrapper hidden lg:block'>
      <div className='techTabInner flex items-start align-items-start'>
        <LeftNavs
          stackTitle={stackTitle}
          setStackTitle={setStackTitle}
          setStackTech={setStackTech}
        />
        <RightStackTechs
          stackTitle={stackTitle}
          setStackTitle={setStackTitle}
          stackTech={stackTech}
          setStackTech={setStackTech}
        />
      </div>
    </div>
  );
};

export default TechTabCustomWrapperLg;
