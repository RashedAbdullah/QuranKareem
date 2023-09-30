import React from 'react';
import './Header.css';
import { MdOutlineLanguage, MdOutlinePerson2 } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='HeaderMainDiv'>
        
        <div className="logoAndName">
            <Link className='aToLink' to="/"><div className="logo"></div></Link>
            <div className="siteName">QuranulKareem.com</div>
        </div>

        <div className="switchLangLightDark">
            <a href=""><div className="switchLang"> <MdOutlineLanguage/></div></a>
            <a href=""><div className="lightandDark"><CgDarkMode /></div></a>
            <a href=""><div className="lightandDark"><MdOutlinePerson2 /></div></a>
        </div>

    </div>
  )
}

export default Header;