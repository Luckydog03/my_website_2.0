import './App.css'

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <header className="hero">
        <h1>Anthony Donsereaux Jr.</h1>
        <p>Software Developer | Portfolio</p>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Welcome to my portfolio! I’m a CSU Computer Science graduate with 
            experience in Java, Python, SQL, React, Unity, and more.
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>🔥 FireBird Wildfire Analysis</li>
            <li>🎮 Unity Game Projects</li>
            <li>💻 Personal Portfolio Website</li>
          </ul>
        </section>

        <section id="resume">
          <h2>Resume</h2>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            View My Resume
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
