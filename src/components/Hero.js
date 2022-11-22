import '../css/Hero.css';
import { useTranslation } from 'react-i18next';
import { Link, animateScroll as scroll } from "react-scroll";

document.addEventListener("mousemove", parallax);
function parallax(event) {
  if (window.innerWidth >= 1024) {
  this.querySelectorAll(".img-column .img-move").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
 }  
}

function Hero(){

  // Traducción
  const [t, i18n] = useTranslation('global');

    return(
      <section id='Hero-1'>
       <div className='container'>
        <div className='row'>
          <div className='text-column'>
             <h1 className='hero-title'>
              {t('Hero.title')}
              {t('Hero.china')}
             </h1>
             <Link to='Services' smooth={true} duration={1000} className='btn'>
              <span>{t('Hero.contact')}</span>
             </Link>
          </div>
          <div className='img-column text-center'>
            
          <picture>
              <source type="image/webp" srcSet={require('../images/top-Hero-1.webp')} />
              <source type="image/png" srcSet={require('../images/top-Hero-1.png')} />
              <img value="0" src={require('../images/top-Hero-1.png')} alt='Hero-img' className='hero-img1'/>
          </picture>
          <picture>
              <source type="image/webp" srcSet={require('../images/top-Hero-2.webp')} />
              <source type="image/png" srcSet={require('../images/top-Hero-2.png')} />
              <img value="-3" src={require('../images/top-Hero-2.png')} alt='Hero-img' className='hero-img2 img-move'/>
          </picture>
          <picture>
              <source type="image/webp" srcSet={require('../images/top-Hero-3.webp')} />
              <source type="image/png" srcSet={require('../images/top-Hero-3.png')} />
              <img value="3" src={require('../images/top-Hero-3.png')} alt='Hero-img' className='hero-img3 img-move'/>
          </picture>

          </div>
        </div>
       </div>
      </section>
    );   
}

export default Hero;