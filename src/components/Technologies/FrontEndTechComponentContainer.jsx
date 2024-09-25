import React from 'react';
import NavigationContainer from './NavigationContainer';
import TabContentComponent from './TabContentComponent';

const FrontEndTechComponentContainer = ({
  stackTech,
  setStackTech,
  stackTitle,
  setStackTitle,
}) => {
  console.log(stackTech, stackTitle);

  return (
    <div
      className={`tab-pane  fade show transition-opacity delay-1000 linear  ${
        stackTitle === 'frontend' ? 'active' : 'hidden'
      }`}>
      <div className='tabPaneInnerWrapper'>
        <NavigationContainer>
          <button
            className={`nav-link ${stackTech === 'React' ? 'active' : ''}`}
            onClick={() => setStackTech('React')}>
            React
          </button>
          <button
            className={`nav-link ${stackTech === 'Next' ? 'active' : ''}`}
            onClick={() => setStackTech('Next')}>
            Next
          </button>
          {/* <button
            className={`nav-link ${stackTech === 'VUE js' ? 'active' : ''}`}
            onClick={() => setStackTech('VUE js')}>
            Vue js
          </button> */}
          <button
            className={`nav-link ${stackTech === 'HTML' ? 'active' : ''}`}
            onClick={() => setStackTech('HTML')}>
            HTML
          </button>
          <button
            className={`nav-link ${stackTech === 'CSS' ? 'active' : ''}`}
            onClick={() => setStackTech('CSS')}>
            CSS
          </button>
        </NavigationContainer>

        <div className='tab-content'>
          <TabContentComponent
            stackTech={stackTech}
            techName='React'
            techDetail='React is a free and open-source JavaScript toolkit for developing UI
          components. Meta (previously Facebook) and developers and companies
          maintain it. Next.js may leverage React to build single-page, mobile,
          or server-rendered apps. React just manages state and renders it to
          the DOM, therefore constructing React apps requires other frameworks
          for routing and client-side functionality'
            techLogoUrl='https://idigitalise.net/wp-content/uploads/2023/01/React-1.svg'
          />
          <TabContentComponent
            stackTech={stackTech}
            techName='Next'
            techDetail='Angular is a framework for constructing HTML and TypeScript
                single-page client apps. TypeScript powers Angular. It
                implements core and optional functionality as TypeScript
                libraries you import.'
            // techLogoUrl='https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png'
            // techLogoUrl='https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png'
            techLogoUrl='https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/29/Rlogical-Blog-Images-thumbnail.png'
          />
          <TabContentComponent
            stackTech={stackTech}
            techName='VUE js'
            techDetail='Vue js a JavaScript UI framework. It builds on HTML, CSS, and
                JavaScript to give a declarative and component-based programming
                architecture for making simple or complex user interfaces.'
            techLogoUrl='https://idigitalise.net/wp-content/uploads/2023/01/VUE-js-1.svg'
          />
          <TabContentComponent
            stackTech={stackTech}
            techName='HTML'
            techDetail='HTML, which is an acronym for Hyper Text Markup Language, is a
                language that is used on the internet for the purpose of
                creating structured texts as well as web pages.'
            techLogoUrl='https://idigitalise.net/wp-content/uploads/2023/01/CSS-1.svg'
          />
          <TabContentComponent
            stackTech={stackTech}
            techName='CSS'
            techDetail='CSS (Cascading Style Sheets) is used to style and layout web
                pages, such as by changing the font, color, size, and spacing,
                or by adding animations and other ornamental features.'
            techLogoUrl='https://idigitalise.net/wp-content/uploads/2023/01/HTML-1.svg'
          />
        </div>
      </div>
    </div>
  );
};

export default FrontEndTechComponentContainer;
