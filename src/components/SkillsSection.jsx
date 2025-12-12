import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", color: "from-blue-500 to-blue-600"  },
  { name: "JavaScript", level: 90, category: "frontend", color: "from-blue-500 to-blue-600"  },
  { name: "React", level: 50, category: "frontend", color: "from-blue-500 to-blue-600"  },
  { name: "TypeScript", level: 45, category: "frontend", color: "from-blue-500 to-blue-600"  },
  { name: "Tailwind CSS", level: 50, category: "frontend", color: "from-blue-500 to-blue-600" },

  // Backend
  { name: "Node.js", level: 60, category: "backend", color: "from-blue-500 to-blue-600"  },
  { name: "Express", level: 75, category: "backend", color: "from-blue-500 to-blue-600"  },
  { name: "MongoDB", level: 70, category: "backend", color: "from-blue-500 to-blue-600" },
  { name: "PHP", level: 60, category: "backend", color: "from-blue-500 to-blue-600"},
  { name: "Laravel", level: 60, category: "backend", color: "from-blue-500 to-blue-600" },

  // Tools
  { name: "Git/GitHub", level: 70, category: "tools", color: "from-blue-500 to-blue-600" },
  { name: "VS Code", level: 85, category: "tools", color: "from-blue-500 to-blue-600" },
  { name: "Notion", level: 50, category: "tools", color: "from-blue-500 to-blue-600" },
];

const categories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend"},
  { id: "backend", name: "Backend"},
  { id: "tools", name: "Tools"},
];

const SkillBar = ({ level, color, isVisible }) => {
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-800 h-3 rounded-full overflow-hidden">
      <div
        className={cn(
          `h-3 rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`,
          isVisible ? "w-full" : "w-0"
        )}
        style={{ 
          width: isVisible ? `${level}%` : '0%',
          transitionDelay: "300ms"
        }}
      />
    </div>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleSkills, setVisibleSkills] = useState([]);
  const sectionRef = useRef(null);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  useEffect(() => {
    setVisibleSkills(filteredSkills.map(() => false));
    
    const timer = setTimeout(() => {
      setVisibleSkills(filteredSkills.map(() => true));
    }, 100);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="skills" className="py-30 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/5 to-transparent rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Technical <span className="text-primary relative">
              Skills
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full"></span>
            </span>
          </h2>
      
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "group px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 border backdrop-blur-sm",
                activeCategory === category.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30 border-primary scale-105"
                  : "bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700 hover:scale-[1.02]"
              )}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
              <span className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeCategory === category.id ? "bg-white" : "bg-transparent"
              )}></span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{skill.icon}</div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100">
                  {skill.level}%
                </span>
              </div>

              {/* Skill Progress Bar */}
              <div className="mb-3">
                <SkillBar 
                  level={skill.level} 
                  color={skill.color} 
                  isVisible={visibleSkills[index]} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};