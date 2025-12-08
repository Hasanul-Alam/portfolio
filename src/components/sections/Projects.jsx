/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { ExternalLink, Github, Smartphone } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Linbox",
      category: "Mobile App",
      description:
        "Mobile solution for Lancepilot with account management, real-time chat via Meta API, notifications, and dashboard statistics. Available on both App Store and Play Store.",
      image: "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Linbox",
      technologies: ["React Native", "Expo", "NativeWind", "Redux", "Meta API"],
      liveLink: "https://play.google.com/store",
      appStoreLink: "https://apps.apple.com",
      duration: "4 months",
      featured: true,
    },
    {
      id: 2,
      title: "Start-Startups",
      category: "E-Commerce",
      description:
        "Cross-platform e-commerce app for browsing, purchasing, investing, and preordering innovative software ideas. Built with TypeScript for scalability.",
      image:
        "https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Start-Startups",
      technologies: [
        "React Native",
        "Expo",
        "React Native Paper",
        "TypeScript",
        "Redux",
      ],
      liveLink: "https://play.google.com/store",
      githubLink: "#",
      duration: "2 months",
      featured: true,
    },
    {
      id: 3,
      title: "Subsavely",
      category: "Web App",
      description:
        "Subscription management system with white labeling support for businesses. Helps users track and manage recurring payments efficiently.",
      image: "https://via.placeholder.com/600x400/10B981/FFFFFF?text=Subsavely",
      technologies: ["Next.js", "React", "Tailwind CSS", "Redux"],
      liveLink: "https://www.subsavely.com",
      githubLink: "#",
      duration: "2 months",
      featured: true,
    },
    {
      id: 4,
      title: "Linmail",
      category: "Mobile App",
      description:
        "Email marketing mobile application for managing campaigns and tracking performance on the go.",
      image: "https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Linmail",
      technologies: ["React Native", "Expo", "Redux"],
      duration: "1.5 months",
      featured: false,
    },
  ];

  const categories = ["All", "Mobile App", "Web App", "E-Commerce"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 "
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 group overflow-hidden p-6"
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
                  <span className="text-xs px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full border border-blue-500/30">
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
                      {project.category === "Mobile App" ? (
                        <>
                          <Smartphone className="w-4 h-4" />
                          View App
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </>
                      )}
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
