import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="horizontal">
          <img src="portrait.jpg" alt="Portrait" className="small-image rounded-image" />

          <p>
            <b>Hi, I'm Rayan Koutchoukali.</b><br />
            This is my website that I created from scratch with React. If you want to look through the code, here is the <a href="https://github.com/TheChunkyPotato/My-Website">GitHub repo</a>.
          </p>
        </div>

        <div className="vertical">
          <p>
            <a
              className="App-link"
              href="https://www.linkedin.com/in/rayan-koutchoukali/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
