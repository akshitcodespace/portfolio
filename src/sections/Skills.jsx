const skills = [
  "C++",
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "DSA",
];

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;