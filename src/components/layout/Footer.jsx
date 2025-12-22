"use client";

import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-12 ">
      {/* Background Gradients */}
      {/* <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>

      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div> */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hasanul Alam
            </h3>
            <p className="text-gray-400 mb-4">
              React Native Developer passionate about building beautiful and
              functional mobile applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>{SOCIAL_LINKS.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SOCIAL_LINKS.phone}`}
                  className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>{SOCIAL_LINKS.phone}</span>
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-[#1c2e69] transition-colors border border-gray-700/50"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-[#1c2e69] transition-colors border border-gray-700/50"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Md. Hasanul Alam. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with{" "}
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> using
              Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
