import '../css/Inspection.css';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


function Inspection(){

  // Traducción
  const [t, i18n] = useTranslation('global');

    // Animación
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, [])

    return(
        <section id='Inspection'>
        
        <div className='inspection-text' data-aos='slide-right'>
         <div className='text-container'>
          <h2>{t('Inspection.title')}</h2>
          <p>{t('Inspection.info')}</p>
          <Link to='Contact' smooth={true} duration={1000} className='btn'>
              <span>{t('Inspection.button')}</span>
          </Link>
         </div>
        </div>
        <div className='inspection-img' data-aos='slide-left'>

          <picture>
              <source type="image/webp" srcSet={require('../images/inspection-img.webp')} />
              <source type="image/jpg" srcSet={require('../images/inspection-img.jpg')} />
              <img src={require('../images/inspection-img.jpg')} alt='Product and Quality Inspection'/>
          </picture>

        </div>

        </section>
    );   
}

export default Inspection;