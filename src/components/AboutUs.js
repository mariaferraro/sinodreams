import '../css/AboutUs.css';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

function AboutUs(props){

  // Traducción
  const [t, i18n] = useTranslation('global');

  // Animación
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, [])

    return(
      <section id='AboutUs' className='AboutUs'>
      <div className='container'>
       <div className='row'>
         <div className='two-columns image-side' data-aos='fade'>
          
         <picture>
              <source type="image/webp" srcSet={require('../images/about-us-img.webp')} />
              <source type="image/jpg" srcSet={require('../images/about-us-img.jpg')} />
              <img src={require('../images/about-us-img.jpg')} alt='About Sino Dreams'/>
          </picture>
          
         </div>
         <div className='two-columns text-side' data-aos='fade'>
          <h2>{props.titulo}</h2>
          <p>{props.texto}</p>
          <Link to='Contact' smooth={true} duration={1000} className='btn'>
            <span>{t('About.contact')}</span>
          </Link>
         </div>
        </div>
       </div>
      </section>
    );   
}

export default AboutUs;