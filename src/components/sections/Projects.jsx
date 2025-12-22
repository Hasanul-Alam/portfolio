/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Github, Smartphone } from "lucide-react";
import toast from "react-hot-toast";
import EmptyState from "../common/EmptyState";
export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ["All", "Mobile App", "Web App", "E-Commerce"];

  // Map projectType from API to category
  const getCategoryFromType = (projectType) => {
    const typeMap = {
      mobile: "Mobile App",
      web: "Web App",
      ecommerce: "E-Commerce",
    };
    return typeMap[projectType.toLowerCase()] || "Web App";
  };

  // Transform API data to match component structure
  const transformProject = (apiProject) => {
    return {
      id: apiProject._id,
      title: apiProject.name,
      category: getCategoryFromType(apiProject.projectType),
      description: apiProject.description,
      image: apiProject.image,
      technologies: apiProject.technologies
        .split(",")
        .map((tech) => tech.trim()),
      liveLink: apiProject.liveLink || null,
      githubLink: apiProject.codeLink || null,
      playStoreLink: apiProject.playStoreLink || null,
      appStoreLink: apiProject.appStoreLink || null,
      duration: apiProject.duration,
      featured: true, // You can add a featured field in your API if needed
    };
  };

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  useEffect(() => {
    const handleGetProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects");
        const data = await response.json();
        if (data.statusCode === 200) {
          const transformedProjects = data.data.map(transformProject);
          setProjects(transformedProjects);
        }
      } catch (error) {
        toast.error("Failed to fetch projects");
      } finally {
        setLoading(false);
      }
    };
    handleGetProjects();
  }, []);

  if (loading) {
    return (
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
      >
        <div className="text-white text-xl">Loading projects...</div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Some of the projects I&apos;ve worked on recently
          </p>
        </div>
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover:cursor-pointer ${
                filter === category
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm"
              }`}
              style={{
                borderWidth: 1,
                borderColor: filter === category ? "transparent" : "#072436",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <EmptyState
            title="No Projects Found"
            description="There are no projects available at the moment. Please check back later."
            icon="📁"
          />
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg border-default hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 group overflow-hidden p-6"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                {project.featured && (
                  <div className="absolute top-3 right-3 z-10 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="text-xs px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full border-default">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-400 text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Duration */}
                <div className="text-sm text-gray-400">
                  Duration: {project.duration}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-3 border-t border-gray-700">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.playStoreLink && (
                    <a
                      href={project.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      <Smartphone className="w-4 h-4" />
                      Play Store
                    </a>
                  )}
                  {project.appStoreLink && (
                    <a
                      href={project.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      <Smartphone className="w-4 h-4" />
                      App Store
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-400 hover:text-gray-200 transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/Hasanul-Alam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Github className="w-5 h-5" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
