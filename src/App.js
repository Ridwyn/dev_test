import style from './App.module.scss';
import Home from './pages/Home';
import Hero from './components/Hero';
import PlanetList from './components/Planet/PlanetList';

const App = () => (
  <div className={style.main}>
    <Hero />
    <Home />
    <PlanetList/>
  </div>
);

export default App;
