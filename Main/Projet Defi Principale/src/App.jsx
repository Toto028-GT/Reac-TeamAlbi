import React, { useEffect, useState } from 'react';
import './App.css';

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

  return (
    <body>
      <div className="container" >
      
      <h1>Plongée dans les abysses</h1>
      <p>Plus vous descendez, plus il fait sombre...</p>
      
    </div>
      <div className="fish small" style={{ left: '10%' }}></div>
      <div className="fish large" style={{ left: '20%' }}></div>
      <div className="fish" style={{ left: '30%' }}></div>
      <div className="fish small" style={{ left: '50%' }}></div>
    </body>
    
  );
}

export default App;
