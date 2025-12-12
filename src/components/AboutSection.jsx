import { Briefcase, Code, User } from "lucide-react";
import Resume from "../assets/Resume.pdf";
import Profile from "@/assets/profile.jpg";

export const AboutSection = () => {
  
  return (
    <section id="about" className=" px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/3 to-transparent rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            About <span className="text-primary relative">
              Me
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Get to know more about my background, skills, and passion</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* Profile Image - Left Column */}
          <div className="lg:col-span-1">
            <div className="relative group">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl shadow-primary/10 border-2 border-white/20 relative z-20 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm">
                <img
                  src={Profile}
                  alt="Wiam Frikal"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/5 rounded-full -z-10"></div>
            </div>
          </div>

          {/* Content - Right Two Columns */}
          <div className="lg:col-span-2 space-y-8">

            {/* About Me Section */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="relative p-8 rounded-xl bg-transparent backdrop-blur-sm">
                  <div className="ml-6">
                    <p className="text-lg leading-relaxed text-foreground mb-4 italic">
                      Junior full-stack web developer with a strong foundation in building modern, responsive, and user-focused web applications. I work primarily with the JavaScript ecosystem, including React for front-end interfaces and Node.js/Express for back-end development.
                    </p>
                    <p className="text-lg leading-relaxed text-foreground italic">
                      I enjoy creating clean, efficient code and learning new technologies that help me improve both performance and scalability. Curious, motivated, and detail-oriented, I thrive on solving problems, building real projects, and continuously developing my skills to grow as a full-stack developer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 ml-30">
              <a href="#contact" className="cosmic-button group relative overflow-hidden">
                <a className="relative inline-flex items-center justify-center">
                  <span className="relative z-10 p-2">Contact Me</span>
                </a>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              </a>

              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = Resume;
                  link.download = 'Wiam_Frikal_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary/5 hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center gap-2 group"
              >
                <span>Download CV</span>
                <svg
                  className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};