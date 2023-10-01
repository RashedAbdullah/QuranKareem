import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './HeaderAndFooter/Header';
import Footer from './HeaderAndFooter/Footer';
import Home from './Navigation/Home';

import Surah1 from './quranJSX/allAyats/Surah1';
import Surah2 from './quranJSX/allAyats/Surah2';
import Surah3 from './quranJSX/allAyats/Surah3';
import Surah4 from './quranJSX/allAyats/Surah4';
import Surah5 from './quranJSX/allAyats/Surah5';
import Surah6 from './quranJSX/allAyats/Surah6';
import Surah7 from './quranJSX/allAyats/Surah7';
import Surah8 from './quranJSX/allAyats/Surah8';
import Surah9 from './quranJSX/allAyats/Surah9';
import Surah10 from './quranJSX/allAyats/Surah10';
import Surah11 from './quranJSX/allAyats/Surah11';
import Surah12 from './quranJSX/allAyats/Surah12';
import Surah13 from './quranJSX/allAyats/Surah13';
import Surah14 from './quranJSX/allAyats/Surah14';
import Surah15 from './quranJSX/allAyats/Surah15';
import Surah16 from './quranJSX/allAyats/Surah16';
import Surah17 from './quranJSX/allAyats/Surah17';
import Surah18 from './quranJSX/allAyats/Surah18';
import Surah19 from './quranJSX/allAyats/Surah19';
import Surah20 from './quranJSX/allAyats/Surah20';
import Surah21 from './quranJSX/allAyats/Surah21';
import Surah22 from './quranJSX/allAyats/Surah22';
import Surah23 from './quranJSX/allAyats/Surah23';
import Surah24 from './quranJSX/allAyats/Surah24';
import Surah25 from './quranJSX/allAyats/Surah25';
import Surah26 from './quranJSX/allAyats/Surah26';
import Surah27 from './quranJSX/allAyats/Surah27';
import Surah28 from './quranJSX/allAyats/Surah28';
import Surah29 from './quranJSX/allAyats/Surah29';
import Surah30 from './quranJSX/allAyats/Surah30';
import Surah31 from './quranJSX/allAyats/Surah31';
import Surah32 from './quranJSX/allAyats/Surah32';
import Surah33 from './quranJSX/allAyats/Surah33';
import Surah34 from './quranJSX/allAyats/Surah34';
import Surah35 from './quranJSX/allAyats/Surah35';
import Surah36 from './quranJSX/allAyats/Surah36';
import Surah37 from './quranJSX/allAyats/Surah37';
import Surah38 from './quranJSX/allAyats/Surah38';
import Surah39 from './quranJSX/allAyats/Surah39';
import Surah40 from './quranJSX/allAyats/Surah40';
import Surah41 from './quranJSX/allAyats/Surah41';
import Surah42 from './quranJSX/allAyats/Surah42';
import Surah43 from './quranJSX/allAyats/Surah43';
import Surah44 from './quranJSX/allAyats/Surah44';
import Surah45 from './quranJSX/allAyats/Surah45';
import Surah46 from './quranJSX/allAyats/Surah46';
import Surah47 from './quranJSX/allAyats/Surah47';
import Surah48 from './quranJSX/allAyats/Surah48';
import Surah49 from './quranJSX/allAyats/Surah49';
import Surah50 from './quranJSX/allAyats/Surah50';
import Surah51 from './quranJSX/allAyats/Surah51';
import Surah52 from './quranJSX/allAyats/Surah52';
import Surah53 from './quranJSX/allAyats/Surah53';
import Surah54 from './quranJSX/allAyats/Surah54';
import Surah55 from './quranJSX/allAyats/Surah55';
import Surah56 from './quranJSX/allAyats/Surah56';
import Surah57 from './quranJSX/allAyats/Surah57';
import Surah58 from './quranJSX/allAyats/Surah58';
import Surah59 from './quranJSX/allAyats/Surah59';
import Surah60 from './quranJSX/allAyats/Surah60';
// import Surah61 from './quranJSX/allAyats/Surah61';
// import Surah62 from './quranJSX/allAyats/Surah62';
// import Surah63 from './quranJSX/allAyats/Surah63';
// import Surah64 from './quranJSX/allAyats/Surah64';
// import Surah65 from './quranJSX/allAyats/Surah65';
// import Surah66 from './quranJSX/allAyats/Surah66';
// import Surah67 from './quranJSX/allAyats/Surah67';
// import Surah68 from './quranJSX/allAyats/Surah68';
// import Surah69 from './quranJSX/allAyats/Surah69';
// import Surah70 from './quranJSX/allAyats/Surah70';
// import Surah71 from './quranJSX/allAyats/Surah71';
// import Surah72 from './quranJSX/allAyats/Surah72';
// import Surah73 from './quranJSX/allAyats/Surah73';
// import Surah74 from './quranJSX/allAyats/Surah74';
// import Surah75 from './quranJSX/allAyats/Surah75';
// import Surah76 from './quranJSX/allAyats/Surah76';
// import Surah77 from './quranJSX/allAyats/Surah77';
// import Surah78 from './quranJSX/allAyats/Surah78';
// import Surah79 from './quranJSX/allAyats/Surah79';
// import Surah80 from './quranJSX/allAyats/Surah80';
// import Surah81 from './quranJSX/allAyats/Surah81';
// import Surah82 from './quranJSX/allAyats/Surah82';
// import Surah83 from './quranJSX/allAyats/Surah83';
// import Surah84 from './quranJSX/allAyats/Surah84';
// import Surah85 from './quranJSX/allAyats/Surah85';
// import Surah86 from './quranJSX/allAyats/Surah86';
// import Surah87 from './quranJSX/allAyats/Surah87';
// import Surah88 from './quranJSX/allAyats/Surah88';
// import Surah89 from './quranJSX/allAyats/Surah89';
// import Surah90 from './quranJSX/allAyats/Surah90';
// import Surah91 from './quranJSX/allAyats/Surah91';
// import Surah92 from './quranJSX/allAyats/Surah92';
// import Surah93 from './quranJSX/allAyats/Surah93';
// import Surah94 from './quranJSX/allAyats/Surah94';
// import Surah95 from './quranJSX/allAyats/Surah95';
// import Surah96 from './quranJSX/allAyats/Surah96';
// import Surah97 from './quranJSX/allAyats/Surah97';
// import Surah98 from './quranJSX/allAyats/Surah98';
// import Surah99 from './quranJSX/allAyats/Surah99';
// import Surah100 from './quranJSX/allAyats/Surah100';
// import Surah101 from './quranJSX/allAyats/Surah101';
// import Surah102 from './quranJSX/allAyats/Surah102';
// import Surah103 from './quranJSX/allAyats/Surah103';
// import Surah104 from './quranJSX/allAyats/Surah104';
// import Surah105 from './quranJSX/allAyats/Surah105';
// import Surah106 from './quranJSX/allAyats/Surah106';
// import Surah107 from './quranJSX/allAyats/Surah107';
// import Surah108 from './quranJSX/allAyats/Surah108';
// import Surah109 from './quranJSX/allAyats/Surah109';
// import Surah110 from './quranJSX/allAyats/Surah110';
// import Surah111 from './quranJSX/allAyats/Surah111';
// import Surah112 from './quranJSX/allAyats/Surah112';
// import Surah113 from './quranJSX/allAyats/Surah113';
// import Surah114 from './quranJSX/allAyats/Surah114';


