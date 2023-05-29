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
          <div className="content-item" style={{ fontSize: '50px', maxWidth: '800px', textAlign: 'justify' }}>
            I'm currently seeking an internship or full-time position in roles related to software programming and IT.
          </div>
        </div>
        <div className={`content-section ${animateContent ? 'animate-content' : ''}`}>
          <div className="content-item">
            <img src="education.png" style={{ maxWidth: '150px', maxHeight: '150px' }}/>
          </div>
          <div className="content-item">
            <ul>
              <li>Senior at <b>Missouri S&T</b></li>
              <li>Majoring in <b>Computer Science</b></li>
              <li>Graduating in <b>December 2023</b></li>
            </ul>
          </div>
        </div>
        <div className={`content-section ${animateContent ? 'animate-content' : ''}`}>
          <div className="content-item">
            <img src="code.png" style={{ maxWidth: '150px', maxHeight: '150px' }}/>
          </div>
          <div className="content-item" style={{ marginRight: '125px' }}>
            <ul>
              <li>C++</li>
              <li>Python</li>
              <li>Java</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="content-item">
            <ul>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>SQL</li>
              <li>C#</li>
              <li>Rust</li>
            </ul>
          </div>
        </div>
        <div className={`content-section ${animateContent ? 'animate-content' : ''}`}>
          <div className="content-item">
            <a href="https://www.flaticon.com/free-icons/education" title="education icons" style={{ fontSize: '10px' }}>Education icons created by Freepik - Flaticon</a>
          </div>
          <div className="content-item">
            <a href="https://www.flaticon.com/free-icons/development" title="development icons" style={{ fontSize: '10px' }}>Development icons created by Freepik - Flaticon</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
