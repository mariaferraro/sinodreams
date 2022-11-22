import '../css/Whatsapp.css';
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp(){
    return(
     <div className='whatsapp-btn'>
        <a href='http://wa.me/+8618621104317' target='_blank' rel='noreferrer' className='whatsapp-icon'><FaWhatsapp /></a>
     </div>
    );   
}

export default Whatsapp;