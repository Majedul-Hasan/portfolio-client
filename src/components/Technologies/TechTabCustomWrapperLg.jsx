import LeftNavs from './LeftNavs';

const TechTabCustomWrapperLg = ({
  stackTech,
  setStackTech,
  stackTitle,
  setStackTitle,
}) => {
  return (
    <div className='techTabCustomWrapper d-none d-lg-block'>
      <div className='techTabInner d-flex align-items-start'>
        setStackTech
        <LeftNavs
          stackTitle={stackTitle}
          setStackTitle={setStackTitle}
          setStackTech={setStackTech}
        />
        {/*  <RightStackTechs
          stackTitle={stackTitle}
          setStackTitle={setStackTitle}
          stackTech={stackTech}
          setStackTech={setStackTech}
        /> */}
      </div>
    </div>
  );
};

export default TechTabCustomWrapperLg;
