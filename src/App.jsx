import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  FaAd,
  FaBrain,
  FaChartLine,
  FaChalkboardTeacher,
  FaCode,
  FaComments,
  FaCss3Alt,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaLanguage,
  FaLinux,
  FaProjectDiagram,
  FaPython,
  FaRobot,
  FaTools,
  FaUsers,
  FaServer,
  FaUserTie,
  FaPlaneDeparture,
  FaUtensils,
  FaSpotify,
  FaFilm,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiNumpy,
  SiOpenai,
  SiPandas,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";
import { LuLayoutDashboard } from "react-icons/lu";

const workExperience = [
  {
    role: "AI Research Assistant",
    org: "TES - Remote, Auburn University, Alabama",
    period: "Sep 2025 - Present",
    datePosition: "inlineCard",
    points: [
      "Built an IoT sensor dashboard for Auburn Poultry Science with BluLog integrations and real-time shelf-life monitoring views.",
      "Developed Node.js, Express.js, JavaScript, and SQL reporting workflows that improved turnaround by 25%.",
      "Integrated OpenAI LLM flows with RAG-style context to query trends, anomaly flags, and predictive signals in natural language.",
      "Strengthened API quality with Postman validation, faster issue detection, and WCAG-aligned frontend improvements.",
    ],
  },
  {
    role: "Graduate Teaching Assistant",
    org: "Auburn University, Alabama",
    period: "Aug 2024 - May 2025",
    datePosition: "inlineCard",
    points: [
      "Mentored 120+ students in MATLAB and Python across labs, debugging sessions, and applied programming exercises.",
      "Delivered 100% on-time grading for assignments, quizzes, and projects through structured evaluation workflows.",
      "Improved student retention and feedback by increasing instructional clarity and support availability.",
    ],
  },
  {
    role: "Research Assistant (Capstone Project)",
    org: "Auburn University College of Pharmacy (AI.Pharm Group), Alabama",
    period: "Aug 2024 - Dec 2024",
    datePosition: "inlineCard",
    points: [
      "Processed 54,000+ cell genomic datasets into NumPy-based Genomaps for downstream ML analysis.",
      "Built a ResNet50 plus RandomForest pipeline in Python with 59.62% classification accuracy.",
      "Analyzed misclassification patterns and tuned feature representations for model stability gains.",
    ],
  },
  {
    role: "Development Intern",
    org: "HeadVest, Hyderabad, India",
    period: "Sep 2021 - June 2023",
    datePosition: "inlineCard",
    points: [
      "Developed and maintained a responsive, accessible web interface using React.js, Next.js, HTML, and CSS with Tailwind CSS, ensuring consistent branding across devices for 200+ smart helmet users.",
      "Developed PHP REST APIs for catalog, authentication, cart operations, addresses, and order placement, ensuring clean integration between React UI and backend services.",
      "Improved storefront performance by optimizing React rendering and adding pagination/filtering for product lists, reducing page load time by 20-30%.",
    ],
  },
];

const projects = [
  {
    title: "Books and Logistics Database",
    period: "Spring 2024",
    stack: "PHP | MySQL | HTML | CSS",
    github: "https://github.com/aasrith12/Books-and-Logistics-DB-with-SQL-Editor",
    description:
      "Virtual library platform with an integrated SQL editor for custom queries and guided templates.",
    highlights: ["15+ predefined query templates", "Responsive inventory and logistics interface"],
  },
  {
    title: "Fashion Product Classification",
    stack: "Python | TensorFlow/Keras | Deep Learning",
    github: "https://github.com/aasrith12/Fashion-Product-Classification",
    description:
      "AI system that predicts product type, color, usage, and category using trained .h5 models and metadata.",
    highlights: ["Multi-attribute prediction pipeline", "Packaged local inference workflow"],
  },
  {
    title: "CultureBump",
    stack: "Next.js | JavaScript",
    github: "https://github.com/Mandeep-Andey/CultureBump",
    description:
      "Cross-cultural guidance platform for etiquette and communication insights with a responsive UX.",
    highlights: ["Interactive modern web UI", "Communication-first content structure"],
  },
];

