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
        <Route exact path="/Surah3" element={<Surah3 />}/>
        <Route exact path="/Surah4" element={<Surah4 />}/>
        <Route exact path="/Surah5" element={<Surah5 />}/>
        <Route exact path="/Surah6" element={<Surah6 />}/>
        <Route exact path="/Surah7" element={<Surah7 />}/>
        <Route exact path="/Surah8" element={<Surah8 />}/>
        <Route exact path="/Surah9" element={<Surah9 />}/>
        <Route exact path="/Surah10" element={<Surah10 />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
