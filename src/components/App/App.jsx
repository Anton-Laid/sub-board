import "./App.scss";
import Header from "../Header/Header";
import Background from "../Background/Background";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Root from "../Home/Root";
import Popup from "../Popap/Popap";
import Navigation from "../Naviganion/Navigation";

function App() {
  const [popap, setPopap] = useState(false);
  console.log(popap);
  const hendleClosePopup = () => {
    setPopap(!popap);
  };

  return (
    <div className="App">
      <Header popap={popap} hendleClosePopup={hendleClosePopup} />
      <Routes>
        <Route path="/" element={<h1>holl</h1>} />
        <Route path="/about" element={<Background children={<Root />} />} />
      </Routes>
      <Popup
        openPopup={popap}
        children={<Navigation handlePopup={hendleClosePopup} />}
      />
    </div>
  );
}

export default App;
