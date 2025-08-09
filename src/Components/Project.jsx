export default function Project({ projects }) {
    return (
      <section id="projects" className="px-6 py-20 bg-black text-white h-screen">
        <h3 className="text-3xl font-bold mb-10 text-center">🚀 Projects</h3>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-black">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-100 hover:shadow-xl transition-shadow duration-300 p-6 rounded-2xl border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-gray-700 mb-4">{project.desc}</p>
              </div>
  
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto w-fit bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                🔗 Live Demo
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  