import React from 'react';
import './hero.css';
import Service from '../Service/Service';
import Form from '../Form/Form';

const Hero = () => {
  return (
    <div className='hero'>
          <div className='hero-left'>
                    <Service/>
          </div>
          <div className='hero-right'>
                    
                      <Form/>
                    
          </div>
      
    </div>
  )
}

export default Hero
