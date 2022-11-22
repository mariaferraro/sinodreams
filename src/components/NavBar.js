import { useRef } from 'react';
import '../css/NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar(){
    
  // Traducción
  const [t, i18n] = useTranslation('global');
  
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    return(
     <header className='container' id='top'>
        <a href='/'><img className='logo' src={require('../images/logo-350px.png')} alt='SinoDreams logo' /></a>
        <nav ref={navRef}>
           <ul>
            <li><Link to="AboutUs" smooth={true} duration={2000} offset={-70} onClick={showNavbar}>{t('Navbar.about')}</Link></li>
            <li><Link to="Services" smooth={true} duration={2000} onClick={showNavbar}>{t('Navbar.services')}</Link></li>
            <li><Link to="Inspection" smooth={true} duration={2000} offset={-70} onClick={showNavbar}>{t('Navbar.inspection')}</Link></li>
            <li><Link to="Storage" smooth={true} duration={2000} onClick={showNavbar}>{t('Navbar.storage')}</Link></li>
            <li><Link to="Contact" smooth={true} duration={2000} onClick={showNavbar}>{t('Navbar.contact')}</Link></li>
            
         <div className="mobile-only">
         <button onClick={() => i18next.changeLanguage('en')} className='language-buttons'><img className='languaje-flags' src={require('../images/English-flag.jpg')} alt='English' /></button>
         <button onClick={() => i18next.changeLanguage('es')} className='language-buttons'><img className='languaje-flags' src={require('../images/Spanish-flag.jpg')} alt='Spanish' /></button>
         <button onClick={() => i18next.changeLanguage('ch')} className='language-buttons'><img className='languaje-flags china-flag' src={require('../images/Chinese-flag.jpg')} alt='Chinese' /></button>
         </div>

         <button className="nav-btn nav-close-btn"	onClick={showNavbar}>
            <FaTimes/>
         </button> 
           </ul>
         </nav>
         <button className="nav-btn" onClick={showNavbar}>
            <FaBars/>
         </button>
         <div className="pc-only">
         <button onClick={() => i18next.changeLanguage('en')} className='language-buttons'><img className='languaje-flags' src={require('../images/English-flag.jpg')} alt='English' /></button>
         <button onClick={() => i18next.changeLanguage('es')} className='language-buttons'><img className='languaje-flags' src={require('../images/Spanish-flag.jpg')} alt='Spanish' /></button> 
         <button onClick={() => i18next.changeLanguage('ch')} className='language-buttons'><img className='languaje-flags china-flag' src={require('../images/Chinese-flag.jpg')} alt='Chinese' /></button> 
         </div>
     </header>
    );
}

export default NavBar;