/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    "React Native Developer",
    "Mobile App Developer",
    "Full Stack Developer",
    "UI/UX Enthusiast",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Hi, I&apos;m <br />
              <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Hasanul Alam
              </span>
            </h1>

            <div className="h-20 mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300">
                {text}
                <span className="animate-pulse">_</span>
              </h2>
            </div>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Passionate Mobile App Developer specializing in high-performance,
              modern cross-platform applications. Currently working at
              Lancepilot LTD.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition-colors justify-center"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
              <a
                href="https://docs.google.com/document/d/1NMbtPL7jGTvFFXxvoFu-JKoIzbjEcZWqHDpcDd0cmKs/export?format=pdf"
                download
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg flex items-center gap-2 transition-colors justify-center"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition transform hover:scale-110"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition transform hover:scale-110"
              >
                <Mail className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gray-800 shadow-2xl">
              <img
                src="https://i.ibb.co.com/k69z332v/IMG20240915152138.jpg"
                alt="Hasanul Alam"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
