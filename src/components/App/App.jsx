import './App.scss';
import Background from '../Background/Background';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Root from '../Root/Root';
import Popup from '../Popap/Popap';
import { WaveArr } from '../../utils/constants';
import Record from '../Record/Record';
import { Strolls } from '../Strolls/Strolls';
import Questions from '../Questions/Questions';

function App() {
  const [popap, setPopap] = useState(false);
  const [notification, setNotification] = useState(true);

  const hendleClosePopup = () => {
    setPopap(!popap);
    setNotification(true);
  };

  return (
    <div className="App">
      <Background>
        <Routes>
          <Route path="/" element={<Root onClick={hendleClosePopup} />} />
          <Route path="/strolls" element={<Strolls />} />
          <Route path="/questions" element={<Questions />} />
        </Routes>

        <Popup
          open={popap}
          children={
            <Record
              hendleClosePopup={hendleClosePopup}
              notification={notification}
              setNotification={setNotification}
            />
          }
        />
        {WaveArr.map((item, index) => {
          return (
            <img
              src={item.wave}
              alt="волна"
              className={item.class}
              key={index}
            />
          );
        })}
      </Background>
    </div>
  );
}

export default App;
