import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="portrait.jpg" alt="Portrait" className="small-image rounded-image" />

        <p>
          <b>Hi, I'm Rayan Koutchoukali.</b><br />
          This is my website that I created with React. If you want to look through the code, here is the <a href="https://github.com/TheChunkyPotato/My-Website">GitHub repo</a>.
        </p>

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
      </header>
    </div>
  );
}

export default App;
