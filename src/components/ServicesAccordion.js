import React from 'react';
import '../css/ServicesAccordion.css';
import { BsPersonCheck, BsCardChecklist, BsBuilding, BsShop } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

function ServicesAccordion({toggleTab, toggleState}){

        // Traducción
    const [t, i18n] = useTranslation('global');

    // Animación
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, [])
  
    return(

      <div className='services-accordion mobile-only' data-aos='fade-up'>

        <div className={toggleState === 1 ? 'accordion-item active' : 'accordion-item'}>
           <div className='title' onClick={() => toggleTab(1)}>
              <h4><BsPersonCheck/> {t('Services.vendor-validation')}</h4>
              <span>{toggleState === 1 ? ' ' : '+'}</span>
          </div>
          <div className={toggleState === 1 ? 'accordion-content show' : 'accordion-content'}>
              <p>
              {t('Services.vendor-validation-info')}
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
        </div>

        <div className={toggleState === 2 ? 'accordion-item active' : 'accordion-item'}>
            <div className='title' onClick={() => toggleTab(2)}>
                <h4><BsCardChecklist/> {t('Services.sourcing')}</h4>
                <span>{toggleState === 2 ? ' ' : '+'}</span>
            </div>
            <div className={toggleState === 2 ? 'accordion-content show' : 'accordion-content'}>
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
        </div>

        <div className={toggleState === 3 ? 'accordion-item active' : 'accordion-item'}>
            <div className='title' onClick={() => toggleTab(3)}>
                <h4><BsBuilding/> {t('Services.factory-visit')}</h4>
                <span>{toggleState === 3 ? ' ' : '+'}</span>
            </div>
            <div className={toggleState === 3 ? 'accordion-content show' : 'accordion-content'}>
                <p>
                {t('Services.factory-visit-info')}
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
        </div>

        <div className={toggleState === 4 ? 'accordion-item active' : 'accordion-item'}>
            <div className='title' onClick={() => toggleTab(4)}>
                <h4><BsShop/> {t('Services.market-visit')}</h4>
                <span>{toggleState === 4 ? ' ' : '+'}</span>
            </div>
            <div className={toggleState === 4 ? 'accordion-content show' : 'accordion-content'}>
                <p>
                {t('Services.market-visit-info')}
                <br/>
                <ul>
                    <li>{t('Services.market-visit-bullet1')}</li>
                    <li>{t('Services.market-visit-bullet2')}</li>
                    <li>{t('Services.market-visit-bullet3')}</li>
                    <li>{t('Services.market-visit-bullet4')}</li>
                </ul>
                <br/>
                </p>
                <Link to='Contact' smooth={true} duration={1000} className='btn'>
                    <span>{t('Services.button')}</span>
                </Link>
            </div>
        </div>

      </div>


    );
}

export default ServicesAccordion;