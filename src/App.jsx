import './App.css';
import { NavBar } from './Components/elements/NavBar';
import Domain from './Components/sections/Domain';
import { Hero } from './Components/sections/Hero';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Domain />
    </div>
  );
}

export default App;
