const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
      { /* Intro */ }
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
        <img
          src="/images/profile.jpg"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Hey, I'm Julio 👋</h1>
          <p className="p text-gray-300 text-lg">
            I'm a passionate web developer focused on building functional web applications. With a background in computer science and years of experience in the industry, I specialize in building modern, responsive websites using the latest technologies.
          </p>
        </div>
      </div>

      { /* Bio Section */ }
      <div className="p mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          My mission is to create high-quality web applications that provide real value to users. I believe in writing clean, maintainable code and following best practices to ensure that my projects are scalable and easy to maintain.
        </p>
      </div>

      { /* Tech Stack */ }
      <h2 className="text-2xl font-semibold text-white mb-4">🚀 Tech I use</h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {['React', 'Next.js', 'Vue', 'Tailwind CSS', 'Node.js', 'Laravel', 'Prisma', 'MongoDB', 'PostgreSQL', 'Appwrite', 'Docker'].map((tech) => (
          <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutPage;
