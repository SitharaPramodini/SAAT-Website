import './App.css';
import Footer from './Components/elements/Footer';
import { NavBar } from './Components/elements/NavBar';
import Documents from './Components/sections/Documents';
import Domain from './Components/sections/Domain';
import { Hero } from './Components/sections/Hero';
import Milestone from './Components/sections/Milestone';
import Presentations from './Components/sections/Presentation';
import Team from './Components/sections/Team';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Domain />
      <Milestone />
      <Documents />
      <Presentations />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
