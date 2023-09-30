import React from 'react';
import './index.css';
import SurahNameJSON from '../../quranJSON/surahNames/surahNameArUrEn.json'
import '../../fonts/QuranSurah2-7Bov4.ttf';
import { Link } from 'react-router-dom';
import SurahNamesforNav from '../../quranJSON/surahNames/SruahNamesforNav.json';
import surah3 from '../allAyats/surah3';




const SurahNames = () => {





  return (
    
    <div dir='rtl' className='SurahNamesMainDivOutside'>
      
        {/* Surah Names */}

      {/* headLine Div */}
      <div className='HeadlineOfSurah'>
      <h2 className='text-center'>أَسْمَاءُ السُوَرِ القُرْآنِية</h2>
      </div>

      {SurahNameJSON.map((value) => {

        // convert to number:
        let surahNumbers = parseInt(value.id, 10);

        // English to Arabic:
        const numbers = `۰۱۲۳۴۵۶۷۸۹`;
        const convert = (surahNumbers) => {
            let res = "";
            const str = surahNumbers.toString();
            for (let c of str) {
              res += numbers.charAt(c);
            }
            return res;
        };
        const converted = convert(surahNumbers);

        return <Link className='LinkOfSurahNameAndNumber' to="/surah3">
                  
                  <div className='insideofSurahNumber'>
                    <p>{converted}</p>
                  </div>
                  <div className='surahName'>
                    <p>سورة {value.name}</p>
                  </div>
              
          </Link>
        
        })}
            
        
    </div>
  )
}

export default SurahNames;