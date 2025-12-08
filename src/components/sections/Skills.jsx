"use client";

import { useState } from "react";
import {
  Code,
  Type,
  Box,
  Server,
  Database,
  Terminal,
  Layout,
  Palette,
} from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const skillsData = {
    Languages: [
      {
        name: "JavaScript",
        level: 90,
        icon: <Code className="w-8 h-8 text-yellow-400" />,
      },
      {
        name: "TypeScript",
        level: 85,
        icon: <Type className="w-8 h-8 text-blue-500" />,
      },
    ],
    Frameworks: [
      {
        name: "React Native",
        level: 95,
        icon: <Box className="w-8 h-8 text-cyan-400" />,
      },
      {
        name: "React.js",
        level: 90,
        icon: <Box className="w-8 h-8 text-cyan-300" />,
      },
      {
        name: "Next.js",
        level: 85,
        icon: <Layout className="w-8 h-8 text-white" />,
      },
      {
        name: "Node.js",
        level: 80,
        icon: <Server className="w-8 h-8 text-green-500" />,
      },
    ],
    UI: [
      {
        name: "Tailwind CSS",
        level: 95,
        icon: <Palette className="w-8 h-8 text-blue-400" />,
      },
    ],
    Backend: [
      {
        name: "MongoDB",
        level: 85,
        icon: <Database className="w-8 h-8 text-green-400" />,
      },
      {
        name: "Firebase",
        level: 80,
        icon: <Terminal className="w-8 h-8 text-yellow-400" />,
      },
    ],
    State: [
      {
        name: "Redux",
        level: 90,
        icon: <Box className="w-8 h-8 text-purple-500" />,
      },
    ],
  };

  const categories = ["All", ...Object.keys(skillsData)];

  const getFilteredSkills = () => {
    if (activeCategory === "All") {
      return Object.entries(skillsData).flatMap(([category, skills]) =>
        skills.map((skill) => ({ ...skill, category }))
      );
    }
    return skillsData[activeCategory].map((skill) => ({
      ...skill,
      category: activeCategory,
    }));
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover:cursor-pointer ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm"
              }`}
              style={{
                borderWidth: 1,
                borderColor:
                  activeCategory === category ? "transparent" : "#072436",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredSkills().map((skill, index) => (
            <div
              key={`${skill.category}-${skill.name}-${index}`}
              className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700 transition-transform transform hover:-translate-y-2 shadow-lg flex flex-col items-center justify-center group"
            >
              {/* Icon */}
              <div className="mb-4 p-4 bg-gray-900 rounded-full  transition-colors">
                {skill.icon}
              </div>

              {/* Name */}
              <h4 className="text-lg font-semibold text-white mb-2">
                {skill.name}
              </h4>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden mb-2">
                <div
                  className="bg-linear-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              {/* Level */}
              <span className="text-sm text-blue-400 font-medium">
                {skill.level}%
              </span>
            </div>
          ))}
        </div>

        {/* Always Learning Card */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto p-8 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-400">
              I believe in continuous learning and staying updated with the
              latest technologies. Currently exploring advanced React Native
              patterns, GraphQL, and cloud technologies to enhance my skill set
              further.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
