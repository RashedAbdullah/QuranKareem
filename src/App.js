import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SurahNames from './quranJSX/surahNames/index';
import Home from './Navigation/Home';
import Navigator from './Navigation/Navigator';
import Surah1 from './quranJSX/allAyats/surah1';

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/Surah1" element={<Surah1 />}/>
      </Routes>
    </Router>
  );
}

export default App;
