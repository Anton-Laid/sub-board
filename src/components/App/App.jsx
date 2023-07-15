import './App.scss';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="visual">
        {/* <div className="visualization-container__wave" /> */}
        {/* <h1 className="visual__title">​SUPBORD PUSHCHINO</h1> */}
        <div className="visual__grass visual__grass_position" />
        <div className="visual__jellyfish visual__jellyfish_position" />
        <div className="visual__grass visual__grass_footer-position" />
        <div className="visual__fishs visual__fishs-position" />
      </section>
    </div>
  );
}

export default App;
