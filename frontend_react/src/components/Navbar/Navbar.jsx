import React, { useState } from 'react';
import {HiMenuAlt4 ,HiX} from "react-icons/hi";
import {motion} from 'framer-motion';
//import useDarkMode from 'use-dark-mode';
//import { DarkModeToggle } from "react-dark-mode-toggle-2";




import {images} from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle,setToggle] = useState(false);

  const [isDarkMode, setIsDarkMode] = React.useState(false);


  return (
   <nav className="app__navbar">
      <div className="app__navbar-logo">
       <a href="#home"> <img src={images.mainLogoSVG} alt="logo" /></a>
      </div>
      <ul className="app__navbar-links">
     {/*   {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li >
        ))}*/}
        <li className="app__flex p-text"><div /><a href="#home">home</a> </li>
        <li className="app__flex p-text"><div /><a href="#about">about</a> </li>
        <li className="app__flex p-text"><div /><a href="#work">projects</a> </li>
        <li className="app__flex p-text"><div /><a href="#skills">skills</a> </li>
        <li className="app__flex p-text"><div /><a href="#contact">contact</a> </li>
      </ul>

    {/*  <DarkModeToggle className='DarkModeButton'
      onChange={setIsDarkMode}
      isDarkMode={isDarkMode} 
      size={75}
    />
   */ }

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
               {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              
              
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
