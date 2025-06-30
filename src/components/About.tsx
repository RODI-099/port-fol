import React from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Clean Code",
      description: "Writing maintainable, efficient code that scales"
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Problem Solving",
      description: "Turning complex challenges into elegant solutions"
    },
    {
      icon: <Users size={24} />,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams"
    },
    {
      icon: <Coffee size={24} />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and methodologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with over 5 years of experience building 
            web applications that users love. I believe in the power of clean code, 
            thoughtful design, and collaborative problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">My Journey</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                My journey into web development began during my computer science studies, 
                where I discovered my passion for creating digital experiences that make 
                people's lives easier and more enjoyable.
              </p>
              <p>
                Over the years, I've had the privilege of working with startups and 
                established companies, helping them build scalable web applications 
                that serve thousands of users daily. I specialize in React, Node.js, 
                and modern web technologies.
              </p>
              <p>
                When I'm not coding, you can find me exploring the latest in tech, 
                contributing to open-source projects, or enjoying a good cup of coffee 
                while planning my next adventure.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200">
                <div className="text-blue-600 mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-sm text-slate-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;