import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div>
      <header className="menu-bar">
        <div className="menu-item">
            Home
        </div>
        <div className="menu-item">
            Contact
        </div>
      </header>
      <div className="content">
        <div className={`content-section ${fadeIn ? 'fade-in' : ''}`}>
          <div className="content-item">
            <img src="portrait.jpg" alt="Portrait" className="portrait" />
          </div>
          <div className="content-item">
            <b>Hi, I'm Rayan Koutchoukali.</b><br />
            This is my website that I created from scratch with React. If you want to look through the code, here is the <a href="https://github.com/TheChunkyPotato/My-Website">GitHub repo</a>.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
