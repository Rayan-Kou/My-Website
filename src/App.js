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
          <p className="large-text">
            I'm seeking an internship or a job in roles related to software programming and IT.
          </p>

          <p>
            <b>Education</b><br />
            I'm currently a senior at Missouri University of Science and Technology majoring in computer science. I graduate in December 2023.
          </p>

          <p>
          <b>Experience</b><br />
            <ul>
              <li>C++</li>
              <li>Python</li>
              <li>Java</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>SQL</li>
              <li>C#</li>
              <li>Rust</li>
            </ul>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
