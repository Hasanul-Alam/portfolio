"use client"
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const CreateProjectModal = ({ setIsOpen }) => {
  const [formData, setFormData] = React.useState({
    projectType: "",
    image: "",
    name: "",
    description: "",
    technologies: "",
    duration: "",
    liveLink: "",
    codeLink: "",
    playStoreLink: "",
    appStoreLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://portfolio-server-uuad.onrender.com/api/projects",
        formData
      );
      if (response.data.statusCode === 201) {
        toast.success("Project added successfully!");
        // close modal
        setIsOpen(false);
        // Reset form
        setFormData({
          projectType: "",
          image: "",
          name: "",
          description: "",
          technologies: "",
          duration: "",
          liveLink: "",
          codeLink: "",
          playStoreLink: "",
          appStoreLink: "",
        });
      }
    } catch {
      toast.error("Failed to add project. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/20 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50 p-4 scrollbar-hide">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Add New Project</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label
              htmlFor="projectType"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Project Type <span className="text-red-500">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option className="text-black" value="">
                Select a type
              </option>
              <option className="text-black" value="web">
                Web Application
              </option>
              <option className="text-black" value="mobile">
                Mobile App
              </option>
              <option className="text-black" value="desktop">
                Desktop Application
              </option>
              <option className="text-black" value="other">
                Other
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Image URL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              placeholder="https://example.com/image.jpg"
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Project Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="E-Commerce App"
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Short Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="3"
              placeholder="Brief description of your project..."
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <div>
            <label
              htmlFor="technologies"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Technologies Used <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="technologies"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              required
              placeholder="React, Node.js, MongoDB"
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">Separate with commas</p>
          </div>

          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Duration <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              placeholder="3 months"
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="border-t border-gray-200 pt-4 mt-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Optional Links
            </h3>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="liveLink"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Live Link (Web)
                </label>
                <input
                  type="url"
                  id="liveLink"
                  name="liveLink"
                  value={formData.liveLink}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="codeLink"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Code Link (GitHub)
                </label>
                <input
                  type="url"
                  id="codeLink"
                  name="codeLink"
                  value={formData.codeLink}
                  onChange={handleChange}
                  placeholder="https://github.com/username/repo"
                  className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="playStoreLink"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Play Store Link (Mobile)
                </label>
                <input
                  type="url"
                  id="playStoreLink"
                  name="playStoreLink"
                  value={formData.playStoreLink}
                  onChange={handleChange}
                  placeholder="https://play.google.com/store/apps/..."
                  className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="appStoreLink"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  App Store Link (Mobile)
                </label>
                <input
                  type="url"
                  id="appStoreLink"
                  name="appStoreLink"
                  value={formData.appStoreLink}
                  onChange={handleChange}
                  placeholder="https://apps.apple.com/..."
                  className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4 sticky bottom-0 bg-white border-t border-gray-200 -mx-6 px-6 py-4 mt-6">
            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Add Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;