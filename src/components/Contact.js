import '../css/Contact.css';
import FormVideoShanghai from '../images/Form-Video-Shanghai.mp4';
import { FaInstagram } from 'react-icons/fa';
import { BiMapPin } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import ReCAPTCHA from 'react-google-recaptcha';

function Contact(){

  // Traducción
  const [t, i18n] = useTranslation('global');

    // Animación
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, [])

      // Captcha
      const [captchaValido, setCaptchaValido] = useState(null);
      const [usuarioValido, setUsuarioValido] = useState(false);

      const captcha = useRef(null);

      const onChange = () =>{
        if(captcha.current.getValue()){
          console.log('Si');
        }
      }

    // Envio de email
      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();

        if(captcha.current.getValue()){
          setUsuarioValido(true);
          
        emailjs.sendForm('service_2axx806', 'template_9xrk2v3', form.current, 'pLeM7r9uw5LLdlnpX')
          .then((result) => {
              console.log(result.text);
              swal({
                title:t('Contact.title-alert'),
                text:t('Contact.alert'),
                icon:'success'
              });
              document.getElementById("ContactForm").reset();
          }, (error) => {
              console.log(error.text);
              swal({
                title:t('Contact.title-error'),
                text:t('Contact.error'),
                icon:'error'
              });
          });
        }else{
          setUsuarioValido(false);
        }
      };

  return(
      <section id='Contact'>

        <div className='overlay'></div>
        <video src={FormVideoShanghai} poster='../images/Fondo-contact.jpg' autoPlay loop muted className='video-background' />

      <div className='content'>
       <div className='container'>
        <div className='row'>

          <div className='two-columns text-column' data-aos='fade-right'>
             <h2 className='contact-title'>
              {t('Contact.title')}
             </h2>
             <p>{t('Contact.info')}</p>
             <p><BiMapPin/> {t('Contact.address')}</p>
             <p><BsTelephone/> +86 186-2110-4317</p>
             <p><FaInstagram/> <a href='https://www.instagram.com/sinodreams/' target='_blank' rel='noreferrer'>@sinodreams</a></p>

          </div>

          <div className='two-columns form-column text-center' data-aos='fade-left'>
           <form ref={form} onSubmit={sendEmail} id='#ContactForm'>
           <input type="hidden" name="contact_number" />
           <input type="text" placeholder={t('Contact.input-nombre')} id="user_name" name="user_name" required />
           <input type="email" placeholder={t('Contact.input-email')} id="user_email" name="user_email" required />
           <input type="tel" placeholder={t('Contact.input-phone')} id="user_phone" name="user_phone" required />
           <textarea placeholder={t('Contact.input-mensaje')} id="message" name="message" required ></textarea>
            
            <div className='contact-captcha'>
              <ReCAPTCHA
                sitekey="6Lc6pyQjAAAAAAHghPMHaGjfBGH3ugNfa0P71z0D"
                onChange={onChange}
              />
           </div>
           <button type="submit" className='btn' value="Send">{t('Contact.input-button')}</button>
           </form>
          </div>

        </div>
       </div>
      </div>

      </section>
    );  
}

export default Contact;