import '../css/StepsCards.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function StepsCards(props){

    // Animación
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, [])
    
    return(
      <div className={'StepsCards card-'+props.number} data-aos='fade-right' data-aos-delay={props.delay}>
       <div className='number-card'>
         <span>{props.number}</span>
       </div>
        <h5 className='title-card text-left'>{props.title}</h5>
        <p className='text-left'>{props.info}</p>
      </div>
    );   
}

export default StepsCards;
