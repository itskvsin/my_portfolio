const projects = [
    {
      title: "React Todo App",
      desc: "A simple and clean todo app using localStorage",
      link: "https://yourlink.com"
    },
    {
      title: "Responsive Landing Page",
      desc: "Clone of a modern product website using Tailwind",
      link: "https://yourlink.com"
    },
  ];
  
  export default function Project() {
    return (
      <section id="projects" className="p-8 bg-white text-black">
        <h3 className="text-2xl font-bold mb-4">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold">{project.title}</h4>
              <p className="my-2">{project.desc}</p>
              <a href={project.link} target="_blank" className="text-blue-600">Live Demo</a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  