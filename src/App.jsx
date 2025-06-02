// src/App.js
import { useEffect } from 'react';
import './App.css';
import Footer from './Components/elements/Footer';
import { NavBar } from './Components/elements/NavBar';
import Documents from './Components/sections/Documents';
import Domain from './Components/sections/Domain';
import { Hero } from './Components/sections/Hero';
import Milestone from './Components/sections/Milestone';
import Presentations from './Components/sections/Presentation';
import Team from './Components/sections/Team';
import ContactPage from './Components/sections/ContactPage';
import ScrollToTop from './shared/ScrollToTop';

function App() {
  useEffect(() => {
    // Add animated background elements
    const addAnimatedElements = () => {
      const container = document.createElement('div');
      container.className = 'animated-background';
      document.body.appendChild(container);
      
      // Add floating elements
      const elements = ['📚', '💻', '📝', '🎓', '🔍', '📊'];
      for (let i = 0; i < 15; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.textContent = elements[Math.floor(Math.random() * elements.length)];
        element.style.left = `${Math.random() * 100}vw`;
        element.style.top = `${Math.random() * 100}vh`;
        element.style.animationDuration = `${10 + Math.random() * 20}s`;
        element.style.animationDelay = `${Math.random() * 5}s`;
        element.style.fontSize = `${1 + Math.random() * 2}rem`;
        container.appendChild(element);
      }
    };

    addAnimatedElements();

    return () => {
      const bg = document.querySelector('.animated-background');
      if (bg) document.body.removeChild(bg);
    };
  }, []);

  return (
    <div className="relative overflow-hidden App">
      <NavBar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="domain">
          <Domain />
        </section>
        <section id="milestone">
          <Milestone />
        </section>
        <section id="documents">
          <Documents />
        </section>
        <section id="presentation">
          <Presentations />
        </section>
        <section id="team">
          <Team />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;