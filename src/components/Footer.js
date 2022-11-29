import '../css/Footer.css';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Footer(){

  // Traducción
  const [t, i18n] = useTranslation('global');

    return(
      <section id='Footer'>
       <div className='container'>
        <div className='row'>

          <div className='text-center'>

            <picture>
              <source type="image/webp" srcSet={require('../images/logo-vertical-sinodreams.webp')} />
              <source type="image/png" srcSet={require('../images/logo-vertical-sinodreams.png')} />
              <img src={require('../images/logo-vertical-sinodreams.png')} alt="Sino Dreams Logo" className='footer-logo'/>
            </picture>
            
            <hr/>
            
            <nav className='footer-social'>
              <a href='https://www.instagram.com/sinodreams/' target='_blank' rel='noreferrer'><FaInstagram/></a>
              <a href='http://wa.me/+8618621104317' target='_blank' rel='noreferrer'><FaWhatsapp/></a>
            </nav>
            <div className='footer-terms'>
                <nav>
                    <a href=''></a>
                </nav>
            </div>
            <div className='footer-copyright'>
                <p>{t('Footer.copyright')}</p>
            </div>
          </div>

        </div>
       </div>
      </section>
    );   
}

export default Footer;