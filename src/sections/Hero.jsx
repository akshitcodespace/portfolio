function Hero() {
return ( <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">

```
  <p className="text-blue-400 mb-4 text-lg">
    👋 Hello, I'm
  </p>

  <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
    Akshit Singh
  </h1>

  <h2 className="text-2xl md:text-4xl text-gray-300 mb-6">
    CSE Student • Software Developer
  </h2>

  <p className="max-w-2xl text-gray-400 text-lg mb-10">
    Passionate about Web Development, DSA, and building impactful
    software solutions.
  </p>

  <div className="flex gap-4 flex-wrap justify-center">
    <a
      href="#projects"
      className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
    >
      View Projects
    </a>

    <a
      href="/resume.pdf"
      download
      className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
    >
      Download Resume
    </a>
  </div>
</section>


);
}

export default Hero;
