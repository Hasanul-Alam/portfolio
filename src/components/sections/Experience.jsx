"use client";

import axios from "axios";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ExperienceSkeleton from "../skeletons/ExperienceSkeleton";

export default function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  // Transform API data to match component structure
  const transformExperience = (apiExp) => {
    // Format date duration
    const formatDuration = (startDate, endDate, currentlyWorking) => {
      const formatMonthYear = (dateStr) => {
        const [year, month] = dateStr.split("-");
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        return `${monthNames[parseInt(month) - 1]} ${year}`;
      };

      const start = formatMonthYear(startDate);
      const end = currentlyWorking ? "Present" : formatMonthYear(endDate);
      return `${start} - ${end}`;
    };

    return {
      id: apiExp._id,
      company: apiExp.companyName,
      position: apiExp.designation,
      location: apiExp.location,
      duration: formatDuration(
        apiExp.startDate,
        apiExp.endDate,
        apiExp.currentlyWorking
      ),
      current: apiExp.currentlyWorking,
      website: apiExp.website || "https://www.lancepilot.com",
      responsibilities: apiExp.responsibilities
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length > 0),
      technologies: apiExp.technologies
        .split(",")
        .map((tech) => tech.trim())
        .filter((tech) => tech.length > 0),
    };
  };

  useEffect(() => {
    const handleGetExperiences = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-server-uuad.onrender.com/api/experiences"
        );
        const data = response.data;
        if (data.statusCode === 200) {
          const transformedExperiences = data.data.map(transformExperience);
          setExperiences(transformedExperiences);
        }
      } catch {
        toast.error("Failed to fetch experiences");
      } finally {
        setLoading(false);
      }
    };
    handleGetExperiences();
  }, []);

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 sm:py-16 md:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 px-2">
            Work Experience
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl px-4">
            My professional journey and contributions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line - hidden on mobile, shown from sm up */}
            <div className="hidden sm:block absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-600 to-purple-600"></div>

            {loading && <ExperienceSkeleton />}

            {experiences.length > 0 &&
              !loading &&
              experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="relative mb-8 sm:mb-10 md:mb-12 last:mb-0"
                >
                  {/* Content Card */}
                  <div className="sm:ml-12 md:ml-20">
                    <div className="p-4 sm:p-5 md:p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border-default transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 sm:mb-4 gap-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 wrap-break-word">
                            {exp.position}
                          </h3>
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base sm:text-lg lg:text-xl text-blue-400 hover:text-blue-300 hover:underline font-semibold transition-colors wrap-break-word inline-block"
                          >
                            {exp.company}
                          </a>
                        </div>
                        {exp.current && (
                          <span className="inline-block self-start px-2.5 sm:px-3 py-1 bg-green-900/30 text-green-400 text-xs sm:text-sm font-semibold rounded-full border border-green-500/30 whitespace-nowrap">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-400">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                          <span className="wrap-break-word">
                            {exp.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                          <span className="wrap-break-word">
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="mb-3 sm:mb-4">
                        <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 uppercase tracking-wide">
                          Key Responsibilities & Achievements
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {exp.responsibilities.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-400 text-sm sm:text-base"
                            >
                              <span className="text-blue-400 mt-1 shrink-0">
                                •
                              </span>
                              <span className="wrap-break-word">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 uppercase tracking-wide">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-900/30 text-blue-300 text-xs sm:text-sm rounded-full wrap-break-word"
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
          <div className="mt-8 sm:mt-10 md:mt-12 p-6 sm:p-7 md:p-8 bg-gray-800/50 backdrop-blur-sm rounded-lg border-default text-center">
            <Briefcase className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 px-2">
              Looking for Opportunities
            </h3>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 px-2 max-w-2xl mx-auto">
              I am always interested in hearing about new opportunities and
              exciting projects. Feel free to reach out if you&apos;d like to
              work together!
            </p>
            <a
              href="#contact"
              className="inline-block px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base rounded-lg transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
