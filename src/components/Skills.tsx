import React from 'react';
import { Code, Database, Palette, Server, Smartphone, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "JavaScript"],
      color: "blue"
    },
    {
      icon: <Server size={24} />,
      title: "Backend Development",
      skills: ["Node.js", "Python", "Express", "Django", "REST APIs", "GraphQL"],
      color: "green"
    },
    {
      icon: <Database size={24} />,
      title: "Database & Cloud",
      skills: ["PostgreSQL", "MongoDB", "AWS", "Docker", "Redis", "Firebase"],
      color: "purple"
    },
    {
      icon: <Palette size={24} />,
      title: "Design & UX",
      skills: ["Figma", "Adobe XD", "UI/UX Design", "Responsive Design", "Prototyping"],
      color: "amber"
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android", "Cross-platform"],
      color: "teal"
    },
    {
      icon: <Zap size={24} />,
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "VS Code", "Webpack", "Jest", "CI/CD"],
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-50 text-blue-600 border-blue-200",
      green: "bg-green-50 text-green-600 border-green-200",
      purple: "bg-purple-50 text-purple-600 border-purple-200",
      amber: "bg-amber-50 text-amber-600 border-amber-200",
      teal: "bg-teal-50 text-teal-600 border-teal-200",
      red: "bg-red-50 text-red-600 border-red-200"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I work with a diverse set of technologies to bring ideas to life. 
            Here's what I'm proficient in:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`inline-flex p-3 rounded-lg ${getColorClasses(category.color)} mb-6`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Core Technologies
          </h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { tech: "React & TypeScript", level: 95 },
              { tech: "Node.js & Express", level: 90 },
              { tech: "Database Design", level: 85 },
              { tech: "UI/UX Design", level: 80 },
              { tech: "Mobile Development", level: 75 }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-slate-800">{item.tech}</span>
                  <span className="text-slate-600">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;