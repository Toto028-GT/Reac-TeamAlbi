import React, { useEffect, useState } from 'react';
import './App.css';
import WaveBanner from './WaveBanner';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#1E90FF');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      const percentage = Math.min(scrollPosition / maxScroll, 1);
      const red = Math.round(30 - 20 * percentage);
      const green = Math.round(60 - 40 * percentage);
      const blue = Math.round(120 - 90 * percentage);

      const darkColor = `rgb(${red}, ${green}, ${blue})`;
      setBackgroundColor(darkColor);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const generateFish = () => {
    const fishes = [];
    for (let i = 0; i < 10; i++) {
      const size = Math.random() > 0.5 ? 'small' : 'large';
      const top = Math.random() * 100; // Position verticale aléatoire
      const left = Math.random() * 100; // Position horizontale de départ
      fishes.push(
        <div
          key={i}
          className={`fish ${size}`}
          style={{ top: `${top}%`, left: `${left}%` }}
        ></div>
      );
    }
    return fishes;
  };
  return (
    <div
      id="root"
      style={{
        background: `linear-gradient(to bottom, #1E90FF, ${backgroundColor})`,
      }}
    >
      <WaveBanner /> {/* Ajout du composant ici */}
      <h1>Plongée dans les abysses</h1>
      <p>Plus vous descendez, plus il fait sombre...</p>
      
    </div>
    {generateFish()}
    </body>
    
  );
}

export default App;