const education = [
  {
    school: "Auburn University",
    degree: "Master's Degree, Computer Science",
    period: "Aug 2023 - May 2025",
    logo: "/auburn-logo.jpeg",
  },
  {
    school: "HITAM (Hyderabad Institute of Technology and Management)",
    degree: "Bachelor of Technology, Electrical, Electronics and Communications Engineering",
    period: "2019 - 2023",
    logo: "/hitam-logo.jpeg",
  },
];

const volunteering = [
  {
    role: "Student Dean, Research and Development",
    org: "HITAM",
    period: "May 2022 - Apr 2023",
    points: [
      "Coordinated workshops and conferences connecting students with industry experts.",
      "Organized technical conferences and events, consistently driving over 90% student participation.",
      "Mentored peers for impactful publications and community-driven projects.",
      "Led initiatives that increased student participation by 25%.",
    ],
  },
  {
    role: "Vice President",
    org: "Indian Students Association at Auburn University",
    period: "Oct 2023 - Nov 2024",
    points: [
      "Managed communication channels and supported planning and execution of major Indian festive events on campus.",
      "Helped build inclusive events that welcomed diverse student communities across campus.",
      "Contributed strategic and execution support that helped one festive event win a Best Event recognition at the Involvement Awards.",
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aasrithsatya", Icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/aasrith12", Icon: FaGithub },
  { label: "Instagram", href: "https://instagram.com/", Icon: FaInstagram },
  { label: "Gmail", href: "mailto:aasrithsatya@gmail.com", Icon: MdEmail },
];

const whatIDo = [
  {
    title: "UI/UX Design",
    description: "Designing clean, user-friendly interfaces with clear hierarchy, responsive behavior, and modern interaction patterns.",
    Icon: LuLayoutDashboard,
  },
  {
    title: "Web Development",
    description: "Building high-quality web apps with React, Next.js, Node.js, and scalable frontend architecture for production use.",
    Icon: FaCode,
  },
  {
    title: "Generative AI",
    description: "Integrating LLMs, prompt pipelines, and RAG-style context flows to deliver practical AI experiences in real products.",
    Icon: SiOpenai,
  },
  {
    title: "Backend & Data Systems",
    description: "Developing robust APIs, SQL reporting, and data workflows for research dashboards, automation, and analytics.",
    Icon: FaServer,
  },
];

const storySlides = [
  { src: "/slideshow/mysuru.jpeg", title: "ICTIEE'23 - Mysuru" },
  { src: "/slideshow/mysuru 2.jpeg", title: "Conference Moments" },
  { src: "/slideshow/best student.jpeg", title: "Recognition" },
  { src: "/slideshow/involvement award.jpeg", title: "Involvement Award" },
  { src: "/slideshow/with aubie.jpeg", title: "Auburn Memories" },
];

const skillsTicker = [
  { name: "Large Language Model Operations (LLMOps)", Icon: SiOpenai },
  { name: "Artificial Intelligence (AI)", Icon: FaRobot },
  { name: "React.js", Icon: SiReact },
  { name: "PyTorch", Icon: SiPytorch },
  { name: "Convolutional Neural Networks (CNN)", Icon: FaBrain },
  { name: "Random Forest", Icon: SiScikitlearn },
  { name: "NumPy", Icon: SiNumpy },
  { name: "Pandas", Icon: SiPandas },
  { name: "TensorFlow", Icon: SiTensorflow },
  { name: "ResNet50", Icon: FaBrain },
  { name: "Matplotlib", Icon: FaChartLine },
  { name: "k-means clustering", Icon: SiScikitlearn },
  { name: "students in research", Icon: FaUsers },
  { name: "Behavioral Research", Icon: FaProjectDiagram },
  { name: "Research Skills", Icon: FaTools },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Adobe XD", Icon: FaAd },
  { name: "Front-End Development", Icon: FaCode },
  { name: "Figma (Software)", Icon: FaFigma },
  { name: "Python (Programming Language)", Icon: FaPython },
  { name: "Linux", Icon: FaLinux },
  { name: "SQL", Icon: FaDatabase },
  { name: "User Interface Design", Icon: FaFigma },
  { name: "Microsoft Office", Icon: FaTools },
  { name: "MATLAB", Icon: FaChartLine },
  { name: "HTML", Icon: FaHtml5 },
  { name: "Cascading Style Sheets (CSS)", Icon: FaCss3Alt },
  { name: "XML", Icon: FaCode },
  { name: "JavaScript", Icon: FaJs },
  { name: "GitHub", Icon: FaGithub },
  { name: "Presentations", Icon: FaChalkboardTeacher },
  { name: "Problem Solving", Icon: FaTools },
  { name: "Engineering", Icon: FaProjectDiagram },
  { name: "Project Management", Icon: FaProjectDiagram },
  { name: "English", Icon: FaLanguage },
  { name: "Communication", Icon: FaComments },
  { name: "Strategy", Icon: FaChartLine },
  { name: "Azure AI Studio", Icon: FaDatabase },
  { name: "Machine Learning", Icon: SiScikitlearn },
  { name: "Generative AI", Icon: SiOpenai },
  { name: "Natural Language Processing (NLP)", Icon: FaComments },
  { name: "Microsoft Azure", Icon: FaDatabase },
  { name: "Git", Icon: FaGitAlt },
];

function TimelineItem({ title, subtitle, period, points, index, datePosition }) {
  const isRight = index % 2 === 1;
  const isInlineDate = datePosition === "inlineCard";

  return (
    <article className={`timeline-item ${isRight ? "right" : "left"}`}>
      <div className="timeline-marker" aria-hidden="true">
        <FaUserTie />
      </div>

      <div className="timeline-card card">
        <div className="timeline-card-head">
          <h3>{title}</h3>
          {isInlineDate ? <span className="timeline-inline-date">{period}</span> : null}
        </div>
        <p className="meta">{subtitle}</p>
        <ul className="detail-list">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function App() {
  const isAboutPage = typeof window !== "undefined" && window.location.pathname.replace(/\/$/, "") === "/about";
  const [activeSlide, setActiveSlide] = useState(0);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.16 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAboutPage) return undefined;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % storySlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isAboutPage]);

  useEffect(() => {
    const root = document.documentElement;
    let rafId = null;

    const updateParallax = (event) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        root.style.setProperty("--mx", `${(x * 140).toFixed(1)}px`);
        root.style.setProperty("--my", `${(y * 110).toFixed(1)}px`);
      });
    };

    const resetParallax = () => {
      root.style.setProperty("--mx", "0px");
      root.style.setProperty("--my", "0px");
    };

    window.addEventListener("pointermove", updateParallax, { passive: true });
    window.addEventListener("mousemove", updateParallax, { passive: true });
    window.addEventListener("pointerleave", resetParallax);

    return () => {
      window.removeEventListener("pointermove", updateParallax);
      window.removeEventListener("mousemove", updateParallax);
      window.removeEventListener("pointerleave", resetParallax);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="bg-parallax" aria-hidden="true">
        <div className="bg-gradient"></div>
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
      </div>
      <div className="noise" aria-hidden="true"></div>
      <div className="glow glow-1" aria-hidden="true"></div>
      <div className="glow glow-2" aria-hidden="true"></div>

      {!isAboutPage ? (
        <main>
        <section className="hero reveal">
          <div className="hero-copy">
            <p className="kicker">Intelligent Systems Developer | Full-Stack Developer</p>
            <h1>Simple builds, strong impact.</h1>
            <p className="lead">
              I design and ship AI-enabled web products with clean UX, practical architecture, and measurable outcomes.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="/about">
                More About Me
              </a>
              <a className="btn btn-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">
                Resume
              </a>
            </div>

            <div id="skills" className="hero-skills">
              <p className="hero-skills-label">Skills & Expertise</p>
              <div className="skills-marquee compact">
                <div className="skills-track">
                  {[...skillsTicker, ...skillsTicker].map((item, idx) => (
                    <span key={`${item.name}-${idx}`} className="skill-pill">
                      <item.Icon className="skill-icon" aria-hidden="true" />
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="what-i-do">
              <h2>What I&apos;m Doing</h2>
              <div className="what-grid">
                {whatIDo.map((item) => (
                  <article key={item.title} className="what-card">
                    <item.Icon className="what-icon" aria-hidden="true" />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-side">
            <article className="profile-card" aria-label="Profile card">
              <img className="profile-image" src="/hero-image.jpeg" alt="Aasrith Satya Matta portrait" />
              <h3 className="profile-name">Aasrith Satya Matta</h3>
              <p className="profile-text">
                Software Engineer focused on practical AI products, robust backend systems, and clean frontend design.
              </p>
              <div className="profile-links">
                {socialLinks.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="social-link">
                    <item.Icon className="social-icon" aria-hidden="true" />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </article>

          </div>
        </section>

        <section id="experience" className="section reveal">
          <h2>Work Experience</h2>
          <div className="timeline">
            {workExperience.map((item, index) => (
              <TimelineItem
                key={`${item.role}-${item.period}`}
                index={index}
                title={item.role}
                subtitle={item.org}
                period={item.period}
                datePosition={item.datePosition}
                points={item.points}
              />
            ))}
          </div>
        </section>

        <section id="projects" className="section reveal">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="card project-card">
                <div className="project-head">
                  <h3>{project.title}</h3>
                  <a
                    className="project-github"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    title="Open GitHub repository"
                  >
                    <FaGithub aria-hidden="true" />
                  </a>
                </div>
                <p className="meta">{project.period ? `${project.period} | ${project.stack}` : project.stack}</p>
                <p>{project.description}</p>
                <div className="chip-row">
                  {project.highlights.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section reveal">
          <h2>Education</h2>
          <div className="stack">
            {education.map((item) => (
              <article key={item.school} className="card">
                <div className="edu-head">
                  <img className="edu-logo" src={item.logo} alt={`${item.school} logo`} />
                  <h3>{item.school}</h3>
                </div>
                <p className="meta">{item.degree}</p>
                <p>{item.period}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal">
          <h2>Volunteering</h2>
          <div className="stack">
            {volunteering.map((item) => (
              <article key={`${item.role}-${item.period}`} className="card">
                <h3>{item.role}</h3>
                <p className="meta">
                  {item.period} | {item.org}
                </p>
                <ul className="detail-list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        </main>
      ) : (
        <main>
          <section className="section reveal">
            <p className="kicker">About Me</p>
            <h1>Who I Am Beyond The Resume.</h1>
            <p className="lead">
              I am a quiet builder at heart who grew through people, responsibility, and persistence. My story is
              about starting uncertain, staying consistent, and finding purpose through community and technology.
            </p>
          </section>

          <section className="section reveal">
            <h2>My Story</h2>
            <article className="card about-card about-story">
              <p>
                I began my undergraduate journey in Hyderabad, Telangana, one of India&apos;s fastest-growing tech
                ecosystems, at the Hyderabad Institute of Technology and Management (HITAM). I entered campus late,
                almost a month behind, feeling confused and uncertain. At that point, I did not have a clear picture
                of where I belonged. What I did have was one decision: finish strong and make the most of the
                opportunity in front of me.
              </p>
              <p>
                Over four years, that uncertainty slowly transformed into confidence. HITAM became more than a college;
                it became the place where I learned leadership, responsibility, and self-belief. From organizing
                seminars and contributing to major events to serving as Student Dean for Research and Development, I
                started getting recognized not just for technical work, but for ownership and reliability. Experiences
                like SSG initiatives and TEDx organizing shaped the way I collaborate, think under pressure, and lead
                with clarity.
              </p>
              <p>
                One defining moment from that journey was presenting my research paper at the Tenth International
                Conference for Transformations in Engineering Education (ICTIEE&apos;23) at Vidyavardhaka Engineering
                College, Mysuru, Karnataka, India. Being one of the only students presenting among doctors,
                professors, deans, and principals was both humbling and deeply motivating. That experience gave me a
                strong sense of confidence and reminded me that meaningful work, when pursued consistently, earns its
                own stage.
              </p>
              <p>
                The strongest part of that phase was people. I deeply value friendship, and my college years gave me a
                circle I see as family: seniors, batchmates, and juniors who stood by me in every high and low. I
                also remain grateful to mentors and faculty who believed in me at the right moments and helped me grow
                into a better teammate and leader.
              </p>
              <p>
                After graduation, I moved to the United States for my Master&apos;s in Computer Science at Auburn
                University. Arriving alone felt like stepping into a completely new world. I adapted by balancing
                academics with real-life responsibility, including working at Chick-fil-A in student dining to support
                myself. I also stayed connected to community by volunteering with the Indian Students Association,
                serving as Vice President of Marketing and Publicity. That phase taught me resilience, independence,
                and the ability to build meaningful connections across cultures.
              </p>
              <p>
                Today, I focus on AI-enabled product development, practical engineering, and thoughtful user
                experiences. I still carry the same mindset from day one: stay grounded, keep learning, value people,
                and leave every place better than I found it.
              </p>
            </article>
          </section>

          <section className="section reveal">
            <h2>Journey Highlights</h2>
            <div className="about-slideshow">
              <div className="slides-stage">
                {storySlides.map((slide, index) => {
                  const count = storySlides.length;
                  let offset = (index - activeSlide + count) % count;
                  if (offset > count / 2) offset -= count;
                  const isVisible = Math.abs(offset) <= 1;
                  const classes = [
                    "slide-card",
                    offset === 0 ? "active" : "",
                    offset === -1 ? "prev" : "",
                    offset === 1 ? "next" : "",
                    !isVisible ? "hidden" : "",
                  ]
                    .filter(Boolean)
                    .join(" ");

                  return (
                    <article key={slide.src} className={classes}>
                      <img src={slide.src} alt={slide.title} />
                      <p>{slide.title}</p>
                    </article>
                  );
                })}
              </div>

              <div className="slide-controls">
                <button
                  type="button"
                  className="slide-btn"
                  onClick={() => setActiveSlide((prev) => (prev - 1 + storySlides.length) % storySlides.length)}
                >
                  Prev
                </button>
                <div className="slide-dots">
                  {storySlides.map((slide, index) => (
                    <button
                      key={slide.src}
                      type="button"
                      className={`dot-btn ${index === activeSlide ? "active" : ""}`}
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="slide-btn"
                  onClick={() => setActiveSlide((prev) => (prev + 1) % storySlides.length)}
                >
                  Next
                </button>
              </div>
            </div>
          </section>

          <section className="section reveal">
            <h2>Interests</h2>
            <div className="about-grid">
              <article className="card about-card">
                <h3>Traveling</h3>
                <p>
                  Traveling helps me reset perspective. Every journey teaches me something about people, culture, and
                  the way environments shape thinking.
                </p>
                <p>
                  In India, my travel memories are deeply connected to cities like Hyderabad, Bangalore, Delhi,
                  Mysore, Chennai, Kochi, Goa, Mumbai, Jaipur, Agra, and Vizag, each with a unique pace, language,
                  food culture, and rhythm of life. In the US, journeys across Atlanta, Nashville, Dallas, Miami,
                  Kansas City, Gatlinburg, and Savannah gave me a fresh perspective on independence, cultural
                  diversity, and personal growth. These experiences continue to shape how I observe, adapt, and
                  connect with people.
                </p>
                <p className="travel-quote">
                  &quot;One&apos;s destination is never a place, but a new way of seeing things.&quot; - Henry Miller
                </p>
                <div className="travel-flight" aria-hidden="true">
                  <div className="flight-line"></div>
                  <FaPlaneDeparture className="plane-icon" />
                </div>
              </article>
              <article className="card about-card">
                <h3>Food</h3>
                <p>
                  Food is one of my favorite ways to understand people and culture. I enjoy exploring different
                  cuisines and trying authentic flavors across places and communities.
                </p>
                <p>
                  I have enjoyed Italian, Mexican, American, Spanish, Mediterranean, Greek, Japanese, Thai, Korean,
                  Chinese, Lebanese, Arabian, Bengali, and Cuban dishes. As an Indian, I always come back to soulful
                  curry-based meals and rich regional home-style food, which still feels like the most comforting meal
                  after any long day. I especially enjoy discovering neighborhood spots that carry authentic flavor and
                  stories behind every dish. For me, great food is not just taste, it is memory, culture, and
                  connection served on a plate.
                </p>
                <p className="food-quote">
                  &quot;Food is a central activity of mankind and one of the single most significant trademarks of a
                  culture.&quot; - Mark Kurlansky
                </p>
                <div className="food-motion" aria-hidden="true">
                  <div className="food-line"></div>
                  <FaUtensils className="food-icon" />
                  <span className="steam steam-a"></span>
                  <span className="steam steam-b"></span>
                </div>
              </article>
            </div>
          </section>

          <section className="section reveal">
            <h2>Hobbies</h2>
            <div className="about-grid">
              <article className="card about-card">
                <h3>Music</h3>
                <p>
                  Music is a big part of how I connect with emotions and stay inspired. I enjoy Indian filmy music
                  for its storytelling and depth, it has a way of capturing feelings in a way nothing else can. I am
                  also a fan of iconic boy bands like One Direction and NSYNC, whose music brings a mix of nostalgia
                  and energy. At the same time, I really appreciate powerful background scores, especially from
                  composers like Hans Zimmer, where the music itself tells a story. For me, it is all about music
                  that feels immersive, emotional, and memorable.
                </p>
                <a
                  className="hobby-link"
                  href="https://open.spotify.com/user/bn22dak9zd2bt4gas9oktkc64?si=bbc9faaff9ae4303"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaSpotify aria-hidden="true" />
                  <span>Spotify</span>
                </a>
              </article>
              <article className="card about-card">
                <h3>Movies</h3>
                <p>
                  Movies, for me, are all about storytelling and the overall experience they create. I enjoy films
                  that are emotionally engaging and well-crafted, especially Indian cinema that blends strong
                  narratives with music and visuals. At the same time, I appreciate global films with strong
                  direction and cinematic depth. I am particularly drawn to movies with impactful background scores,
                  those that stay with you even after the credits roll. Whether it is a feel-good story, a
                  thought-provoking plot, or a visually immersive film, I like movies that make me feel something and
                  leave a lasting impression.
                </p>
                <a className="hobby-link" href="https://boxd.it/iZBjz" target="_blank" rel="noreferrer">
                  <FaFilm aria-hidden="true" />
                  <span>Letterboxd</span>
                </a>
              </article>
            </div>
          </section>
        </main>
      )}

      <div className="footer-top-action">
        <a className="footer-home-btn" href="/">
          Back to Home
        </a>
      </div>

      <footer className="site-footer">
        <div className="footer-inner">
          <p className="footer-brand">
            {"</>"} Aasrith Satya Matta
          </p>
          <p className="footer-meta">Built with {"<3"} using React, JavaScript, and CSS.</p>
          <p className="footer-copy">© {currentYear} Aasrith Satya Matta. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
