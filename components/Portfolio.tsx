"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, ExternalLink, Github, Mail, MapPin, Menu, Phone, Sparkles, X } from "lucide-react";
import { useState } from "react";

const services = [
  { number: "01", title: "Full Stack Development", text: "Responsive web applications built from clean interfaces through reliable backend APIs." },
  { number: "02", title: "Backend & APIs", text: "Practical HTTP services, CRUD workflows and database-backed features with Java and Python." },
  { number: "03", title: "Cloud Deployment", text: "Deploying real projects to Azure App Service with GitHub workflows and production thinking." },
  { number: "04", title: "AI & IoT Projects", text: "Computer vision experiments and connected hardware that turn data into useful decisions." },
];

const journey = [
  { year: "2025 — 2026", role: "Software Developer Trainee", place: "Project-based learning & development", text: "Built and deployed full-stack applications while strengthening Java, Python, REST, MySQL and cloud fundamentals." },
  { year: "2023 — 2026", role: "Bachelor of Computer Applications", place: "Thiagarajar College, Madurai", text: "Graduated with a 7.39 CGPA and developed a practical foundation across programming, databases and web technologies." },
  { year: "2023", role: "Higher Secondary Certificate", place: "Annai Velankanni Matric Hr. Sec. School", text: "Completed higher secondary education with 80%." },
];

const skills: [string, number][] = [
  ["Java", 75], ["Python", 75], ["HTML / CSS / JavaScript", 75], ["MySQL / MongoDB", 75],
  ["REST APIs & HTTP", 60], ["Azure & CI/CD", 55], ["OpenCV & SVM", 52], ["Git & GitHub", 57],
];

const projects = [
  { number: "01", title: "Smart Parking Management System", label: "Full Stack · Cloud", text: "A complete parking workflow with a custom Python HTTP backend, REST-style CRUD APIs, MySQL persistence and Azure deployment.", tags: ["Python", "MySQL", "Azure"], live: "https://smart-parking-prawin-2026-hmeydpcberd3g4an.southeastasia-01.azurewebsites.net", github: "https://github.com/prawin0614/smart-parking-management-app" },
  { number: "02", title: "Feedback Management System", label: "React · Java Full Stack", text: "A responsive React feedback application with reusable frontend components, Java backend contribution and Azure App Service deployment.", tags: ["React", "Java", "Azure"], live: "https://feedback-frontend-app-gmdwa5a5f9b5fme8.centralindia-01.azurewebsites.net/", github: "https://github.com/prawin0614" },
  { number: "03", title: "Coconut Husk Sorting System", label: "AI + IoT", text: "An image-classification pipeline using OpenCV and SVM for automated quality-based sorting, connected to IoT hardware and a live dashboard.", tags: ["Python", "OpenCV", "SVM"], live: "https://drive.google.com/file/d/1aZjx71Z9RYLNV7MZYlA0ZCwa__sfV0sh/view", github: "https://github.com/prawin0614" },
];

