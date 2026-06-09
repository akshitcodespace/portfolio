function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-8"
    >
      <h2 className="text-5xl font-bold mb-10">
        Contact Me
      </h2>

      <div className="flex flex-col gap-4 text-xl">
        <a
          href="https://github.com/akshitcodespace"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/akshit-singh-er/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400"
        >
          LinkedIn
        </a>

        <a
          href="https://leetcode.com/u/akshitcodespace/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400"
        >
          LeetCode
        </a>
      </div>
    </section>
  );
}

export default Contact;