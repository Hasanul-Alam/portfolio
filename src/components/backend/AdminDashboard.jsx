/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import {
  Menu,
  X,
  Plus,
  Edit2,
  Trash2,
  Briefcase,
  LayoutGrid,
  User,
  Layers,
} from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("hero");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <div
        className={`fixed z-30 inset-y-0 left-0 w-64 bg-white transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} 
          md:translate-x-0 border-r border-gray-300`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-black">Admin Panel</h2>

          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {[
            { id: "hero", name: "Hero", icon: LayoutGrid },
            { id: "about", name: "About", icon: User },
            { id: "skills", name: "Skills", icon: Layers },
            { id: "projects", name: "Projects", icon: Briefcase },
            { id: "experience", name: "Experience", icon: Briefcase },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition text-left
                ${
                  activeTab === item.id
                    ? "bg-blue-600 text-white  "
                    : "text-gray-700 hover:bg-gray-200"
                }`}
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-white   z-20 flex justify-between items-center px-4 py-3">
        <button onClick={() => setSidebarOpen(true)}>
          <Menu size={26} />
        </button>
        <h1 className="text-lg font-bold">Admin Dashboard</h1>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 mt-16 md:mt-0 md:ml-64">
        <div className="max-w-4xl mx-auto">
          {activeTab === "hero" && <HeroSection />}
          {activeTab === "about" && <AboutSection />}
          {activeTab === "skills" && <SkillsSection />}
          {activeTab === "projects" && <ProjectsSection />}
          {activeTab === "experience" && <ExperienceSection />}
        </div>
      </main>
    </div>
  );
}

/* ************************************************************************** */
/*                           Redesigned Sections                               */
/* ************************************************************************** */

/* ---------------- Hero Section ---------------- */
function HeroSection() {
  return (
    <div className="bg-white rounded-xl p-0">
      <Input
        label="Hero Image URL"
        placeholder="Ex: https://example.com/image.jpg"
      />
      <Input label="CV Link" placeholder="https://example.com/cv.pdf" />
      <Input
        label="GitHub Link"
        placeholder="Ex: https://github.com/yourname"
      />
      <Input
        label="LinkedIn Link"
        placeholder="Ex: https://linkedin.com/in/yourname"
      />

      <SaveSection />
    </div>
  );
}

/* ---------------- About Section ---------------- */
function AboutSection() {
  return (
    <div className="bg-white rounded-xl   p-6">
      <h2 className="text-xl font-bold mb-6">About Section</h2>
      <Input
        label="About Image URL"
        placeholder="https://example.com/avatar.jpg"
      />
      <SaveSection />
    </div>
  );
}

/* ---------------- Skills Section ---------------- */
function SkillsSection() {
  return (
    <div className="bg-white rounded-xl   p-6">
      <div className="flex justify-between items-center mb-6">
        <PrimaryButton label="Add Skill" icon={<Plus size={18} />} />
      </div>

      <div className="space-y-3">
        <SkillCard name="React" progress={90} />
        <SkillCard name="JavaScript" progress={85} />
      </div>
    </div>
  );
}

/* ---------------- Projects Section ---------------- */
function ProjectsSection() {
  return (
    <div className="bg-white rounded-xl   p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Projects</h2>
        <PrimaryButton label="Add Project" icon={<Plus size={18} />} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard
          title="E-Commerce App"
          description="Full stack e-commerce mobile app"
          image="https://via.placeholder.com/300"
        />
      </div>
    </div>
  );
}

/* ---------------- Experience Section ---------------- */
function ExperienceSection() {
  return (
    <div className="bg-white rounded-xl   p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Experience</h2>
        <PrimaryButton label="Add Experience" icon={<Plus size={18} />} />
      </div>

      <ExperienceCard
        title="Frontend Developer"
        company="ABC Company"
        duration="2023 - Present"
      />
    </div>
  );
}

/* ************************************************************************** */
/*                             Reusable Components                             */
/* ************************************************************************** */

function Input({ label, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg placeholder:text-gray-400 text-black"
      />
    </div>
  );
}

function PrimaryButton({ label, icon }) {
  return (
    <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
      {icon}
      <span>{label}</span>
    </button>
  );
}

function SaveSection() {
  return (
    <button className="bg-green-600 text-white px-6 py-2 rounded-lg mt-4 hover:bg-green-700 hover:cursor-pointer">
      Save Changes
    </button>
  );
}

function SkillCard({ name, progress }) {
  return (
    <div className="border rounded-lg p-4 grid grid-cols-2 gap-4 w-full items-center">
      <div>
        <h3 className="font-semibold text-black">{name}</h3>
        <div className="mt-2 bg-gray-300 h-2 rounded-full w-full">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="flex space-x-2">
        <Edit2 className="text-blue-600 cursor-pointer" size={18} />
        <Trash2 className="text-red-600 cursor-pointer" size={18} />
      </div>
    </div>
  );
}

function ProjectCard({ title, description, image }) {
  return (
    <div className="border rounded-xl overflow-hidden transition">
      <img src={image} className="w-full h-40 object-cover" alt={title} />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}

function ExperienceCard({ title, company, duration }) {
  return (
    <div className="border rounded-xl p-4">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600">{company}</p>
      <p className="text-gray-500 text-sm">{duration}</p>
    </div>
  );
}
