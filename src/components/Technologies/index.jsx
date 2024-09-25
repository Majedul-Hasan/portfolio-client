import SectionContent from './SectionContent';
import './Technologies.style.css';

const Technologies = () => {
  return (
    <>
      <section
        className='pb-28 techRepeater nitro-offscreen '
        id='projects'>
        <div className='container'>
          <h2 className='myfont-fraunces text-3xl sm:text-4xl font-extrabold underline-offset-8 pb-8'>
            Web technologies I work with
          </h2>
          <SectionContent />
        </div>
      </section>
    </>
  );
};

export default Technologies;
