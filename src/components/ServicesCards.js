import '../css/ServicesCards.css';
import { BsPersonCheck, BsCardChecklist, BsBuilding, BsShop, BsArrowRightShort } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import { Link, animateScroll as scroll } from "react-scroll";

function ServicesCards({url, servicio, setToggleState, numero}){

  // Traducción
  const [t, i18n] = useTranslation('global'); 

  function renderIcon() {
    if(url === 'VendorValidation'){
      return <BsPersonCheck />;
    }else if(url === 'Sourcing'){
      return <BsCardChecklist />;
    }else if(url === 'FactoryVisit'){
      return <BsBuilding />;
    }else if(url === 'MarketVisit'){
      return <BsShop />;
    }
  }

    return(
      <div className='ServicesCards'>
       <div className='icon-services'>
        {renderIcon()}
       </div>
        <h4>{servicio}</h4>
        <Link to='Services' smooth={true} duration={500} onClick={() => setToggleState(numero)}>{t('Cards.read-more')} <BsArrowRightShort/></Link>
      </div>
    );   
}

export default ServicesCards;