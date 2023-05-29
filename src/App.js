import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [fadeIn, setFadeIn] = useState(false);
  const [animateContent, setAnimateContent] = useState(false);

  useEffect(() => {
    setFadeIn(true);
    setTimeout(() => {
      setAnimateContent(true);
    }, 500);
  }, []);

  return (
    <div>
      <header className="menu-bar">
        <div className={`menu-item ${fadeIn ? 'fade-in' : ''}`}>
            Home
        </div>
        <div className={`menu-item ${fadeIn ? 'fade-in' : ''}`}>
            Contact
        </div>
      </header>
      <div className="content">
        <div className={`content-section ${animateContent ? 'animate-content' : ''}`}>
          <div className="content-item">
            <img src="portrait.jpg" alt="Portrait" className="portrait" />
          </div>
          <div className="content-item">
            <b>Hi, I'm Rayan Koutchoukali.</b><br />
            This is my website that I created from scratch with React. If you want to look through the code, here is the <a href="https://github.com/TheChunkyPotato/My-Website">GitHub repo</a>.
          </div>
        </div>
        <div className={`content-section ${animateContent ? 'animate-content' : ''}`}>
          <div className="content-item" style={{ fontSize: '50px' }}>
            I'm seeking an internship or a job in roles related to software programming and IT.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
