"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Lancepilot LTD",
      position: "Software Engineer (Mobile App Developer)",
      location: "Niketon, Gulshan-1, Dhaka",
      duration: "December 2024 - Present",
      current: true,
      website: "https://www.lancepilot.com",
      responsibilities: [
        'Contributed to the main mobile app "Linbox" with real-time chat integration via Meta API',
        'Built marketplace app "Start-Startup" for software ideas marketplace',
        'Developed email marketing app "Linmail" for campaign management',
        'Contributed to subscription management system "Subsavely" with white labeling support',
        "Implemented responsive UI and optimized performance for both Android and iOS platforms",
        "Collaborated with cross-functional teams including designers and backend developers",
      ],
      technologies: [
        "React Native",
        "Expo",
        "NativeWind",
        "Redux",
        "TypeScript",
        "Next.js",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 "
    >
      {/* Background Gradients */}
      {/* <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>

      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div> */}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg">
            My professional journey and contributions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-600 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-[#040a1c] z-10"></div>

                {/* Content Card */}
                <div className="ml-20">
                  <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border-default transition-all duration-300 hover:-translate-y-2">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {exp.position}
                        </h3>
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg text-blue-400 hover:text-blue-300 hover:underline font-semibold transition-colors"
                        >
                          {exp.company}
                        </a>
                      </div>
                      {exp.current && (
                        <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-green-900/30 text-green-400 text-sm font-semibold rounded-full border border-green-500/30">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
                        Key Responsibilities & Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-400"
                          >
                            <span className="text-blue-400 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-8 bg-gray-800/50 backdrop-blur-sm rounded-lg border-default text-center">
            <Briefcase className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Looking for Opportunities
            </h3>
            <p className="text-gray-400 mb-6">
              I am always interested in hearing about new opportunities and
              exciting projects. Feel free to reach out if you&apos;d like to
              work together!
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
