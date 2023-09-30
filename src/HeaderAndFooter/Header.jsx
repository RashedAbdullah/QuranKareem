import React from 'react';
import './Header.css';
import { MdOutlineLanguage, MdOutlinePerson2 } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";

const Header = () => {
  return (
    <div className='HeaderMainDiv'>
        
        <div className="logoAndName">
            <a href=""><div className="logo"></div></a>
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