function App() {
  return (
    <Router className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>

        {/* all surah of quran */}
        <Route path="/Surah1" element={<Surah1 />}/>
        <Route path="/Surah2" element={<Surah2 />}/>
        <Route path="/Surah3" element={<Surah3 />}/>
        <Route path="/Surah3" element={<Surah3 />}/>
        <Route path="/Surah4" element={<Surah4 />}/>
        <Route path="/Surah5" element={<Surah5 />}/>
        <Route path="/Surah6" element={<Surah6 />}/>
        <Route path="/Surah7" element={<Surah7 />}/>
        <Route path="/Surah8" element={<Surah8 />}/>
        <Route path="/Surah9" element={<Surah9 />}/>
        <Route path="/Surah10" element={<Surah10 />}/>
        <Route path="/Surah11" element={<Surah11 />}/>
        <Route path="/Surah12" element={<Surah12 />}/>
        <Route path="/Surah13" element={<Surah13 />}/>
        <Route path="/Surah14" element={<Surah14 />}/>
        <Route path="/Surah15" element={<Surah15 />}/>
        <Route path="/Surah16" element={<Surah16 />}/>
        <Route path="/Surah17" element={<Surah17 />}/>
        <Route path="/Surah18" element={<Surah18 />}/>
        <Route path="/Surah19" element={<Surah19 />}/>
        <Route path="/Surah20" element={<Surah20 />}/>
        <Route path="/Surah21" element={<Surah21 />}/>
        <Route path="/Surah22" element={<Surah22 />}/>
        <Route path="/Surah23" element={<Surah23 />}/>
        <Route path="/Surah24" element={<Surah24 />}/>
        <Route path="/Surah25" element={<Surah25 />}/>
        <Route path="/Surah26" element={<Surah26 />}/>
        <Route path="/Surah27" element={<Surah27 />}/>
        <Route path="/Surah28" element={<Surah28 />}/>
        <Route path="/Surah29" element={<Surah29 />}/>
        <Route path="/Surah30" element={<Surah30 />}/>
        <Route path="/Surah31" element={<Surah31 />}/>
        <Route path="/Surah32" element={<Surah32 />}/>
        <Route path="/Surah33" element={<Surah33 />}/>
        <Route path="/Surah34" element={<Surah34 />}/>
        <Route path="/Surah35" element={<Surah35 />}/>
        <Route path="/Surah36" element={<Surah36 />}/>
        <Route path="/Surah37" element={<Surah37 />}/>
        <Route path="/Surah38" element={<Surah38 />}/>
        <Route path="/Surah39" element={<Surah39 />}/>
        <Route path="/Surah40" element={<Surah40 />}/>
        <Route path="/Surah41" element={<Surah41 />}/>
        <Route path="/Surah42" element={<Surah42 />}/>
        <Route path="/Surah43" element={<Surah43 />}/>
        <Route path="/Surah44" element={<Surah44 />}/>
        <Route path="/Surah45" element={<Surah45 />}/>
        <Route path="/Surah46" element={<Surah46 />}/>
        <Route path="/Surah47" element={<Surah47 />}/>
        <Route path="/Surah48" element={<Surah48 />}/>
        <Route path="/Surah49" element={<Surah49 />}/>
        <Route path="/Surah50" element={<Surah50 />}/>
        <Route path="/Surah51" element={<Surah51 />}/>
        <Route path="/Surah52" element={<Surah52 />}/>
        <Route path="/Surah53" element={<Surah53 />}/>
        <Route path="/Surah54" element={<Surah54 />}/>
        <Route path="/Surah55" element={<Surah55 />}/>
        <Route path="/Surah56" element={<Surah56 />}/>
        <Route path="/Surah57" element={<Surah57 />}/>
        <Route path="/Surah58" element={<Surah58 />}/>
        <Route path="/Surah59" element={<Surah59 />}/>
        <Route path="/Surah60" element={<Surah60 />}/>
        {/* <Route path="/Surah61" element={<Surah61 />}/>
        <Route path="/Surah62" element={<Surah62 />}/>
        <Route path="/Surah63" element={<Surah63 />}/>
        <Route path="/Surah64" element={<Surah64 />}/>
        <Route path="/Surah65" element={<Surah65 />}/>
        <Route path="/Surah66" element={<Surah66 />}/>
        <Route path="/Surah67" element={<Surah67 />}/>
        <Route path="/Surah68" element={<Surah68 />}/>
        <Route path="/Surah69" element={<Surah69 />}/>
        <Route path="/Surah70" element={<Surah70 />}/> */}
        {/* <Route path="/Surah71" element={<Surah71 />}/>
        <Route path="/Surah72" element={<Surah72 />}/>
        <Route path="/Surah73" element={<Surah73 />}/>
        <Route path="/Surah74" element={<Surah74 />}/>
        <Route path="/Surah75" element={<Surah75 />}/>
        <Route path="/Surah76" element={<Surah76 />}/>
        <Route path="/Surah77" element={<Surah77 />}/>
        <Route path="/Surah78" element={<Surah78 />}/>
        <Route path="/Surah79" element={<Surah79 />}/>
        <Route path="/Surah80" element={<Surah80 />}/> */}
        {/* <Route path="/Surah81" element={<Surah81 />}/>
        <Route path="/Surah82" element={<Surah82 />}/>
        <Route path="/Surah83" element={<Surah83 />}/>
        <Route path="/Surah84" element={<Surah84 />}/>
        <Route path="/Surah85" element={<Surah85 />}/>
        <Route path="/Surah86" element={<Surah86 />}/>
        <Route path="/Surah87" element={<Surah87 />}/>
        <Route path="/Surah88" element={<Surah88 />}/>
        <Route path="/Surah89" element={<Surah89 />}/>
        <Route path="/Surah90" element={<Surah90 />}/> */}
        {/* <Route path="/Surah91" element={<Surah91 />}/>
        <Route path="/Surah92" element={<Surah92 />}/>
        <Route path="/Surah93" element={<Surah93 />}/>
        <Route path="/Surah94" element={<Surah94 />}/>
        <Route path="/Surah95" element={<Surah95 />}/>
        <Route path="/Surah96" element={<Surah96 />}/>
        <Route path="/Surah97" element={<Surah97 />}/>
        <Route path="/Surah98" element={<Surah98 />}/>
        <Route path="/Surah99" element={<Surah99 />}/>
        <Route path="/Surah100" element={<Surah100 />}/> */}
        {/* <Route path="/Surah101" element={<Surah101 />}/>
        <Route path="/Surah102" element={<Surah102 />}/>
        <Route path="/Surah103" element={<Surah103 />}/>
        <Route path="/Surah104" element={<Surah104 />}/>
        <Route path="/Surah105" element={<Surah105 />}/>
        <Route path="/Surah106" element={<Surah106 />}/>
        <Route path="/Surah107" element={<Surah107 />}/>
        <Route path="/Surah108" element={<Surah108 />}/>
        <Route path="/Surah109" element={<Surah109 />}/>
        <Route path="/Surah110" element={<Surah110 />}/>
        <Route path="/Surah111" element={<Surah111 />}/>
        <Route path="/Surah112" element={<Surah112 />}/>
        <Route path="/Surah113" element={<Surah113 />}/>
        <Route path="/Surah114" element={<Surah114 />}/> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
