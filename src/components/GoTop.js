import React from 'react';
import '../css/GoTop.css';
import { FaAngleUp } from "react-icons/fa";
import { useEffect, useState } from 'react';

function GoTop(){

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 800){
                setBackToTopButton(true)
            }else{
                setBackToTopButton(false)
            }
        })
    }, [])

    return <div className='button'>
        {backToTopButton && (
        <div className='gotop-btn'>
          <a href='#top' className='top-icon'><FaAngleUp /></a>
        </div>
        )}
    </div>;
}

export default GoTop;