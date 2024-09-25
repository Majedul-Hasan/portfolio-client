import { useState } from 'react';
import TechTabCustomWrapperLg from './TechTabCustomWrapperLg';

const SectionContent = () => {
  const [stackTitle, setStackTitle] = useState('frontend');
  const [stackTech, setStackTech] = useState('React');
  return (
    <div className='flex flex-row'>
      <div className='col-12 w-full'>
        <TechTabCustomWrapperLg
          stackTitle={stackTitle}
          setStackTitle={setStackTitle}
          stackTech={stackTech}
          setStackTech={setStackTech}
        />
        {/* mobile */}
        <div className='techTabCustomWrapperMobile d-block lg:hidden  bg'>
          <div className='singleTechType'>
            <div className='titleMobile'> Frontend</div>
            <div className='innerTechMobile'>
              <div
                className='iconWrapper'
                data-name='React'>
                <img
                  alt='React'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/React-1.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MTkxNToxMzY=-1'
                  src='data:image/svg+xml;nitro-empty-id=MTkxNToxMzY=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name='Angular'>
                <img
                  alt='Angular'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/Angular.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MTkxODoxMzg=-1'
                  src='data:image/svg+xml;nitro-empty-id=MTkxODoxMzg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name='Vue js'>
                <img
                  alt='VUE js'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/VUE-js-1.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MTkyMToxMzg=-1'
                  src='data:image/svg+xml;nitro-empty-id=MTkyMToxMzg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name='HTML'>
                <img
                  alt='CSS'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/CSS-1.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MTkyNDoxMzI=-1'
                  src='data:image/svg+xml;nitro-empty-id=MTkyNDoxMzI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name='CSS'>
                <img
                  alt='HTML'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/HTML-1.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MTkyNzoxMzQ=-1'
                  src='data:image/svg+xml;nitro-empty-id=MTkyNzoxMzQ=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
            </div>
          </div>
          <div className='singleTechType'>
            <div className='titleMobile'> Backend</div>
            <div className='innerTechMobile'>
              <div
                className='iconWrapper'
                data-name='Node.js'>
                <img
                  alt='Node js'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/Node-js.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MTkzODoxMzg=-1'
                  src='data:image/svg+xml;nitro-empty-id=MTkzODoxMzg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name='Laravel'>
                <img
                  alt='Laravel'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/Laravel.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MTk0MToxMzg=-1'
                  src='data:image/svg+xml;nitro-empty-id=MTk0MToxMzg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name='CakePHP'>
                <img
                  alt='PHP'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/PHP.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MTk0NDoxMzA=-1'
                  src='data:image/svg+xml;nitro-empty-id=MTk0NDoxMzA=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name='Codeigniter'>
                <img
                  alt='Code igniter'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/Code-igniter.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MTk0NzoxNDg=-1'
                  src='data:image/svg+xml;nitro-empty-id=MTk0NzoxNDg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
            </div>
          </div>
          <div className='singleTechType'>
            <div className='titleMobile'> Database</div>
            <div className='innerTechMobile'>
              <div
                className='iconWrapper'
                data-name='Elasticsearch '>
                <img
                  alt='Elasticsearch'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/Elasticsearch.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MTk1ODoxNTA=-1'
                  src='data:image/svg+xml;nitro-empty-id=MTk1ODoxNTA=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name='MySQL'>
                <img
                  alt='My SQL'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/My-SQL.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MTk2MToxMzY=-1'
                  src='data:image/svg+xml;nitro-empty-id=MTk2MToxMzY=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name='MongoDB'>
                <img
                  alt='Mongo DB'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/Mongo-DB.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MTk2NDoxNDA=-1'
                  src='data:image/svg+xml;nitro-empty-id=MTk2NDoxNDA=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name='Microsoft'>
                <img
                  alt='Microsoft'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/Microsoft.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MTk2NzoxNDI=-1'
                  src='data:image/svg+xml;nitro-empty-id=MTk2NzoxNDI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name='Oracle'>
                <img
                  alt='Oracle'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/Oracle.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MTk3MDoxMzY=-1'
                  src='data:image/svg+xml;nitro-empty-id=MTk3MDoxMzY=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
            </div>
          </div>
          <div className='singleTechType'>
            <div className='titleMobile'> Web Frameworks</div>
            <div className='innerTechMobile'>
              <div
                className='iconWrapper'
                data-name='Wordpress'>
                <img
                  alt='Wordpress'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/Wordpress.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MTk4MToxNDI=-1'
                  src='data:image/svg+xml;nitro-empty-id=MTk4MToxNDI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name='Shopify'>
                <img
                  alt='Shopify'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/Shopify.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MTk4NDoxMzg=-1'
                  src='data:image/svg+xml;nitro-empty-id=MTk4NDoxMzg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name='WooCommerce'>
                <img
                  alt='WooCommerce'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/WooCommerce.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MTk4NzoxNDY=-1'
                  src='data:image/svg+xml;nitro-empty-id=MTk4NzoxNDY=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name='Drupal'>
                <img
                  alt='Drupal'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/Drupal.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MTk5MDoxMzY=-1'
                  src='data:image/svg+xml;nitro-empty-id=MTk5MDoxMzY=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name='Joomla'>
                <img
                  alt='Joomla'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/Joomla.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MTk5MzoxMzY=-1'
                  src='data:image/svg+xml;nitro-empty-id=MTk5MzoxMzY=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name='Magento'>
                <img
                  alt='Magento'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/Magento.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MTk5NjoxMzg=-1'
                  src='data:image/svg+xml;nitro-empty-id=MTk5NjoxMzg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
            </div>
          </div>
          <div className='singleTechType'>
            <div className='titleMobile'> Cloud and DevOps</div>
            <div className='innerTechMobile'>
              <div
                className='iconWrapper'
                data-name='AWS Cloud'>
                <img
                  alt='AWS Cloud'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/AWS-Cloud.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MjAwNzoxNDI=-1'
                  src='data:image/svg+xml;nitro-empty-id=MjAwNzoxNDI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name="Microsoft Azure's">
                <img
                  alt="Microsoft Azure's"
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/Microsoft-Azures.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MjAxMDoxNTc=-1'
                  src='data:image/svg+xml;nitro-empty-id=MjAxMDoxNTc=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name='Google Cloud '>
                <img
                  alt='Google Cloud'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/Google-Cloud.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MjAxMzoxNDg=-1'
                  src='data:image/svg+xml;nitro-empty-id=MjAxMzoxNDg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name='IBM Cloud '>
                <img
                  alt='IBM Cloud'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/IBM-Cloud.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MjAxNjoxNDI=-1'
                  src='data:image/svg+xml;nitro-empty-id=MjAxNjoxNDI=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
            </div>
          </div>
          <div className='singleTechType'>
            <div className='titleMobile'> Mobility</div>
            <div className='innerTechMobile'>
              <div
                className='iconWrapper'
                data-name='iOS'>
                <img
                  alt='iOS'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/iOS.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MjAyNzoxMzA=-1'
                  src='data:image/svg+xml;nitro-empty-id=MjAyNzoxMzA=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name='Android'>
                <img
                  alt='Android'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/Android.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MjAzMDoxMzg=-1'
                  src='data:image/svg+xml;nitro-empty-id=MjAzMDoxMzg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name='Flutter'>
                <img
                  alt='Flutter'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/Flutter.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MjAzMzoxMzg=-1'
                  src='data:image/svg+xml;nitro-empty-id=MjAzMzoxMzg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
              <div
                className='iconWrapper'
                data-name='React Native'>
                <img
                  alt='React Native'
                  nitro-lazy-src='https://idigitalise.net/wp-content/uploads/2023/01/React-Native.svg'
                  className='img-fluid nitro-lazy'
                  decoding='async'
                  nitro-lazy-empty
                  id='MjAzNjoxNDg=-1'
                  src='data:image/svg+xml;nitro-empty-id=MjAzNjoxNDg=-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContent;
