import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import './SurahCSS.css';
import Allsurah from '../../quranJSON/Ayats/quran.json';

const Surah69 = () => {

  const isActive = useMatch(`/Surah69`);

  return (

    //surah fatiha
    <div dir='rtl' className='surah1MainDiv'>


      <div className="AllAboutSurahNames">
          <Link className='insideSurahnems' to="/Surah1"><div><p className='p2'>۱</p></div><p className='p'>سُوْرَةُ الفَاتِحَة</p></Link>
          <Link className='insideSurahnems' to="/Surah2"><div><p className='p2'>۲</p></div><p className='p'>سُوْرَةُ البَقَرَة</p></Link>
          <Link className='insideSurahnems' to="/Surah3"><div><p className='p2'>۳</p></div><p className='p'>سُوْرَةُ آل عِمْرَان</p></Link>
          <Link className='insideSurahnems' to="/Surah4"><div><p className='p2'>۴</p></div><p className='p'>سُوْرَةُ النِّسَاء</p></Link>
          <Link className='insideSurahnems' to="/Surah5"><div><p className='p2'>۵</p></div><p className='p'>سُوْرَةُ المَائدة</p></Link>
          <Link className='insideSurahnems' to="/Surah6"><div><p className='p2'>۶</p></div><p className='p'>سُوْرَةُ الأنْعَام</p></Link>
          <Link className='insideSurahnems' to="/Surah7"><div><p className='p2'>۷</p></div><p className='p'>سُوْرَةُ الأعْرَاف</p></Link>
          <Link className='insideSurahnems' to="/Surah8"><div><p className='p2'>۸</p></div><p className='p'>سُوْرَةُ الأنْفَال</p></Link>
          <Link className='insideSurahnems' to="/Surah9"><div><p className='p2'>۹</p></div><p className='p'>سُوْرَةُ التْوبَة</p></Link>
          <Link className='insideSurahnems' to="/Surah10"><div><p className='p2'>۱۰</p></div><p className='p'>سُوْرَةُ يُوْنس</p></Link>
          <Link className='insideSurahnems' to="/Surah11"><div><p className='p2'>۱۱</p></div><p className='p'>سُوْرَةُ هُوْد</p></Link>
          <Link className='insideSurahnems' to="/Surah12"><div><p className='p2'>۱۲</p></div><p className='p'>سُوْرَةُ يُوْسُف</p></Link>
          <Link className='insideSurahnems' to="/Surah13"><div><p className='p2'>۱۳</p></div><p className='p'>سُوْرَةُ الرَّعْد</p></Link>
          <Link className='insideSurahnems' to="/Surah14"><div><p className='p2'>۱۴</p></div><p className='p'>سُوْرَةُ إبْرَاهِيْم</p></Link>
          <Link className='insideSurahnems' to="/Surah15"><div><p className='p2'>۱۵</p></div><p className='p'>سُوْرَةُ الحِجْر</p></Link>
          <Link className='insideSurahnems' to="/Surah16"><div><p className='p2'>۱۶</p></div><p className='p'>سُوْرَةُ النَّحْل</p></Link>
          <Link className='insideSurahnems' to="/Surah17"><div><p className='p2'>۱۷</p></div><p className='p'>سُوْرَةُ الإسْرَاء</p></Link>
          <Link className='insideSurahnems' to="/Surah18"><div><p className='p2'>۱۸</p></div><p className='p'>سُوْرَةُ الكَهْف</p></Link>
          <Link className='insideSurahnems' to="/Surah19"><div><p className='p2'>۱۹</p></div><p className='p'>سُوْرَةُ مَرْيَم</p></Link>
          <Link className='insideSurahnems' to="/Surah20"><div><p className='p2'>۲۰</p></div><p className='p'>سُوْرَةُ طه</p></Link>
          <Link className='insideSurahnems' to="/Surah21"><div><p className='p2'>۲۱</p></div><p className='p'>سُوْرَةُ الأَنْبِيَاء</p></Link>
          <Link className='insideSurahnems' to="/Surah22"><div><p className='p2'>۲۲</p></div><p className='p'>سُوْرَةُ الحَجّ</p></Link>
          <Link className='insideSurahnems' to="/Surah23"><div><p className='p2'>۲۳</p></div><p className='p'>سُوْرَةُ المُؤْمِنُون</p></Link>
          <Link className='insideSurahnems' to="/Surah24"><div><p className='p2'>۲۴</p></div><p className='p'>سُوْرَةُ النُّوْر</p></Link>
          <Link className='insideSurahnems' to="/Surah25"><div><p className='p2'>۲۵</p></div><p className='p'>سُوْرَةُ الفُرْقَان</p></Link>
          <Link className='insideSurahnems' to="/Surah26"><div><p className='p2'>۲۶</p></div><p className='p'>سُوْرَةُ الشُّعَرَاء</p></Link>
          <Link className='insideSurahnems' to="/Surah27"><div><p className='p2'>۲۷</p></div><p className='p'>سُوْرَةُ النَّمْل</p></Link>
          <Link className='insideSurahnems' to="/Surah28"><div><p className='p2'>۲۸</p></div><p className='p'>سُوْرَةُ القَصَص</p></Link>
          <Link className='insideSurahnems' to="/Surah29"><div><p className='p2'>۲۹</p></div><p className='p'>سُوْرَةُ العَنْكَبُوت</p></Link>
          <Link className='insideSurahnems' to="/Surah30"><div><p className='p2'>۳۰</p></div><p className='p'>سُوْرَةُ الرُّوم</p></Link>
          <Link className='insideSurahnems' to="/Surah31"><div><p className='p2'>۳۱</p></div><p className='p'>سُوْرَةُ لُقْمَان</p></Link>
          <Link className='insideSurahnems' to="/Surah32"><div><p className='p2'>۳۲</p></div><p className='p'>سُوْرَةُ السَّجْدَة</p></Link>
          <Link className='insideSurahnems' to="/Surah33"><div><p className='p2'>۳۳</p></div><p className='p'>سُوْرَةُ الأَحْزَاب</p></Link>
          <Link className='insideSurahnems' to="/Surah34"><div><p className='p2'>۳۴</p></div><p className='p'>سُوْرَةُ سَبَأ</p></Link>
          <Link className='insideSurahnems' to="/Surah35"><div><p className='p2'>۳۵</p></div><p className='p'>سُوْرَةُ فَاطِر</p></Link>
          <Link className='insideSurahnems' to="/Surah36"><div><p className='p2'>۳۶</p></div><p className='p'>سُوْرَةُ يٰس</p></Link>
          <Link className='insideSurahnems' to="/Surah37"><div><p className='p2'>۳۷</p></div><p className='p'>سُوْرَةُ الصَّافَّات</p></Link>
          <Link className='insideSurahnems' to="/Surah38"><div><p className='p2'>۳۸</p></div><p className='p'>سُوْرَةُ ص</p></Link>
          <Link className='insideSurahnems' to="/Surah39"><div><p className='p2'>۳۹</p></div><p className='p'>سُوْرَةُ الزُّمَر</p></Link>
          <Link className='insideSurahnems' to="/Surah40"><div><p className='p2'>۴۰</p></div><p className='p'>سُوْرَةُ غَافِر</p></Link>
          <Link className='insideSurahnems' to="/Surah41"><div><p className='p2'>۴۱</p></div><p className='p'>سُوْرَةُ فُصِّلَت</p></Link>
          <Link className='insideSurahnems' to="/Surah42"><div><p className='p2'>۴۲</p></div><p className='p'>سُوْرَةُ الشُّورىٰ</p></Link>
          <Link className='insideSurahnems' to="/Surah43"><div><p className='p2'>۴۳</p></div><p className='p'>سُوْرَةُ الزُّخْرُف</p></Link>
          <Link className='insideSurahnems' to="/Surah44"><div><p className='p2'>۴۴</p></div><p className='p'>سُوْرَةُ الدُّخَان</p></Link>
          <Link className='insideSurahnems' to="/Surah45"><div><p className='p2'>۴۵</p></div><p className='p'>سُوْرَةُ الجَاثِيَة</p></Link>
          <Link className='insideSurahnems' to="/Surah46"><div><p className='p2'>۴۶</p></div><p className='p'>سُوْرَةُ الأَحْقَاف</p></Link>
          <Link className='insideSurahnems' to="/Surah47"><div><p className='p2'>۴۷</p></div><p className='p'>سُوْرَةُ مُحَمَّد</p></Link>
          <Link className='insideSurahnems' to="/Surah48"><div><p className='p2'>۴۸</p></div><p className='p'>سُوْرَةُ الفَتْح</p></Link>
          <Link className='insideSurahnems' to="/Surah49"><div><p className='p2'>۴۹</p></div><p className='p'>سُوْرَةُ الحُجُرَات</p></Link>
          <Link className='insideSurahnems' to="/Surah50"><div><p className='p2'>۵۰</p></div><p className='p'>سُوْرَةُ ق</p></Link>
          <Link className='insideSurahnems' to="/Surah51"><div><p className='p2'>۵۱</p></div><p className='p'>سُوْرَةُ الذَّارِيَات</p></Link>
          <Link className='insideSurahnems' to="/Surah52"><div><p className='p2'>۵۲</p></div><p className='p'>سُوْرَةُ الطُّور</p></Link>
          <Link className='insideSurahnems' to="/Surah53"><div><p className='p2'>۵۳</p></div><p className='p'>سُوْرَةُ النَّجْم</p></Link>
          <Link className='insideSurahnems' to="/Surah54"><div><p className='p2'>۵۴</p></div><p className='p'>سُوْرَةُ القَمَر</p></Link>
          <Link className='insideSurahnems' to="/Surah55"><div><p className='p2'>۵۵</p></div><p className='p'>سُوْرَةُ الرَّحْمَٰن</p></Link>
          <Link className='insideSurahnems' to="/Surah56"><div><p className='p2'>۵۶</p></div><p className='p'>سُوْرَةُ الوَاقِعَة</p></Link>
          <Link className='insideSurahnems' to="/Surah57"><div><p className='p2'>۵۷</p></div><p className='p'>سُوْرَةُ الحَدِيد</p></Link>
          <Link className='insideSurahnems' to="/Surah58"><div><p className='p2'>۵۸</p></div><p className='p'>سُوْرَةُ المُجَادِلَة</p></Link>
          <Link className='insideSurahnems' to="/Surah59"><div><p className='p2'>۵۹</p></div><p className='p'>سُوْرَةُ الحَشْر</p></Link>
          <Link className='insideSurahnems' to="/Surah60"><div><p className='p2'>۶۰</p></div><p className='p'>سُوْرَةُ المُمْتَحَنَة</p></Link>
          <Link className='insideSurahnems' to="/Surah61"><div><p className='p2'>۶۱</p></div><p className='p'>سُوْرَةُ الصَّفّ</p></Link>
          <Link className='insideSurahnems' to="/Surah62"><div><p className='p2'>۶۲</p></div><p className='p'>سُوْرَةُ الجُمُعَة</p></Link>
          <Link className='insideSurahnems' to="/Surah63"><div><p className='p2'>۶۳</p></div><p className='p'>سُوْرَةُ المُنَافِقُون</p></Link>
          <Link className='insideSurahnems' to="/Surah64"><div><p className='p2'>۶۴</p></div><p className='p'>سُوْرَةُ التَّغَابُن</p></Link>
          <Link className='insideSurahnems' to="/Surah65"><div><p className='p2'>۶۵</p></div><p className='p'>سُوْرَةُ الطَّلَاق</p></Link>
          <Link className='insideSurahnems' to="/Surah66"><div><p className='p2'>۶۶</p></div><p className='p'>سُوْرَةُ التَّحْرِيم</p></Link>
          <Link className='insideSurahnems' to="/Surah67"><div><p className='p2'>۶۷</p></div><p className='p'>سُوْرَةُ المُلْك</p></Link>
          <Link className='insideSurahnems' to="/Surah68"><div><p className='p2'>۶۸</p></div><p className='p'>سُوْرَةُ القَلَم</p></Link>
          <Link className='insideSurahnems isActive' to="/Surah69"><div><p className='p2'>۶۹</p></div><p className='p'>سُوْرَةُ الحَاقَّة</p></Link>
          <Link className='insideSurahnems' to="/Surah70"><div><p className='p2'>۷۰</p></div><p className='p'>سُوْرَةُ المَعَارِج</p></Link>
          <Link className='insideSurahnems' to="/Surah71"><div><p className='p2'>۷۱</p></div><p className='p'>سُوْرَةُ نُوح</p></Link>
          <Link className='insideSurahnems' to="/Surah72"><div><p className='p2'>۷۲</p></div><p className='p'>سُوْرَةُ الجِنّ</p></Link>
          <Link className='insideSurahnems' to="/Surah73"><div><p className='p2'>۷۳</p></div><p className='p'>سُوْرَةُ المُزَّمِّل</p></Link>
          <Link className='insideSurahnems' to="/Surah74"><div><p className='p2'>۷۴</p></div><p className='p'>سُوْرَةُ المُدَّثِّر</p></Link>
          <Link className='insideSurahnems' to="/Surah75"><div><p className='p2'>۷۵</p></div><p className='p'>سُوْرَةُ القِيَامَة</p></Link>
          <Link className='insideSurahnems' to="/Surah76"><div><p className='p2'>۷۶</p></div><p className='p'>سُوْرَةُ الإِنْسَان</p></Link>
          <Link className='insideSurahnems' to="/Surah77"><div><p className='p2'>۷۷</p></div><p className='p'>سُوْرَةُ المُرْسَلَات</p></Link>
          <Link className='insideSurahnems' to="/Surah78"><div><p className='p2'>۷۸</p></div><p className='p'>سُوْرَةُ النَّبَأ</p></Link>
          <Link className='insideSurahnems' to="/Surah79"><div><p className='p2'>۷۹</p></div><p className='p'>سُوْرَةُ النَّازِعَات</p></Link>
          <Link className='insideSurahnems' to="/Surah80"><div><p className='p2'>۸۰</p></div><p className='p'>سُوْرَةُ عَبَسَ</p></Link>
          <Link className='insideSurahnems' to="/Surah81"><div><p className='p2'>۸۱</p></div><p className='p'>سُوْرَةُ التَّكْوِير</p></Link>
          <Link className='insideSurahnems' to="/Surah82"><div><p className='p2'>۸۲</p></div><p className='p'>سُوْرَةُ الإِنْفِطَار</p></Link>
          <Link className='insideSurahnems' to="/Surah83"><div><p className='p2'>۸۳</p></div><p className='p'>سُوْرَةُ المُطَفِّفِين</p></Link>
          <Link className='insideSurahnems' to="/Surah84"><div><p className='p2'>۸۴</p></div><p className='p'>سُوْرَةُ الاِنْشِقَاق</p></Link>
          <Link className='insideSurahnems' to="/Surah85"><div><p className='p2'>۸۵</p></div><p className='p'>سُوْرَةُ البُرُوج</p></Link>
          <Link className='insideSurahnems' to="/Surah86"><div><p className='p2'>۸۶</p></div><p className='p'>سُوْرَةُ الطَّارِق</p></Link>
          <Link className='insideSurahnems' to="/Surah87"><div><p className='p2'>۸۷</p></div><p className='p'>سُوْرَةُ الأَعْلَىٰ</p></Link>
          <Link className='insideSurahnems' to="/Surah88"><div><p className='p2'>۸۸</p></div><p className='p'>سُوْرَةُ الغَاشِيَة</p></Link>
          <Link className='insideSurahnems' to="/Surah89"><div><p className='p2'>۸۹</p></div><p className='p'>سُوْرَةُ الفَجْر</p></Link>
          <Link className='insideSurahnems' to="/Surah90"><div><p className='p2'>۹۰</p></div><p className='p'>سُوْرَةُ البَلَد</p></Link>
          <Link className='insideSurahnems' to="/Surah91"><div><p className='p2'>۹۱</p></div><p className='p'>سُوْرَةُ الشَّمْس</p></Link>
          <Link className='insideSurahnems' to="/Surah92"><div><p className='p2'>۹۲</p></div><p className='p'>سُوْرَةُ اللَّيْل</p></Link>
          <Link className='insideSurahnems' to="/Surah93"><div><p className='p2'>۹۳</p></div><p className='p'>سُوْرَةُ الضُّحَىٰ</p></Link>
          <Link className='insideSurahnems' to="/Surah94"><div><p className='p2'>۹۴</p></div><p className='p'>سُوْرَةُ الشَّرْح</p></Link>
          <Link className='insideSurahnems' to="/Surah95"><div><p className='p2'>۹۵</p></div><p className='p'>سُوْرَةُ التِّين</p></Link>
          <Link className='insideSurahnems' to="/Surah96"><div><p className='p2'>۹۶</p></div><p className='p'>سُوْرَةُ العَلَق</p></Link>
          <Link className='insideSurahnems' to="/Surah97"><div><p className='p2'>۹۷</p></div><p className='p'>سُوْرَةُ القَدْر</p></Link>
          <Link className='insideSurahnems' to="/Surah98"><div><p className='p2'>۹۸</p></div><p className='p'>سُوْرَةُ البَيِّنَة</p></Link>
          <Link className='insideSurahnems' to="/Surah99"><div><p className='p2'>۹۹</p></div><p className='p'>سُوْرَةُ الزَّلْزَلَة</p></Link>
          <Link className='insideSurahnems' to="/Surah100"><div><p className='p2'>۱۰۰</p></div><p className='p'>سُوْرَةُ العَادِيَات</p></Link>
          <Link className='insideSurahnems' to="/Surah101"><div><p className='p2'>۱۰۱</p></div><p className='p'>سُوْرَةُ القَارِعَة</p></Link>
          <Link className='insideSurahnems' to="/Surah102"><div><p className='p2'>۱۰۲</p></div><p className='p'>سُوْرَةُ التَّكَاثُر</p></Link>
          <Link className='insideSurahnems' to="/Surah103"><div><p className='p2'>۱۰۳</p></div><p className='p'>سُوْرَةُ العَصْر</p></Link>
          <Link className='insideSurahnems' to="/Surah104"><div><p className='p2'>۱۰۴</p></div><p className='p'>سُوْرَةُ الهُمَزَة</p></Link>
          <Link className='insideSurahnems' to="/Surah105"><div><p className='p2'>۱۰۵</p></div><p className='p'>سُوْرَةُ الفِيل</p></Link>
          <Link className='insideSurahnems' to="/Surah106"><div><p className='p2'>۱۰۶</p></div><p className='p'>سُوْرَةُ قُرَيْش</p></Link>
          <Link className='insideSurahnems' to="/Surah107"><div><p className='p2'>۱۰۷</p></div><p className='p'>سُوْرَةُ المَاعُون</p></Link>
          <Link className='insideSurahnems' to="/Surah108"><div><p className='p2'>۱۰۸</p></div><p className='p'>سُوْرَةُ الكَوْثَر</p></Link>
          <Link className='insideSurahnems' to="/Surah109"><div><p className='p2'>۱۰۹</p></div><p className='p'>سُوْرَةُ الكَافِرُون</p></Link>
          <Link className='insideSurahnems' to="/Surah110"><div><p className='p2'>۱۱۰</p></div><p className='p'>سُوْرَةُ النَّصْر</p></Link>
          <Link className='insideSurahnems' to="/Surah111"><div><p className='p2'>۱۱۱</p></div><p className='p'>سُوْرَةُ المَسَد</p></Link>
          <Link className='insideSurahnems' to="/Surah112"><div><p className='p2'>۱۱۲</p></div><p className='p'>سُوْرَةُ الإِخْلَاص</p></Link>
          <Link className='insideSurahnems' to="/Surah113"><div><p className='p2'>۱۱۳</p></div><p className='p'>سُوْرَةُ الفَلَق</p></Link>
          <Link className='insideSurahnems' to="/Surah114"><div><p className='p2'>۱۱۴</p></div><p className='p'>سُوْرَةُ النَّاس</p></Link>

      </div>

      <div className='AllAboutSurah'>
          <div className='surahNameAndBismillah'>
              <h2 className='text-center pb-2'>سُوْرَةُ الحَاقَّة</h2>
              <h2 className='text-center'>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</h2>
          </div>
          
          {Allsurah.Surah69.map((value)=> {

          // convert to number:
          let surahNumbers = parseInt(value.verse, 10);
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


          return <div className='ayatAndNumber'>
                    <div className='ayat'>{value.text} <div className='ayatNo'>{converted}</div></div>
                  </div>
          })}
          </div>
        
      </div>
  )
}

export default Surah69;