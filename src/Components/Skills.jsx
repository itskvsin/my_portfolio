export default function Skills({skillCategories}) {
    return (
      <section id="skills" className="px-6 py-16 h-screen bg-black text-white">
        <h3 className="text-3xl font-bold mb-12 text-center">🛠️ Skills</h3>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 text-black">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md"
            >
              <h4 className="text-xl font-semibold mb-4 text-blue-700">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  