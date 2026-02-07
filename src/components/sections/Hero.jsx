/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = ["Mobile App Developer", "Web Developer", "Tech Enthusiast"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
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
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>Available for new opportunities</span>
            </div>

            {/* Main heading */}
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
                <span className="text-gray-400">Hi, I&apos;m</span>
                <br />
                <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Hasanul Alam
                </span>
              </h1>
            </div>

            {/* Typing animation */}
            <div className="h-24 flex items-center justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-2 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg opacity-20 blur-xl"></div>
                <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
                  {text}
                  <span className="inline-block w-1 h-10 bg-blue-400 ml-1 animate-pulse"></span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate Mobile App Developer specializing in high-performance,
              modern cross-platform applications. Currently crafting exceptional
              digital experiences at{" "}
              <a
                href="https://lancepilot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <span className="text-blue-400 font-semibold">
                  Lancepilot LTD.
                </span>
              </a>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 justify-center"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={
                  "https://drive.google.com/uc?export=download&id=1BqUU05jcf51s842V1PeaXVDT2JuPQFX9"
                }
                download
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-sm justify-center group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Download CV
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a
                href={"https://github.com/Hasanul-Alam"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-sm transform hover:scale-110 hover:-translate-y-1 group"
              >
                <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href={"https://www.linkedin.com/in/md-hasanul-alam2"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-sm transform hover:scale-110 hover:-translate-y-1 group"
              >
                <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated border gradient */}
              <div className="absolute -inset-4 bg-linear-to-r from-blue-300 via-purple-300 to-pink-300 rounded opacity-75 blur-3xl group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

              {/* Image container */}
              <div className="relative w-80 h-80 md:w-[400px] md:h-auto rounded-xl overflow-hidden border-2 border-white/10 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src={
                    "https://res.cloudinary.com/deurz4nfq/image/upload/v1769880120/hero-image_cimp90.jpg"
                  }
                  alt="Hasanul Alam"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements */}
              <div
                className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-bounce"
                style={{ animationDuration: "3s" }}
              ></div>
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-bounce"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:block">
          <div className="flex flex-col items-center gap-2 text-gray-500 animate-bounce">
            <span className="text-sm uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
