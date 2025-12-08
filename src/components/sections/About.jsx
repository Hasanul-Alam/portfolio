/* eslint-disable @next/next/no-img-element */
"use client";

import { Code, Smartphone, Database, Palette } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description:
        "Expert in React Native (CLI & Expo) for building cross-platform mobile applications",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Skills",
      description:
        "Proficient in React, Next.js, Node.js, Express.js, and MongoDB",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Creating beautiful, responsive interfaces with Tailwind CSS and modern design principles",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Integration",
      description:
        "Experience with RESTful APIs, Firebase, and real-time data synchronization",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 "
    >
      {/* Background Gradients */}
      {/* <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div> */}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-lg">
            Get to know more about my background and what I do
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.ibb.co.com/k69z332v/IMG20240915152138.jpg"
                  alt="About Hasanul Alam"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Mobile App Developer & Full Stack Enthusiast
            </h3>

            <div className="space-y-4 text-gray-400 mb-8">
              <p>
                I am a passionate Mobile App Developer currently working as a
                Software Engineer at
                <span className="text-blue-400 font-semibold">
                  {" "}
                  Lancepilot LTD
                </span>
                , where I contribute to building innovative mobile solutions
                that make a difference.
              </p>

              <p>
                With expertise in{" "}
                <span className="font-semibold text-white">React Native</span>,
                I have successfully developed and launched multiple
                production-level applications including
                <span className="font-semibold text-white"> Linbox</span>{" "}
                (available on both App Store and Play Store),
                <span className="font-semibold text-white">
                  {" "}
                  Start-Startups
                </span>{" "}
                (e-commerce platform), and{" "}
                <span className="font-semibold text-white">Subsavely</span>{" "}
                (subscription management system).
              </p>

              <p>
                I am constantly learning and exploring new technologies to stay
                at the forefront of mobile development. My goal is to create
                seamless, user-friendly applications that solve real-world
                problems and deliver exceptional user experiences.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                <div className="text-sm text-gray-400">Apps Launched</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400 mb-2">1+</div>
                <div className="text-sm text-gray-400">Year Experience</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border-default hover:border-hover transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-blue-400 mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
