import StackItem from './StackItem';

const LeftNavs = ({ stackTitle, setStackTitle, setStackTech }) => {
  return (
    <div className='flex flex-wrap pl-0 mb-0 m-0 position-relative border-[1px] border-gray-100 list-none  flex-col  nav-pills-custom w-3/12 '>
      <StackItem
        stackTitle='frontend'
        imgSrc='https://idigitalise.net/wp-content/uploads/2022/11/frontend.svg'
        imgSrcActive='https://idigitalise.net/wp-content/uploads/2022/11/frontend-hover.svg'
        stackName={stackTitle}
        setStackTitle={setStackTitle}
        setStackTech={setStackTech}
        firstStackTech='React'
      />
      <StackItem
        stackTitle='backend'
        imgSrc='https://idigitalise.net/wp-content/uploads/2022/11/backend.svg'
        imgSrcActive='https://idigitalise.net/wp-content/uploads/2022/11/backend-hover.svg'
        active={true}
        stackName={stackTitle}
        setStackTitle={setStackTitle}
        setStackTech={setStackTech}
        firstStackTech='Node.js'
      />
      <StackItem
        stackTitle='Database'
        imgSrc='https://idigitalise.net/wp-content/uploads/2022/11/database.svg'
        imgSrcActive='https://idigitalise.net/wp-content/uploads/2022/11/database-hover.svg'
        stackName={stackTitle}
        setStackTitle={setStackTitle}
        setStackTech={setStackTech}
        firstStackTech='Elasticsearch'
      />
      <StackItem
        stackTitle='web framework'
        imgSrc='https://idigitalise.net/wp-content/uploads/2022/11/webframework.svg'
        imgSrcActive='https://idigitalise.net/wp-content/uploads/2022/11/webframework-hover.svg'
        stackName={stackTitle}
        setStackTitle={setStackTitle}
        setStackTech={setStackTech}
        firstStackTech='Wordpress'
      />
      <StackItem
        stackTitle='Cloud and DevOps'
        imgSrc='https://idigitalise.net/wp-content/uploads/2022/11/cloud.svg'
        imgSrcActive='https://idigitalise.net/wp-content/uploads/2022/11/cloud-hover-2.svg'
        active={false}
        stackName={stackTitle}
        setStackTitle={setStackTitle}
        setStackTech={setStackTech}
        firstStackTech='AWS Cloud'
      />
      <StackItem
        stackTitle='Mobility'
        imgSrc='https://idigitalise.net/wp-content/uploads/2022/11/webframework.svg'
        imgSrcActive='https://idigitalise.net/wp-content/uploads/2022/11/webframework-hover.svg'
        stackName={stackTitle}
        setStackTitle={setStackTitle}
        setStackTech={setStackTech}
        firstStackTech='iOS'
      />
    </div>
  );
};

export default LeftNavs;