const reveal = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } } };

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const nav = ["About", "Services", "Journey", "Skills", "Projects", "Contact"];
  const closeMenu = () => setOpen(false);

  return (
    <main>
      <div className="intro-loader" aria-hidden="true"><span>Prawin.</span></div>
      <header className="site-header">
        <nav className="nav shell">
          <a className="logo" href="#home" onClick={closeMenu}>Prawin<span>.</span></a>
          <div className={`nav-links ${open ? "is-open" : ""}`}>
            {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
            <a className="nav-button" href="mailto:prawinaofficial@gmail.com">Hire me <ArrowUpRight size={15} /></a>
          </div>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <section id="home" className="hero shell">
        <motion.div initial="hidden" animate="show" variants={reveal} className="hero-copy">
          <p className="overline"><span /> Hi, I&apos;m · Madurai, India</p>
          <h1>Prawin <i>A.</i></h1>
          <p className="hero-intro"><strong>Full Stack Developer</strong> building thoughtful applications with Java, Python and cloud technologies, turning practical ideas into working software.</p>
          <div className="hero-actions"><a className="button button-dark" href="#projects">View my work <ArrowDown size={16} /></a><a className="button button-light" href="mailto:prawinaofficial@gmail.com">Let&apos;s talk <ArrowUpRight size={16} /></a></div>
          <div className="hero-meta"><a href="https://github.com/prawin0614" target="_blank" rel="noreferrer"><Github size={16} /> github.com/prawin0614</a><span>Open to opportunities</span></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8 }} className="hero-portrait">
          <Image src="/profile.png" alt="Prawin A" fill priority sizes="(max-width: 800px) 88vw, 450px" />
          <div className="portrait-caption"><span>PA</span><b>Java · Python · Cloud</b><small>Available for new work</small></div>
        </motion.div>
      </section>

      <div className="marquee"><div>JAVA <span>✦</span> PYTHON <span>✦</span> FULL STACK <span>✦</span> AZURE <span>✦</span> REST APIS <span>✦</span> MYSQL <span>✦</span> AI + IOT <span>✦</span> JAVA <span>✦</span> PYTHON <span>✦</span></div></div>

      <section id="about" className="section shell">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal} className="section-heading"><p className="eyebrow">01 / ABOUT ME</p><h2>Know more<br /><em>about me.</em></h2></motion.div>
        <div className="about-layout"><div className="about-text"><p className="large-copy">A curious developer with a practical instinct for turning a problem into a product.</p><p>I enjoy understanding how software works end to end, from the data model and backend logic to the interface a person uses. My work combines application development, cloud deployment, machine learning and IoT.</p><a className="inline-link" href="#journey">See my journey <ArrowUpRight size={15} /></a></div><div className="info-list"><div><span>Education</span><strong>BCA · 7.39 CGPA</strong></div><div><span>Based in</span><strong>Madurai, Tamil Nadu</strong></div><div><span>Focus</span><strong>Java · Python · Full Stack</strong></div><div><span>Languages</span><strong>English · Tamil</strong></div></div></div>
      </section>

      <section id="services" className="cream-section"><div className="shell"><div className="section-heading"><p className="eyebrow">02 / WHAT I PROVIDE</p><h2>Skills with a<br /><em>purpose.</em></h2></div><div className="service-grid">{services.map((service, index) => <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .1, duration: .55 }} className="service" key={service.number}><span>{service.number}</span><Sparkles size={20} /><h3>{service.title}</h3><p>{service.text}</p><a href="#contact">Learn more <ArrowUpRight size={14} /></a></motion.article>)}</div></div></section>

      <section id="journey" className="section shell"><div className="section-heading"><p className="eyebrow">03 / MY JOURNEY</p><h2>Where the<br /><em>foundation started.</em></h2></div><div className="timeline">{journey.map((item, index) => <motion.article initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: index * .12, duration: .6 }} className="timeline-row" key={item.role}><div className="timeline-date">{item.year}</div><div className="timeline-main"><p>{item.place}</p><h3>{item.role}</h3><span>{item.text}</span></div><Check className="timeline-check" size={18} /></motion.article>)}</div></section>

      <section id="skills" className="dark-section"><div className="shell"><div className="section-heading"><p className="eyebrow">04 / TECHNICAL SKILLS</p><h2>Tools I use<br /><em>to make things work.</em></h2></div><div className="skills-layout"><p>My toolkit is grounded in strong fundamentals and the patience to learn whatever a project needs next.</p><div className="skill-bars">{skills.map(([name, value], index) => <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ delay: index * .07 }} className="skill" key={name}><div><span>{name}</span><b>{value}%</b></div><i><small style={{ width: `${value}%` }} /></i></motion.div>)}</div></div></div></section>

      <section id="projects" className="section shell"><div className="projects-title"><div className="section-heading"><p className="eyebrow">05 / RECENT PROJECTS</p><h2>Things I&apos;ve<br /><em>built.</em></h2></div><p>Real projects, real deployment and real learning. Each one solves a different kind of problem.</p></div><div className="project-grid">{projects.map((project, index) => <motion.article initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ delay: index * .12, duration: .6 }} className="project" key={project.number}><div className="project-top"><span>{project.number}</span><label>{project.label}</label></div><div className="project-body"><h3>{project.title}</h3><p>{project.text}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="project-links"><a href={project.live} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} /></a><a href={project.github} target="_blank" rel="noreferrer">GitHub <Github size={14} /></a></div></motion.article>)}</div></section>

      <section id="contact" className="contact-section"><div className="shell contact-grid"><div><p className="eyebrow">06 / GET IN TOUCH</p><h2>Let&apos;s build<br /><em>something useful.</em></h2><p className="contact-copy">Have an opportunity, a project or an idea worth exploring? I&apos;d be glad to hear from you.</p><a className="button button-dark" href="mailto:prawinaofficial@gmail.com">Start a conversation <Mail size={16} /></a></div><div className="contact-details"><a href="mailto:prawinaofficial@gmail.com"><Mail /> prawinaofficial@gmail.com</a><a href="tel:+919585457411"><Phone /> 9585457411</a><span><MapPin /> Madurai, Tamil Nadu, India</span><a href="https://github.com/prawin0614" target="_blank" rel="noreferrer"><Github /> github.com/prawin0614</a></div></div></section>

      <footer className="footer shell"><span>© 2026 Prawin A</span><span>Built with Next.js · JavaScript · curiosity</span></footer>
    </main>
  );
}
