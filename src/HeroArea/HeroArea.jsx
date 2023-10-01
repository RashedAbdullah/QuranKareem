import React from 'react';
import './HeroArea.css';

import { FaMagnifyingGlass } from "react-icons/fa6";

const HeroArea = () => {
  return (
    <div dir='rtl' className='HeroAreaMainDiv'>
        
        <div className="WelcomeMsg">
            <h4>مرحبا بك في ساحة القرآن الكريم</h4>
            <p>قال النبي صلى الله عليه وسلم: إنما القرآن نزل من الله رب العالمين وإنما هذا القرآن يهدي للتي هي أقوم</p>
        </div>

        <form action="">
          <div className="SearchBox">
              <div className="searchBoxAndIcon">
                  <input className='inputStyle' type="search" placeholder='ابحث عن سورة أو آية' />  
              <div className="SearchIconBox">
                <button><FaMagnifyingGlass /></button>
              </div>
              </div>
          </div>
        </form>
    </div>
  )
}

export default HeroArea;