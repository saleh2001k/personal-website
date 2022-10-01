import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiUpwork } from 'react-icons/si';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.linkedin.com/in/saleh-al-mashni-264b211a3">
      <div className='app__social-linkedin'>
        <BsLinkedin  />
      </div>
    </a>

    <a href="https://github.com/saleh2001k">
      <div className='app__social-github'>
        <BsGithub />
      </div>
    </a>

    <a href="https://www.upwork.com/freelancers/~014b61fac5d7856499 ">
      <div className='app__social-upwork'>
        <SiUpwork />
      </div>
    </a>
  </div>
);
//https://www.linkedin.com/in/saleh-al-mashni-264b211a3
export default SocialMedia;


