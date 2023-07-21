import './App.scss';
import Header from '../Header/Header';
import Background from '../Background/Background';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Root from '../Root/Root';
import Popup from '../Popap/Popap';
import Navigation from '../Naviganion/Navigation';
import wave from '../../images/test.svg';
import waveTwo from '../../images/test2.svg';
import Gallery from '../Gallery/Gallery';
import Record from '../Record/Record';

function App() {
  const [popap, setPopap] = useState(false);

  const hendleClosePopup = () => {
    setPopap(!popap);
  };

  return (
    <div className="App">
      {/* <Header popap={popap} hendleClosePopup={hendleClosePopup} /> */}

      <Routes>
        <Route
          path="/"
          element={
            <Background children={<Root onClick={hendleClosePopup} />} />
          }
        />
        {/* <Route
          path="/gallery"
          element={<Background children={<Gallery />} />}
        /> */}
        <Route
          path="/record"
          element={
            <Background
              children={<Record hendleClosePopup={hendleClosePopup} />}
            />
          }
        />
      </Routes>
      <Popup
        open={popap}
        children={<Record hendleClosePopup={hendleClosePopup} />}
      />
      <img src={wave} alt="fon" className="wave" />
      <img src={waveTwo} alt="fon" className="wave-two" />
    </div>
  );
}

export default App;
