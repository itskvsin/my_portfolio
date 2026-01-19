import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  ExternalLink,
} from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";
import Aurora from "./components/Aurora";

const App = () => {
  const [userName, setUserName] = useState("");
  const [hasTriggeredSarcasm, setHasTriggeredSarcasm] = useState(false);
  const [showStoryboard, setShowStoryboard] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const heroRef = useRef(null);
  const clientWorkRef = useRef(null);
  const isClientWorkInView = useInView(clientWorkRef, {
    once: true,
    margin: "-100px",
  });

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
    "Three.js",
  ];

  const clients = [
    { name: "TechStart", logo: "TS" },
    { name: "Velocity", logo: "VL" },
    { name: "Nebula", logo: "NB" },
    { name: "Quantum", logo: "QT" },
    { name: "Apex", logo: "AP" },
  ];

  const projects = [
    {
      title: "MT Music Academy",
      type: "Real-World Project",
      description:
        "A modern, responsive website built to present music lessons and instructor offerings with smooth animations and a clean user experience across devices.",
      role: "Full Implementation",
      focus: ["UI/UX Design", "Frontend Development", "Motion & Interaction"],
      tech: ["Next.js", "React", "Framer Motion"],
      image: 'src/assets/Savate/images/projects/mtma.png',
      link: "https://mt-music-academy.vercel.app/",
    },
    {
      title: "TeamK",
      type: "Collaborative Project",
      description:
        "A motion-heavy, interactive website built with GSAP, featuring smooth scroll-based animations and micro-interactions focused on visual storytelling and performance-aware motion.",
      role: "Frontend Development",
      focus: [
        "GSAP Animations",
        "Scroll-based Interactions",
        "Motion Performance",
      ],
      tech: ["Next.js", "React", "GSAP", "Framer Motion"],
      image: 'src/assets/Savate/images/projects/teamk.png',
      link: "https://teamk.vercel.app/",
    },
    {
      title: "YNOTNOW",
      type: "Collaborative Project",
      description:
        "A headless e-commerce frontend featuring product listings, filtering, variant selection, and a persistent cart experience, built with modern e-commerce best practices.",
      role: "Frontend Development",
      focus: [
        "E-Commerce UI",
        "Cart & Checkout Logic",
        "Performance & Accessibility",
      ],
      tech: ["Next.js", "React", "Shopify Storefront API"],
      image: 'src/assets/Savate/images/projects/ynotnow.png',
      link: "https://ynotnow-one.vercel.app/demo",
    },
  ];

  // const personalProjects = [
  //   {
  //     name: "DesignSync",
  //     description: "Real-time collaborative design feedback tool",
  //     tech: ["WebRTC", "Canvas API", "Socket.io"],
  //   },
  //   {
  //     name: "CodeMetrics",
  //     description: "Developer productivity analytics dashboard",
  //     tech: ["TypeScript", "Recharts", "Express"],
  //   },
  // ];

  const processSteps = [
    { title: "Discovery", desc: "Understanding goals, users, and constraints" },
    { title: "Design", desc: "Wireframes, prototypes, and user testing" },
    { title: "Development", desc: "Clean code, performance, accessibility" },
    { title: "Launch", desc: "Deployment, monitoring, analytics setup" },
    { title: "Support", desc: "Maintenance, updates, and optimization" },
  ];

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "dark",
      });
    })();
  }, []);

  const handleSarcasmTrigger = () => {
    if (hasTriggeredSarcasm) return;

    // alert(
    //   "Hey! I know… using alert() is bad UX 😅\n\n" +
    //     "But this is intentional — developer sarcasm."
    // );

    const name = prompt("Tell me your name (or cancel to judge silently):");

    if (name && name.trim()) {
      setUserName(name.trim());
    }

    setHasTriggeredSarcasm(true);
    setShowStoryboard(true);

    setTimeout(() => {
      document
        .getElementById("storyboard")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#0a0a0a] text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section>
        <Aurora
          colorStops={["#6EE7B7", "#A78BFA", "#6366F1"]}
          blend={0.45}
          amplitude={0.35}
          speed={0.45}
        />
        <motion.section
          ref={heroRef}
          style={{ opacity: prefersReducedMotion ? 1 : heroOpacity }}
          className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="z-1"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              I build products that
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                convert and scale
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl"
            >
              Senior frontend engineer specializing in high-performance web
              applications. From MVP to enterprise, I ship clean code that
              delivers results.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <a
                href="#client-work"
                className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                View Work <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#1a1a1a] border border-gray-800 font-semibold rounded-lg hover:border-gray-600 transition-colors flex items-center gap-2"
              >
                <Calendar size={20} /> Book a Call
              </a>
              {!hasTriggeredSarcasm && (
                <button
                  onClick={handleSarcasmTrigger}
                  className="px-6 py-4 bg-[#1a1a1a] border border-yellow-900/30 text-yellow-500/70 text-sm rounded-lg hover:border-yellow-700/50 transition-colors"
                >
                  ⚠️ I broke a UX rule (do not touch me)
                </button>
              )}
            </motion.div>
          </motion.div>
        </motion.section>
      </section>
      {/* Skills Marquee */}
      <div className="border-y border-gray-900 py-6 overflow-hidden bg-[#0f0f0f]">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: prefersReducedMotion ? 0 : [0, -1920] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
            <span key={i} className="text-gray-600 text-sm font-mono">
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Storyboard Section (After Sarcasm) */}
      {showStoryboard && (
        <motion.section
          id="storyboard"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-6 md:px-12 lg:px-24 py-24 max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">
              {userName
                ? `Alright, ${userName} — joke aside.`
                : `Alright "USER"  — joke aside.`}
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              I take UX seriously. What you just saw was intentional—a reminder
              that knowing the rules means understanding when breaking them
              makes a point.
            </p>
            <p className="text-lg text-gray-400">
              {userName ? `${userName}, instead` : "Instead"} of listing skills
              with percentages, I'll show you real work, real problems solved,
              and how I think through design and code.
            </p>
          </div>
        </motion.section>
      )}


      {/* Process Timeline */}
      <section className="px-6 md:px-12 lg:px-24 py-32 max-w-[1600px] mx-auto">
        <h3 className="text-4xl font-bold mb-16 text-center">Process</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-[#0f0f0f]/50 backdrop-blur-sm border border-gray-900/50 rounded-xl p-6 hover:bg-[#0f0f0f]/80 hover:backdrop-blur-xl hover:border-gray-800 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-gray-800 mb-4">
                {i + 1}
              </div>
              <h3 className="text-3xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-500 text-lg">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Client Work */}
      <section
        id="client-work"
        ref={clientWorkRef}
        className="px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isClientWorkInView ? { opacity: 1 } : {}}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Projects</h2>
          <p className="text-gray-500 text-lg">
            Built to learn, designed to perform
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isClientWorkInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="project-card group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-12 border-l-2 border-gray-800 pl-8 transition-all duration-500 hover:border-gray-600">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <h3 className="text-3xl md:text-4xl font-bold transition-colors duration-300 group-hover:text-gray-300">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      className="text-gray-500 hover:text-gray-300 transition-all duration-300 transform hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>

                  <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">
                    {project.type}
                  </p>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">
                      <span className="text-gray-400 font-medium">Role:</span>{" "}
                      {project.role}
                    </p>
                    <p className="text-sm text-gray-500">
                      <span className="text-gray-400 font-medium">Focus:</span>{" "}
                      {project.focus.join(", ")}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((t, j) => (
                      <span
                        key={j}
                        className="px-4 py-2 bg-[#111] text-gray-400 text-xs uppercase tracking-wider rounded-full border border-gray-800 hover:border-gray-600 hover:bg-[#0d0d0d] transition-all duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

               <div className="w-full md:w-[480px] h-80 rounded-lg border border-gray-800 transition-all duration-500 group-hover:border-gray-600 group-hover:shadow-2xl group-hover:shadow-black/50 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>                                      
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Personal Projects */}
      {/* <section className="px-6 md:px-12 lg:px-24 py-24 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Personal Projects</h2>
          <p className="text-gray-500">Experiments and side builds</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {personalProjects.map((project, i) => (
            <div
              key={i}
              className="bg-[#0f0f0f] border border-gray-900 rounded-xl p-6 hover:border-gray-800 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 bg-[#1a1a1a] rounded text-xs text-gray-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Book a Call */}
      <section
        id="contact"
        className="px-6 md:px-12 lg:px-24 py-24 mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
          Let's Build{" "}
          <span className="text-5xl font-bold mb-6">
            {userName ? `, ${userName}` : `Something!!`}
          </span>
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          30-minute discovery call. No pressure, just a conversation about your
          project.
        </p>
        <div
          data-cal-namespace="30min"
          data-cal-link="kevin-solanki-rnnepa/30min"
          data-cal-config='{"layout":"month_view"}'
        >
          {/* Click me */}
        </div>
        <Cal
          namespace="30min"
          calLink="kevin-solanki-rnnepa/30min"
          config={{ layout: "month_view" }}
        />
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 px-6 md:px-12 lg:px-24 py-16 max-w-6xl mx-auto">
        <div className="flex items-start justify-between gap-12 mb-12 ">
          <div>
            <h3 className="text-sm  uppercase tracking-wider text-gray-500 mb-4">
              Skills
            </h3>
            <p className="text-sm max-w-sm text-gray-600 leading-relaxed">
              React, Next.js, TypeScript, Node.js, PostgreSQL, Tailwind CSS,
              Framer Motion, GSAP, WebGL, Three.js
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/itskvsin"
                className="text-gray-600 hover:text-gray-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="www.linkedin.com/in/kevin-solanki-8bb1082a2"
                className="text-gray-600 hover:text-gray-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-600 hover:text-gray-400 transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-600">
          © 2026. Built with Next.js, TypeScript, and intentional design
          decisions.
        </div>
      </footer>
    </div>
  );
};

export default App;
