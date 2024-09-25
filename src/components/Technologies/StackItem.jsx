import React from 'react';

const StackItem = ({
  stackTitle,
  imgSrc,
  imgSrcActive,
  stackName,
  setStackTitle,
  setStackTech,
  firstStackTech,
}) => {
  const clickHandler = () => {
    setStackTitle(stackTitle);
    setStackTech(firstStackTech);
    console.log({ stackName, stackTitle });
  };
  return (
    <div
      className={` bg-yellow-50 dark:bg-transparent   cursor-pointer flex items-center py-6 px-9 transition-all delay-300 text-decoration-none stack-item ${
        stackTitle === stackName ? 'active ' : '  '
      }`}
      onClick={clickHandler}>
      <div className='imgWrapper'>
        {stackTitle !== stackName ? (
          <img
            alt={stackTitle}
            className='img-fluid mainImg ls-is-cached lazyloaded'
            src={imgSrc}
          />
        ) : (
          <img
            alt={`${stackTitle}-hover`}
            className='img-fluid hoverImg ls-is-cached lazyloaded'
            src={imgSrcActive}
          />
        )}
      </div>
      <div
        className={`textOuter -3 ${
          stackTitle === stackName
            ? 'dark:text-light-blue-500'
            : ' dark:text-gray-100 '
        }`}>
        {' '}
        {stackTitle}
      </div>
    </div>
  );
};

export default StackItem;
