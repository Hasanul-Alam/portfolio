"use client";

import { useEffect, useState } from "react";
import {
  Code,
  Type,
  Box,
  Server,
  Database,
  Terminal,
  Layout,
  Palette,
  Figma,
} from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(null);

  // Map icon strings to actual icon components
  const getIconComponent = (iconString) => {
    const iconMap = {
      Code: <Code className="w-8 h-8 text-yellow-400" />,
      Type: <Type className="w-8 h-8 text-blue-500" />,
      Box: <Box className="w-8 h-8 text-cyan-400" />,
      Server: <Server className="w-8 h-8 text-green-500" />,
      Database: <Database className="w-8 h-8 text-green-400" />,
      Terminal: <Terminal className="w-8 h-8 text-yellow-400" />,
      Layout: <Layout className="w-8 h-8 text-white" />,
      Palette: <Palette className="w-8 h-8 text-blue-400" />,
      Figma: <Figma className="w-8 h-8 text-cyan-300" />,
    };

    // Extract icon name from string like "<Code className=...>"
    const match = iconString?.match(/<(\w+)/);
    const iconName = match ? match[1] : "Code";

    return iconMap[iconName] || <Code className="w-8 h-8 text-gray-400" />;
  };

  // Capitalize first letter for display
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Fetch skills from API
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/skills");
        const data = await response.json();

        if (data.success && data.statusCode === 200) {
          setSkills(data.data);
          setError(null);
        } else {
          throw new Error(data.message || "Failed to fetch skills");
        }
      } catch (err) {
        console.error("Failed to fetch skills:", err);
        setError("Failed to load skills. Please try again later.");
        setSkills([]);
      }
    };

    fetchSkills();
  }, []);

  // Get unique categories from skills data
  const categories = [
    "All",
    ...new Set(skills.map((skill) => capitalize(skill.skillType))),
  ];

  // Filter skills based on active category
  const getFilteredSkills = () => {
    if (activeCategory === "All") {
      return skills;
    }
    return skills.filter(
      (skill) => capitalize(skill.skillType) === activeCategory
    );
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 "
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
          {error && (
            <p className="text-red-500 text-sm mt-2 bg-red-500/10 py-2 px-4 rounded-lg inline-block">
              ⚠️ {error}
            </p>
          )}
        </div>

        {/* Category Filter */}
        {skills.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium hover:cursor-pointer ${
                  activeCategory === category
                    ? "bg-blue-600 text-white scale-105"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Skills Grid */}
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <div
                key={`${skill._id}`}
                className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700 transition-transform transform hover:-translate-y-2 shadow-lg flex flex-col items-center justify-center group"
              >
                {/* Icon */}
                <div className="mb-4 p-4 bg-gray-900 rounded-full  transition-colors">
                  {skill.skillIcon && getIconComponent(skill.skillIcon)}
                </div>

                {/* Name */}
                <h4 className="text-lg font-semibold text-white mb-2">
                  {skill.skillName}
                </h4>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden mb-2">
                  <div
                    className="bg-linear-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>

                {/* Level */}
                <span className="text-sm text-blue-400 font-medium">
                  {skill.progress}%
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No skills found in this category.
            </p>
          </div>
        )}

        {/* Always Learning Card */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto p-8 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
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

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
        }
      `}</style>
    </section>
  );
}
