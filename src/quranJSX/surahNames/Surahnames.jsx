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
                  <p>سُوْرَةُ الفَاتِحَة</p>
                  </div>
              
        </Link>

        <Link className='LinkOfSurahNameAndNumber' to="/Surah2">
                  
                  <div className='insideofSurahNumber'>
                    <p>۲</p>
                  </div>
                  <div className='surahName'>
                  <p>سُوْرَةُ البَقَرَة</p>
                  </div>
              
        </Link>

        <Link className='LinkOfSurahNameAndNumber' to="/Surah3">
                  
                  <div className='insideofSurahNumber'>
                    <p>۳</p>
                  </div>
                  <div className='surahName'>
                  <p>سُوْرَةُ آل عِمْرَان</p>
                  </div>
              
        </Link>

        <Link className='LinkOfSurahNameAndNumber' to="/Surah4">
                  
                  <div className='insideofSurahNumber'>
                    <p>۴</p>
                  </div>
                  <div className='surahName'>
                  <p>سُوْرَةُ النِّسَاء</p>
                  </div>
              
        </Link>

        <Link className='LinkOfSurahNameAndNumber' to="/Surah5">
                  
                  <div className='insideofSurahNumber'>
                    <p>۵</p>
                  </div>
                  <div className='surahName'>
                  <p>سُوْرَةُ المَائدة</p>
                  </div>
              
        </Link>

    </div>

    
  )
}

export default Surahnames;