export default function Skills() {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
  
    return (
      <section id="skills" className="p-8 bg-gray-50 text-black">
        <h3 className="text-2xl font-bold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, i) => (
            <span key={i} className="bg-gray-200 px-4 py-2 rounded-full">{skill}</span>
          ))}
        </div>
      </section>
    );
  }
  