const projects = [
  {
    title: "Weather App",
    description: "Real-time weather application using API integration.",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind CSS.",
  },
  {
    title: "Student Management System",
    description: "Manage student records efficiently.",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;