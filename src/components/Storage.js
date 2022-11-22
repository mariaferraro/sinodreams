import '../css/Storage.css';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


function Storage(props){

  // Traducción
  const [t, i18n] = useTranslation('global');

    // Animación
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, [])

    return(
      <section id='Storage'>
       <div className='container'>
        <div className='storage-top text-center'>
         <h2>{t('Storage.title')}</h2>
         <p>{t('Storage.info')}</p>
         <Link to='Contact' smooth={true} duration={1000} className='btn'>
              <span>{t('Storage.button')}</span>
         </Link>
        </div>
        <div className='storage-img' data-aos='fade-up'>
           <img src={require('../images/img-storage.jpg')} alt=''/>
        </div>
       </div>
      </section>
    );   
}

export default Storage;