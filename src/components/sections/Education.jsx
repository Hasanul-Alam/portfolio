"use client";

import { GraduationCap, Award, Calendar } from "lucide-react";

export default function Education() {
  const education = [
    {
      id: 1,
      degree: "BSC In Physics",
      institution: "Rajshahi Government City College",
      board: "National University of Bangladesh",
      status: "Appeared",
      website: "https://www.nu.ac.bd",
      icon: <GraduationCap className="w-8 h-8" />,
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "Mobile App Development With React Native",
      issuer: "Ostad",
      date: "2023",
      website: "https://www.ostad.app",
      icon: <Award className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Professional MERN Stack Development",
      issuer: "Programming Hero",
      date: "2023",
      website: "https://www.web.programming-hero.com",
      icon: <Award className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Fundamentals of PHP & Laravel Framework",
      issuer: "BITM - SEIP Project",
      date: "2022",
      website: "#",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-gray-400 text-lg">
            My academic background and professional training
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Education Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              Academic Education
            </h3>

            <div className="grid grid-cols-1 gap-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border-default transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-blue-400 transform group-hover:scale-110 transition-transform">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">
                        {edu.degree}
                      </h4>
                      <a
                        href={edu.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-blue-400 hover:text-blue-300 hover:underline font-semibold mb-1 inline-block transition-colors"
                      >
                        {edu.institution}
                      </a>
                      <p className="text-gray-400 mb-2">{edu.board}</p>
                      <div className="inline-block px-3 py-1 bg-yellow-900/30 text-yellow-400 text-sm font-semibold rounded-full border border-yellow-500/30">
                        {edu.status}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-blue-400" />
              Professional Certifications
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border-default transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="text-blue-400 mb-4 transform transition-transform">
                    {cert.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 line-clamp-2">
                    {cert.title}
                  </h4>
                  <a
                    href={cert.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 hover:underline font-semibold mb-2 inline-block transition-colors"
                  >
                    {cert.issuer}
                  </a>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Journey */}
          <div className="mt-16 p-8 bg-gray-800/50 backdrop-blur-sm rounded-lg border-default text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Continuous Learning
              </h3>
              <p className="text-gray-400 mb-6">
                I&apos;m committed to lifelong learning and constantly upgrading
                my skills. Beyond formal education and certifications, I
                regularly engage with online courses, technical blogs, and
                open-source projects to stay current with industry trends and
                best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span
                  className="px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium border"
                  style={{ borderColor: "#5B5FFF" }}
                >
                  Self-Learner
                </span>
                <span
                  className="px-4 py-2 bg-purple-900/30 text-purple-400 rounded-full text-sm font-medium border "
                  style={{ borderColor: "#AC46FF" }}
                >
                  Problem Solver
                </span>
                <span
                  className="px-4 py-2 bg-green-900/30 text-green-400 rounded-full text-sm font-medium border border-green-500/30"
                  style={{ borderColor: "#34D399" }}
                >
                  Team Player
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
