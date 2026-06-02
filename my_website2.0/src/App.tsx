import { useEffect, useRef, useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './App.css'

type SectionId = 'home' | 'about' |'projects' | 'experience' | 'resume'

function App() {
  const [active, setActive] = useState<SectionId>('home')

  // Track which section is in view to highlight the nav
  useEffect(() => {
    const ids: SectionId[] = ['home', 'about', 'projects', 'experience', 'resume']
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  // Smooth-scroll helper
  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function SkillCategory({ title, items }: { title: string; items: string[] }) {
    return (
      <article className="skill-card">
        <h4>{title}</h4>
        <ul className="skill-list">
          {items.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </article>
    )
  }

  return (
    <div className="App">
      {/* Sticky One-Page Navbar */}
      <nav className="navbar">
        <a
          href="#home"
          onClick={(e) => onNavClick(e, 'home')}
          className={active === 'home' ? 'active' : ''}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={(e) => onNavClick(e, 'about')}
          className={active === 'about' ? 'active' : ''}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={(e) => onNavClick(e, 'projects')}
          className={active === 'projects' ? 'active' : ''}
        >
          Projects
        </a>
        <a
          href="#experience"
          onClick={(e) => onNavClick(e, 'experience')}
          className={active === 'experience' ? 'active' : ''}
        >
          Experience
        </a>
        <a
          href="#resume"
          onClick={(e) => onNavClick(e, 'resume')}
          className={active === 'resume' ? 'active' : ''}
        >
          Resume
        </a>

      </nav>

      {/* HERO */}
      <header id="home" className="section hero">
        <div className="hero-content">
          <p className="eyebrow">Hello, I'm</p>

          <h1>
            Anthony <span>Donsereaux Jr.</span>
          </h1>

          <p className="hero-subtitle">
            Software Developer focused on building practical, user-friendly applications
            with React, TypeScript, Python, Java, SQL, and Unity.
          </p>

          <div className="links">
            <a
              className="primary-button"
              href="#projects"
              onClick={(e) => onNavClick(e, 'projects')}
            >
              View Projects
            </a>

            <a
              className="secondary-button"
              href="/DonsereauxSwResume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Open Resume
            </a>

            <a
              className="icon-link"
              href="https://github.com/Luckydog03"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <GitHubIcon />
            </a>

            <a
              className="icon-link"
              href="https://www.linkedin.com/in/anthony-donsereaux-jr"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="avatar-wrap">
          <img
            src="/headshot-center-480.webp"
            alt="Portrait of Anthony Donsereaux Jr."
            className="avatar"
            width={360}
            height={360}
            decoding="async"
          />
        </div>
      </header>

      {/* ABOUT ME */}
      <section id="about" className="section about-section">
        <div className="about-card">
          <div className="about-main">
            <p className="section-label">About Me</p>
            <h2>A little about who I am</h2>

            <p>
              I&apos;m a Computer Science graduate from Colorado State University with a
              background in software development, teaching, and team leadership. I enjoy
              building clean, practical applications and solving problems that connect
              technical ideas to real-world use.
            </p>
          </div>

          <div className="about-details">
            <article className="about-detail">
              <span className="about-icon">🎓</span>
              <div>
                <h3>Education</h3>
                <p>B.S. Computer Science</p>
                <p>Minor in Business Administration</p>
              </div>
            </article>

            <article className="about-detail">
              <span className="about-icon">💻</span>
              <div>
                <h3>Focus</h3>
                <p>Full-Stack Development</p>
                <p>React · TypeScript · Python · SQL</p>
              </div>
            </article>

            <article className="about-detail">
              <span className="about-icon">📍</span>
              <div>
                <h3>Location</h3>
                <p>Colorado</p>
                <p>Open to software roles</p>
              </div>
            </article>

            <article className="about-detail">
              <span className="about-icon">⭐</span>
              <div>
                <h3>Interests</h3>
                <p>Music · Cooking · Games</p>
                <p>Anime · Game Development</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>🚀 Projects</h2>

        <article className="card">
          <h3>🌐 Portfolio Website</h3>
          <p>
            Built with <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Vite</strong> to
            showcase my skills, resume, and creative work. Focused on responsive design, smooth one-page
            navigation, and clean UI/UX.
          </p>
          <div className="actions">
            <a href="https://github.com/Luckydog03/my_website_2.0" target="_blank" rel="noreferrer">GitHub Repo</a>
          </div>
        </article>

        <article className="card">
          <h3>🎮 Gamedev.js Game Jam 2025</h3>
          <p>
            Two-week jam: co-created a <strong>top-down, level-based RPG</strong> in <strong>Unity</strong>.
            Led level design, gameplay mechanics, and rapid iteration to balance player experience under strict
            deadlines.
          </p>
          <div className="actions">
            <a href="https://github.com/gschleich/Gamedev.js-Jam-2025" target="_blank" rel="noreferrer">GitHub Repo</a>
            <a href="https://bluegarrett.itch.io/ashesandascension" target="_blank" rel="noreferrer">Play Game</a>
          </div>
        </article>

        <article className="card">
          <h3>🛡️ Brackey’s Game Jam 2025.1</h3>
          <p>
            One-week jam: co-developed a <strong>tower defense</strong> game in <strong>Unity</strong>. Prioritized
            essential mechanics, streamlined the art pipeline, and delivered a fun, replayable core loop.
          </p>
          <div className="actions">
            <a href="https://github.com/gschleich/Brackeys-Game-Jam-2025.1-NCGW-" target="_blank" rel="noreferrer">GitHub Repo</a>
            <a href="https://bluegarrett.itch.io/flawlessfortress" target="_blank" rel="noreferrer">Play Game</a>
          </div>
        </article>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <h2>💼 Experience</h2>

        <article className="item">
          <h3>💪 More Coaching - Web Developer</h3>
          <p className="date">Mar 2026 - Current</p>
          <p>Sole engineer responsible for end-to-end UI/UX design, front-end development, and backend integration for email request handling.
            Designed and implemented the website architecture independently, ensuring usability,responsiveness, and maintainability.
          </p>
        </article>

        <article className="item">
          <h3>🍳 Pelican Lakes The Lodge - Lead/Pastry Chef</h3>
          <p className="date">Mar 2025 - Mar 2026</p>
          <p>Lead daily kitchen operations in a high-volume restaurant environment while maintaining quality, consistency, and efficiency.
            Developed and introduced dessert menu offerings to expand the restaurant’s culinary program.
          </p>
        </article>

        <article className="item">
          <h3>🔥 FireBird Technologies — Tech Consultant Intern</h3>
          <p className="date">Dec 2024 – Feb 2025</p>
          <p>
            Contributed to a <strong>Python</strong> pipeline for detecting and aggregating wildfire perimeters
            using <strong>GeoPandas</strong> and <strong>Shapely</strong>. Collaborated with a distributed team:
            agile meetings, code reviews, and troubleshooting to improve data accuracy.
          </p>
        </article>

        <article className="item">
          <h3>🎓 Colorado State University — Teaching Assistant</h3>
          <p className="date">Aug 2023 – Dec 2024</p>
          <p>
            Taught intro <strong>Python</strong> and <strong>Java</strong> for 150+ students/semester. Mentored on
            academic paths, internships, and <strong>pandas</strong>-based data analytics; simplified complex ideas
            for diverse learners.
          </p>
        </article>

        <article className="item">
          <h3>🍕 Dion’s — Assistant Manager</h3>
          <p className="date">Mar 2017 – Aug 2019</p>
          <p>
            Managed a 20-person team; trained staff on food prep, safety compliance, and financial operations in a
            fast-paced, customer-focused environment.
          </p>
        </article>

        <article className="item">
          <h3>🧪 Natural Sciences College Counsil</h3>
          <p> 
            Advised the Dean’s office on new
            academic policies and procedures,
            influencing decisions affecting over 4,000
            students. 
          </p>
        </article>

        <article className="item">
          <h3>📚 Coursework Projects</h3>
          <ul>
            <li>
              <strong>Object-Oriented Design</strong> — Chess web app; used <strong>GitLab</strong> for issues,
              CI/CD, and agile collaboration.
            </li>
            <li>
              <strong>Software Engineering</strong> — GPS app with Scrum; <strong>TDD</strong>, <strong>Postman</strong>, and CI/CD.
            </li>
            <li>
              <strong>Mixed Reality Design</strong> — VR game in <strong>Unreal Engine 5</strong>.
            </li>
            
            {/* <li>
              <strong>Cybersecurity · Databases · Algorithms · Applied Statistics</strong>.
            </li> */}
          </ul>
        </article>
      </section>

      {/* RESUME */}
      <section id="resume" className="section">
        <h2>📄 Resume</h2>

        <h3>Skills</h3>

        <div className="skills-grid">
          <SkillCategory
            title="Languages"
            items={['Java', 'Python', 'C', 'C++', 'C#', 'TypeScript', 'SQL', 'HTML/CSS']}
          />
          <SkillCategory
            title="Frontend"
            items={['React']}
          />
          <SkillCategory
            title="Databases"
            items={['MySQL']}
          />
          <SkillCategory
            title="Tools"
            items={['GitHub', 'VS Code', 'Postman', 'Anaconda']}
          />
          <SkillCategory
            title="Game Development"
            items={['Unity', 'Unreal Engine 5', 'GameMaker Studio 2']}
          />
          <SkillCategory
            title="Professional"
            items={['Agile & Scrum', 'Team Management', 'Time Management', 'Training', 'Teaching', 'Customer Service']}
          />
        </div>

        <p>View or download my latest resume.</p>
        <a className="button" href="/DonsereauxSwResume.pdf" target="_blank" rel="noreferrer">
          Open Resume (PDF)
        </a>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Anthony Donsereaux Jr.</p>
      </footer>
    </div>
  )
}

export default App
