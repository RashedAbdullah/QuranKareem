import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { MdOutlineLanguage, MdOutlinePerson2 } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";

const Header = () => {
  return (
    <div className='HeaderMainDiv'>
        
        <div className="logoAndName">
            <Link className='aToLink' to="/"><div className="logo"></div></Link>
            <div className="siteName">QuranulKareem.com</div>
        </div>

        <div className="switchLangLightDark">
            <div className='dropdown'>
              <div className='dropdown-toggle' to="">
                  <MdOutlineLanguage className='text-light heightWidth'/>
                <ul className='dropdown-menu switchLang'>
                  <li><Link className='Links' to="">العربية</Link></li> 
                  <li><Link className='Links' to="">English</Link></li>
                  <li><Link className='Links' to="">বাংলা</Link></li>
                </ul>
              </div>
            </div>

            <div className='dropdown'>
              <div className='dropdown-toggle' to="">
                  <CgDarkMode className='text-light heightWidth'/>
                <ul className='dropdown-menu switchLang'>
                  <li><Link className='Links' to="">Dark</Link></li> 
                  <li><Link className='Links' to="">Light</Link></li>
                </ul>
              </div>
            </div>

            <div className='dropdown'>
              <Link className="lightandDark">
                <MdOutlinePerson2 className='text-light heightWidth' />
              </Link>
            </div>

        </div>

    </div>
  )
}

export default Header;