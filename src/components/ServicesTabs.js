import '../css/ServicesTabs.css';
import { BsPersonCheck, BsCardChecklist, BsBuilding, BsShop } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

function ServicesTabs({toggleTab, toggleState}){

    // Animación
    useEffect(() => {
      Aos.init({ duration: 2000 }); 
    }, [])

  // Traducción
  const [t, i18n] = useTranslation('global');

    return(
        <div className='services-tabs ipad-pc-only' data-aos='fade-up'>
        
        <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}>
          <BsPersonCheck/>
          {t('Services.vendor-validation')}
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}>
          <BsCardChecklist/>
          {t('Services.sourcing')}
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}>
          <BsBuilding/>
          {t('Services.factory-visit')}
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}>
          <BsShop/>
          {t('Services.market-visit')}
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}>
          <h4>{t('Services.vendor-validation')}</h4>
          <p>
          {t('Services.vendor-validation-info')}<br/>
            <br/>
            <ul>
              <li>{t('Services.vendor-validation-bullet1')}</li>
              <li>{t('Services.vendor-validation-bullet2')}</li>
              <li>{t('Services.vendor-validation-bullet3')}</li>
              <li>{t('Services.vendor-validation-bullet4')}</li>
              <li>{t('Services.vendor-validation-bullet5')}</li>
            </ul>
            <br/>
          </p>
          <Link to='Contact' smooth={true} duration={1000} className='btn'>
              <span>{t('Services.button')}</span>
          </Link>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h4>{t('Services.sourcing')}</h4>
          <p>{t('Services.sourcing-info')}
          <br/>
          <ul>
              <li>{t('Services.sourcing-bullet1')}</li>
              <li>{t('Services.sourcing-bullet2')}</li>
              <li>{t('Services.sourcing-bullet3')}</li>
           </ul>
           <br/>
          </p>
          <Link to='Contact' smooth={true} duration={1000} className='btn'>
              <span>{t('Services.button')}</span>
          </Link> 
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h4>{t('Services.factory-visit')}</h4>
          <p>{t('Services.factory-visit-info')}
          <br/>
          <ul>
              <li>{t('Services.factory-visit-bullet1')}</li>
              <li>{t('Services.factory-visit-bullet2')}</li>
              <li>{t('Services.factory-visit-bullet3')}</li>
              <li>{t('Services.factory-visit-bullet4')}</li>
          </ul>
          <br/>
          </p>
          <Link to='Contact' smooth={true} duration={1000} className='btn'>
              <span>{t('Services.button')}</span>
          </Link>
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h4>{t('Services.market-visit')}</h4>
          <p>{t('Services.market-visit-info')}
          <br/>
          <ul>
              <li>{t('Services.market-visit-bullet1')}</li>
              <li>{t('Services.market-visit-bullet2')}</li>
              <li>{t('Services.market-visit-bullet3')}</li>
              <li>{t('Services.market-visit-bullet4')}</li>
          </ul>
          <em>{t('Services.market-visit-note')}</em>
          <br/><br/>
          </p>
          <Link to='Contact' smooth={true} duration={1000} className='btn'>
              <span>{t('Services.button')}</span>
          </Link>
        </div>
      </div>


        </div>
    );   
}

export default ServicesTabs;