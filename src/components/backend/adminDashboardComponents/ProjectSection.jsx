/* eslint-disable @next/next/no-img-element */
import React from "react";
const { Plus, Edit2, Trash2 } = require("lucide-react");
const {
  default: PrimaryButton,
} = require("./reusableComponents/PrimaryButton");

function ProjectCard({
  title,
  description,
  image,
  onEditClick,
  onDeleteClick,
}) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-40 sm:h-48 object-cover transform group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-1">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>

        <div className="mt-4 flex justify-between items-center gap-3">
          <div className="flex gap-2">
            <button
              className="p-2 rounded-md hover:bg-blue-50 active:bg-blue-100 transition"
              aria-label="Edit project"
              onClick={onEditClick}
            >
              <Edit2 size={16} className="text-blue-600" />
            </button>
            <button
              className="p-2 rounded-md hover:bg-red-50 active:bg-red-100 transition"
              aria-label="Delete project"
              onClick={onDeleteClick}
            >
              <Trash2 size={16} className="text-red-600" />
            </button>
          </div>

          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition whitespace-nowrap">
            View →
          </button>
        </div>
      </div>
    </div>
  );
}

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

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission here
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

const UpdateProjectModal = ({ setIsOpen, projectData }) => {
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

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission here
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
  };

  return (
    <div className="fixed inset-0 bg-black/20 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50 p-4 scrollbar-hide">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Update Project</h2>
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
              Update Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProjectsSection() {
  const [createModalOpen, setCreateModalOpen] = React.useState(false);
  const [updateModalOpen, setUpdateModalOpen] = React.useState(false);

  return (
    <div className="bg-white rounded-xl">
      <div className="hidden md:flex justify-between items-center mb-6">
        <PrimaryButton
          label="Add Project"
          icon={<Plus size={18} />}
          onClick={() => setCreateModalOpen(true)}
        />
      </div>

      {createModalOpen && <CreateProjectModal setIsOpen={setCreateModalOpen} />}

      {updateModalOpen && <UpdateProjectModal setIsOpen={setUpdateModalOpen} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard
          title="E-Commerce App"
          description="Full stack e-commerce mobile app with React Native"
          image="https://via.placeholder.com/300"
          onEditClick={() => setUpdateModalOpen(true)}
          onDeleteClick={() => alert("Delete project")}
        />
        <ProjectCard
          title="Portfolio Website"
          description="Personal portfolio with Next.js and Tailwind CSS"
          image="https://via.placeholder.com/300"
          onEditClick={() => setUpdateModalOpen(true)}
          onDeleteClick={() => alert("Delete project")}
        />
      </div>
    </div>
  );
}
