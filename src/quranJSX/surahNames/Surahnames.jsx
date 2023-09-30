import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';


const numbers = `۰۱۲۳۴۵۶۷۸۹`;

const Surahnames = () => {

  return (

    <div dir='rtl' className='SurahNamesMainDivOutside'>
        <div className='HeadlineOfSurah'>
            <h2 className='text-center'>أَسْمَاءُ السُوَرِ القُرْآنِية</h2>
        </div>

        <Link className='LinkOfSurahNameAndNumber' to="/Surah1">
                  
                  <div className='insideofSurahNumber'>
                    <p>۱</p>
                  </div>
                  <div className='surahName'>
                  <p>السُوَرِالقُرْآنِية</p>
                  </div>
              
        </Link>

        <Link className='LinkOfSurahNameAndNumber' to="/Surah2">
                  
                  <div className='insideofSurahNumber'>
                    <p>۲</p>
                  </div>
                  <div className='surahName'>
                  <p>السُوَرِالقُرْآنِية</p>
                  </div>
              
        </Link>

        
    </div>

    
  )
}

export default Surahnames;