import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Hero from './components/Hero.js';
import ServicesCards from './components/ServicesCards.js';
import AboutUs from './components/AboutUs.js';
import StepsCards from './components/StepsCards.js';
import ServicesTabs from './components/ServicesTabs.js';
import ServicesAccordion from './components/ServicesAccordion.js';
import Storage from './components/Storage.js';
import Inspection from './components/Inspection.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Whatsapp from './components/Whatsapp.js';
import GoTop from './components/GoTop.js';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css';
import DotLoader from "react-spinners/DotLoader";
import { Link, animateScroll as scroll } from "react-scroll";


function App() {

  // Loading
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

    // Animación
    useEffect(() => {
       Aos.init();
    }, [])

  // Traducción
  const [t, i18n] = useTranslation('global');

  // Tabs, cards y Acordeon
  const [toggleState, setToggleState] = useState(1);

  return (
    <div className="App">
      
  { loading ? (
    <DotLoader color={"#254597"} loading={loading} size={50} aria-label="Loading Spinner" data-testid="loader" />
  ) : (
    <div>
      <NavBar />
      <Hero />

      <section id='services-cards'>
       <div className='container'>
        <div className='row'>
          <ServicesCards 
           servicio={t('Cards.vendor-validation')}
           url='VendorValidation'
           numero={1}
           setToggleState={setToggleState} />
          <ServicesCards 
           servicio={t('Cards.sourcing')}
           url='Sourcing'
           numero={2}
           setToggleState={setToggleState}  />
           <ServicesCards 
            servicio={t('Cards.factory-visit')}
            url='FactoryVisit'
            numero={3}
            setToggleState={setToggleState} />
           <ServicesCards 
            servicio={t('Cards.market-visit')}
            url='MarketVisit'
            numero={4}
            setToggleState={setToggleState} />
         </div>
       </div>
      </section>

      <AboutUs
      titulo={t('About.title')}
      texto={t('About.text')}
      />

      <section id='steps'>
       <div className='container'>
        <div className='row'>
         <div className='steps-text' data-aos='fade' data-aos-duration="1000">
          <h2>{t('Steps.title')}</h2>
          <p>{t('Steps.subtitle')}</p>
          <Link to='Contact' smooth={true} duration={1000} className='btn'>
              <span>{t('Steps.button')}</span>
          </Link>
         </div>
         <StepsCards 
         number='01'
         title={t('Steps.card01-title')}
         info={t('Steps.card01-text')}
         delay='0'
         />
         <StepsCards 
         number='02'
         title={t('Steps.card02-title')}
         info={t('Steps.card02-text')}
         delay='100'
         />
         <StepsCards 
         number='03'
         title={t('Steps.card03-title')}
         info={t('Steps.card03-text')}
         delay='200'
         />
         </div>
       </div>
      </section>


      <section id='Services'>
      <div className='container'>
       <div className='services-top text-center'>
         <h2>{t('Services.title')}</h2>
         <p>{t('Services.subtitle')}</p>
       </div>

       <ServicesTabs
       toggleState={toggleState}
       toggleTab={setToggleState} 
       />
       <ServicesAccordion
       toggleState={toggleState}
       toggleTab={setToggleState} 
       />

       </div>
      </section>

      <Inspection/>

      <Storage/>
      
      <Contact/>

      <Footer/>

      <Whatsapp />

      <GoTop />
   </div>
    )}

    </div>

  );
}

export default App;