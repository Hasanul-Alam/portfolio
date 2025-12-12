/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/set-state-in-effect */

import React, { useState, useEffect } from "react";
import {
  X,
  Plus,
  Edit2,
  Trash2,
  Save,
  Upload,
  Eye,
  EyeOff,
} from "lucide-react";

// Mock initial data - In production, fetch from your backend
const initialData = {
  hero: {
    image: "https://via.placeholder.com/800x600",
    cvLink: "https://example.com/cv.pdf",
    githubLink: "https://github.com/username",
    linkedinLink: "https://linkedin.com/in/username",
  },
  about: {
    image: "https://via.placeholder.com/400x400",
  },
  skills: [],
  projects: [],
  experiences: [],
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("hero");
  const [data, setData] = useState(initialData);
  const [editingItem, setEditingItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Load data from memory storage on mount
  useEffect(() => {
    const stored = sessionStorage.getItem("portfolioData");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  // Save data to memory storage
  const saveData = (newData) => {
    setData(newData);
    sessionStorage.setItem("portfolioData", JSON.stringify(newData));
  };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   if (username === "admin" && password === "admin123") {
  //     setIsLoggedIn(true);
  //   } else {
  //     alert("Invalid credentials");
  //   }
  // };

  // Hero Section Handlers
  const updateHero = (field, value) => {
    const newData = { ...data, hero: { ...data.hero, [field]: value } };
    saveData(newData);
  };

  const updateAbout = (value) => {
    const newData = { ...data, about: { image: value } };
    saveData(newData);
  };

  // Skills Handlers
  const addSkill = () => {
    setEditingItem({ name: "", progress: 50 });
    setShowModal(true);
  };

  const saveSkill = (skill) => {
    const newData = { ...data };
    if (skill.id) {
      newData.skills = newData.skills.map((s) =>
        s.id === skill.id ? skill : s
      );
    } else {
      skill.id = Date.now();
      newData.skills.push(skill);
    }
    saveData(newData);
    setShowModal(false);
    setEditingItem(null);
  };

  const deleteSkill = (id) => {
    if (confirm("Are you sure you want to delete this skill?")) {
      const newData = {
        ...data,
        skills: data.skills.filter((s) => s.id !== id),
      };
      saveData(newData);
    }
  };

  // Projects Handlers
  const addProject = () => {
    setEditingItem({
      name: "",
      type: "web",
      shortDescription: "",
      technologies: "",
      duration: "",
      image: "",
      liveDemoLink: "",
      playStoreLink: "",
      appStoreLink: "",
    });
    setShowModal(true);
  };

  const saveProject = (project) => {
    const newData = { ...data };
    if (project.id) {
      newData.projects = newData.projects.map((p) =>
        p.id === project.id ? project : p
      );
    } else {
      project.id = Date.now();
      newData.projects.push(project);
    }
    saveData(newData);
    setShowModal(false);
    setEditingItem(null);
  };

  const deleteProject = (id) => {
    if (confirm("Are you sure you want to delete this project?")) {
      const newData = {
        ...data,
        projects: data.projects.filter((p) => p.id !== id),
      };
      saveData(newData);
    }
  };

  // Experience Handlers
  const addExperience = () => {
    setEditingItem({
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      responsibilities: [],
      technologies: [],
    });
    setShowModal(true);
  };

  const saveExperience = (exp) => {
    const newData = { ...data };
    if (exp.id) {
      newData.experiences = newData.experiences.map((e) =>
        e.id === exp.id ? exp : e
      );
    } else {
      exp.id = Date.now();
      newData.experiences.push(exp);
    }
    saveData(newData);
    setShowModal(false);
    setEditingItem(null);
  };

  const deleteExperience = (id) => {
    if (confirm("Are you sure you want to delete this experience?")) {
      const newData = {
        ...data,
        experiences: data.experiences.filter((e) => e.id !== id),
      };
      saveData(newData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Portfolio Admin Dashboard
          </h1>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1">
            {["hero", "about", "skills", "projects", "experience"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-medium capitalize transition ${
                    activeTab === tab
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === "hero" && (
          <HeroSection data={data.hero} updateHero={updateHero} />
        )}
        {activeTab === "about" && (
          <AboutSection data={data.about} updateAbout={updateAbout} />
        )}
        {activeTab === "skills" && (
          <SkillsSection
            skills={data.skills}
            onAdd={addSkill}
            onEdit={(skill) => {
              setEditingItem(skill);
              setShowModal(true);
            }}
            onDelete={deleteSkill}
          />
        )}
        {activeTab === "projects" && (
          <ProjectsSection
            projects={data.projects}
            onAdd={addProject}
            onEdit={(project) => {
              setEditingItem(project);
              setShowModal(true);
            }}
            onDelete={deleteProject}
          />
        )}
        {activeTab === "experience" && (
          <ExperienceSection
            experiences={data.experiences}
            onAdd={addExperience}
            onEdit={(exp) => {
              setEditingItem(exp);
              setShowModal(true);
            }}
            onDelete={deleteExperience}
          />
        )}
      </main>

      {/* Modals */}
      {showModal && activeTab === "skills" && (
        <SkillModal
          skill={editingItem}
          onSave={saveSkill}
          onClose={() => {
            setShowModal(false);
            setEditingItem(null);
          }}
        />
      )}
      {showModal && activeTab === "projects" && (
        <ProjectModal
          project={editingItem}
          onSave={saveProject}
          onClose={() => {
            setShowModal(false);
            setEditingItem(null);
          }}
        />
      )}
      {showModal && activeTab === "experience" && (
        <ExperienceModal
          experience={editingItem}
          onSave={saveExperience}
          onClose={() => {
            setShowModal(false);
            setEditingItem(null);
          }}
        />
      )}
    </div>
  );
};

// Hero Section Component
const HeroSection = ({ data, updateHero }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-bold mb-6">Hero Section</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Hero Image URL
        </label>
        <input
          type="text"
          value={data.image}
          onChange={(e) => updateHero("image", e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="https://example.com/hero.jpg"
        />
        {data.image && (
          <img
            src={data.image}
            alt="Hero"
            className="mt-2 h-32 object-cover rounded"
          />
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          CV Link
        </label>
        <input
          type="text"
          value={data.cvLink}
          onChange={(e) => updateHero("cvLink", e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="https://example.com/cv.pdf"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          GitHub Link
        </label>
        <input
          type="text"
          value={data.githubLink}
          onChange={(e) => updateHero("githubLink", e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="https://github.com/username"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          LinkedIn Link
        </label>
        <input
          type="text"
          value={data.linkedinLink}
          onChange={(e) => updateHero("linkedinLink", e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="https://linkedin.com/in/username"
        />
      </div>
    </div>
  </div>
);

// About Section Component
const AboutSection = ({ data, updateAbout }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-bold mb-6">About Section</h2>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        About Image URL
      </label>
      <input
        type="text"
        value={data.image}
        onChange={(e) => updateAbout(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="https://example.com/about.jpg"
      />
      {data.image && (
        <img
          src={data.image}
          alt="About"
          className="mt-2 h-32 object-cover rounded"
        />
      )}
    </div>
  </div>
);

// Skills Section Component
const SkillsSection = ({ skills, onAdd, onEdit, onDelete }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold">Skills</h2>
      <button
        onClick={onAdd}
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        <Plus size={20} className="mr-2" /> Add Skill
      </button>
    </div>
    <div className="space-y-4">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="flex items-center justify-between p-4 border rounded-lg"
        >
          <div className="flex-1">
            <h3 className="font-semibold">{skill.name}</h3>
            <div className="mt-2 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${skill.progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">{skill.progress}%</p>
          </div>
          <div className="flex space-x-2 ml-4">
            <button
              onClick={() => onEdit(skill)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded"
            >
              <Edit2 size={18} />
            </button>
            <button
              onClick={() => onDelete(skill.id)}
              className="p-2 text-red-600 hover:bg-red-50 rounded"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}
      {skills.length === 0 && (
        <p className="text-gray-500 text-center py-8">No skills added yet</p>
      )}
    </div>
  </div>
);

// Projects Section Component
const ProjectsSection = ({ projects, onAdd, onEdit, onDelete }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold">Projects</h2>
      <button
        onClick={onAdd}
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        <Plus size={20} className="mr-2" /> Add Project
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <div key={project.id} className="border rounded-lg p-4">
          {project.image && (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover rounded mb-3"
            />
          )}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{project.name}</h3>
              <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded mt-1">
                {project.type}
              </span>
              <p className="text-sm text-gray-600 mt-2">
                {project.shortDescription}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Duration: {project.duration}
              </p>
            </div>
            <div className="flex space-x-2 ml-2">
              <button
                onClick={() => onEdit(project)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded"
              >
                <Edit2 size={16} />
              </button>
              <button
                onClick={() => onDelete(project.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
      {projects.length === 0 && (
        <p className="text-gray-500 text-center py-8 col-span-2">
          No projects added yet
        </p>
      )}
    </div>
  </div>
);

// Experience Section Component
const ExperienceSection = ({ experiences, onAdd, onEdit, onDelete }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold">Experience</h2>
      <button
        onClick={onAdd}
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        <Plus size={20} className="mr-2" /> Add Experience
      </button>
    </div>
    <div className="space-y-6">
      {experiences.map((exp) => (
        <div key={exp.id} className="border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="font-bold text-lg">{exp.title}</h3>
              <p className="text-gray-700">{exp.company}</p>
              <p className="text-sm text-gray-600">{exp.location}</p>
              <p className="text-sm text-blue-600 mt-1">
                {exp.startDate} - {exp.current ? "Present" : exp.endDate}
              </p>
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <ul className="mt-3 space-y-1">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm text-gray-700">
                      • {resp}
                    </li>
                  ))}
                </ul>
              )}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="flex space-x-2 ml-4">
              <button
                onClick={() => onEdit(exp)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded"
              >
                <Edit2 size={18} />
              </button>
              <button
                onClick={() => onDelete(exp.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
      {experiences.length === 0 && (
        <p className="text-gray-500 text-center py-8">
          No experience added yet
        </p>
      )}
    </div>
  </div>
);

// Skill Modal
const SkillModal = ({ skill, onSave, onClose }) => {
  const [formData, setFormData] = useState(skill);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">
            {skill.id ? "Edit" : "Add"} Skill
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Skill Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Progress ({formData.progress}%)
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={formData.progress}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    progress: parseInt(e.target.value),
                  })
                }
                className="w-full"
              />
            </div>
          </div>
          <div className="flex space-x-3 mt-6">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Experience Modal
const ExperienceModal = ({ experience, onSave, onClose }) => {
  const [formData, setFormData] = useState(experience);
  const [newResponsibility, setNewResponsibility] = useState("");
  const [newTechnology, setNewTechnology] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const addResponsibility = () => {
    if (newResponsibility.trim()) {
      setFormData({
        ...formData,
        responsibilities: [
          ...(formData.responsibilities || []),
          newResponsibility.trim(),
        ],
      });
      setNewResponsibility("");
    }
  };

  const removeResponsibility = (index) => {
    setFormData({
      ...formData,
      responsibilities: formData.responsibilities.filter((_, i) => i !== index),
    });
  };

  const addTechnology = () => {
    if (newTechnology.trim()) {
      setFormData({
        ...formData,
        technologies: [...(formData.technologies || []), newTechnology.trim()],
      });
      setNewTechnology("");
    }
  };

  const removeTechnology = (index) => {
    setFormData({
      ...formData,
      technologies: formData.technologies.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl my-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">
            {experience.id ? "Edit" : "Add"} Experience
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Software Engineer (Mobile App Developer)"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Lancepilot LTD"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Niketon, Gulshan-1, Dhaka"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date
                </label>
                <input
                  type="text"
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="December 2024"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date
                </label>
                <input
                  type="text"
                  value={formData.endDate}
                  onChange={(e) =>
                    setFormData({ ...formData, endDate: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Present"
                  disabled={formData.current}
                />
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="current"
                checked={formData.current}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    current: e.target.checked,
                    endDate: e.target.checked ? "Present" : "",
                  })
                }
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="current" className="ml-2 text-sm text-gray-700">
                I currently work here
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Key Responsibilities & Achievements
              </label>
              <div className="space-y-2">
                {formData.responsibilities?.map((resp, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 bg-gray-50 p-2 rounded"
                  >
                    <span className="text-sm flex-1">{resp}</span>
                    <button
                      type="button"
                      onClick={() => removeResponsibility(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newResponsibility}
                    onChange={(e) => setNewResponsibility(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" &&
                      (e.preventDefault(), addResponsibility())
                    }
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add a responsibility"
                  />
                  <button
                    type="button"
                    onClick={addResponsibility}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Technologies Used
              </label>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {formData.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                      <button
                        type="button"
                        onClick={() => removeTechnology(index)}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newTechnology}
                    onChange={(e) => setNewTechnology(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" && (e.preventDefault(), addTechnology())
                    }
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add a technology"
                  />
                  <button
                    type="button"
                    onClick={addTechnology}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-3 mt-6">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Skill Modal
// const SkillModal = ({ skill, onSave, onClose }) => {
//   const [form, setForm] = useState(skill);

//   const update = (field, value) => {
//     setForm({ ...form, [field]: value });
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50">
//       <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl">
//         <h3 className="text-xl font-semibold mb-4">
//           {skill.id ? "Edit Skill" : "Add Skill"}
//         </h3>

//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             onSave(form);
//           }}
//           className="space-y-4"
//         >
//           <div>
//             <label className="block mb-1 font-medium">Skill Name</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 border rounded"
//               value={form.name}
//               onChange={(e) => update("name", e.target.value)}
//               placeholder="e.g. JavaScript"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-medium">Progress (%)</label>
//             <input
//               type="number"
//               className="w-full px-4 py-2 border rounded"
//               value={form.progress}
//               onChange={(e) => update("progress", e.target.value)}
//               placeholder="e.g. 85"
//             />
//           </div>

//           <div className="flex justify-end space-x-2">
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// Project Modal
// Project Modal
const ProjectModal = ({ project, onSave, onClose }) => {
  const [formData, setFormData] = useState(project);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl my-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">
            {project.id ? "Edit" : "Add"} Project
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type
              </label>
              <select
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="web">Web</option>
                <option value="mobile">Mobile</option>
                <option value="fullstack">Full Stack</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Short Description
              </label>
              <textarea
                value={formData.shortDescription}
                onChange={(e) =>
                  setFormData({ ...formData, shortDescription: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Technologies (comma separated)
              </label>
              <input
                type="text"
                value={formData.technologies}
                onChange={(e) =>
                  setFormData({ ...formData, technologies: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="React, Node.js, MongoDB"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration
              </label>
              <input
                type="text"
                value={formData.duration}
                onChange={(e) =>
                  setFormData({ ...formData, duration: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="3 months"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL
              </label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {formData.type === "web" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Live Demo Link
                </label>
                <input
                  type="text"
                  value={formData.liveDemoLink}
                  onChange={(e) =>
                    setFormData({ ...formData, liveDemoLink: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
            {formData.type === "mobile" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Play Store Link
                  </label>
                  <input
                    type="text"
                    value={formData.playStoreLink}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        playStoreLink: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    App Store Link
                  </label>
                  <input
                    type="text"
                    value={formData.appStoreLink}
                    onChange={(e) =>
                      setFormData({ ...formData, appStoreLink: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}
          </div>
          <div className="flex space-x-3 mt-6">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
