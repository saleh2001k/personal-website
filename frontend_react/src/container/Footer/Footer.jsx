import React, { useState } from 'react';

import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiUpwork } from 'react-icons/si';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email2} alt="email" />
          <a href="mailto:saleh.almashnie@gmail.com" className="p-text">saleh.almashnie@gmail.com</a>
          
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="https://api.whatsapp.com/send?phone=962799714069" className="p-text">+962 799714069</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
            
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>

          <a href='MyResume.pdf' download='Saleh Al-Mashni CV.pdf'>
            <button type="button" className="p-text">Get Resume</button>
          </a>
        </div>
        
        
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}

            <div className="socialMe">
              <a href="https://www.linkedin.com/in/saleh-ayman-264b211a3">
            <div className='linkedin'>
              <BsLinkedin className='linked' />
            </div>
          </a>

          <a href="https://github.com/saleh2001k">
            <div className='github'>
              <BsGithub />
            </div>
          </a>

          <a href="https://www.upwork.com/freelancers/~014b61fac5d7856499">
            <div className='upwork'>
              <SiUpwork />
            </div>
          </a>
        </div>


    </>
    
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);