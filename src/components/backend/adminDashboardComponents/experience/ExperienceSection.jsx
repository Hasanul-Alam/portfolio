import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
const { Plus, Edit2, Trash2 } = require("lucide-react");
const {
  default: PrimaryButton,
} = require("../reusableComponents/PrimaryButton");

function ExperienceCard({
  title,
  company,
  duration,
  onEditClick,
  onDeleteClick,
}) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{company}</p>
        </div>

        <span className="self-start shrink-0 text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full whitespace-nowrap">
          {duration}
        </span>
      </div>

      <div className="flex justify-end gap-2 sm:gap-3 mt-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition">
        <button
          className="p-2 rounded-md hover:bg-blue-50 active:bg-blue-100 transition"
          aria-label="Edit experience"
          onClick={onEditClick}
        >
          <Edit2 size={16} className="text-blue-600" />
        </button>

        <button
          className="p-2 rounded-md hover:bg-red-50 active:bg-red-100 transition"
          aria-label="Delete experience"
          onClick={onDeleteClick}
        >
          <Trash2 size={16} className="text-red-600" />
        </button>
      </div>
    </div>
  );
}

const CreateExperienceModal = ({ setIsOpen }) => {
  const [formData, setFormData] = React.useState({
    designation: "",
    companyName: "",
    startDate: "",
    endDate: "",
    currentlyWorking: false,
    location: "",
    responsibilities: "",
    technologies: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://portfolio-server-uuad.onrender.com/api/experiences",
        formData
      );
      if (response.data.statusCode === 201) {
        toast.success("Experience added successfully!");
        // close modal
        setIsOpen(false);
        // Reset form
        setFormData({
          designation: "",
          companyName: "",
          startDate: "",
          endDate: "",
          currentlyWorking: false,
          location: "",
          responsibilities: "",
          technologies: "",
        });
      }
    } catch {
      toast.error("Failed to add experience. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/20 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50 p-4 scrollbar-hide">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Add New Experience
          </h2>
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
              htmlFor="designation"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Designation <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
              placeholder="e.g. Frontend Developer"
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              placeholder="e.g. ABC Company"
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="startDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Start Date <span className="text-red-500">*</span>
              </label>
              <input
                type="month"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="endDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                End Date{" "}
                {!formData.currentlyWorking && (
                  <span className="text-red-500">*</span>
                )}
              </label>
              <input
                type="month"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required={!formData.currentlyWorking}
                disabled={formData.currentlyWorking}
                className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="currentlyWorking"
              name="currentlyWorking"
              checked={formData.currentlyWorking}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="currentlyWorking"
              className="ml-2 text-sm text-gray-700"
            >
              I am currently working in this role
            </label>
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="e.g. New York, USA"
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="responsibilities"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Responsibilities & Achievements{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Describe your key responsibilities and achievements..."
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              Use bullet points or separate paragraphs for better readability
            </p>
          </div>

          <div>
            <label
              htmlFor="technologies"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Working Technologies <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="technologies"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              required
              placeholder="e.g. React, Node.js, TypeScript, MongoDB"
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">Separate with commas</p>
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
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors hover:cursor-pointer"
            >
              Add Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const UpdateExperienceModal = ({ setIsOpen, experienceData }) => {
  const [formData, setFormData] = React.useState({
    designation: experienceData?.designation || "",
    companyName: experienceData?.companyName || "",
    startDate: experienceData?.startDate || "",
    endDate: experienceData?.endDate || "",
    currentlyWorking: experienceData?.currentlyWorking || false,
    location: experienceData?.location || "",
    responsibilities: experienceData?.responsibilities || "",
    technologies: experienceData?.technologies || "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission here
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/20 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50 p-4 scrollbar-hide">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Update Experience
          </h2>
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
              htmlFor="designation"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Designation <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
              placeholder="e.g. Frontend Developer"
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              placeholder="e.g. ABC Company"
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="startDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Start Date <span className="text-red-500">*</span>
              </label>
              <input
                type="month"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="endDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                End Date{" "}
                {!formData.currentlyWorking && (
                  <span className="text-red-500">*</span>
                )}
              </label>
              <input
                type="month"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required={!formData.currentlyWorking}
                disabled={formData.currentlyWorking}
                className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="currentlyWorking"
              name="currentlyWorking"
              checked={formData.currentlyWorking}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="currentlyWorking"
              className="ml-2 text-sm text-gray-700"
            >
              I am currently working in this role
            </label>
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="e.g. New York, USA"
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="responsibilities"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Responsibilities & Achievements{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Describe your key responsibilities and achievements..."
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              Use bullet points or separate paragraphs for better readability
            </p>
          </div>

          <div>
            <label
              htmlFor="technologies"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Working Technologies <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="technologies"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              required
              placeholder="e.g. React, Node.js, TypeScript, MongoDB"
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">Separate with commas</p>
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
              Update Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ExperienceSection() {
  const [createModalOpen, setCreateModalOpen] = React.useState(false);
  const [updateModalOpen, setUpdateModalOpen] = React.useState(false);
  const [selectedExperience, setSelectedExperience] = React.useState(null);

  const handleEditClick = (experience) => {
    setSelectedExperience(experience);
    setUpdateModalOpen(true);
  };

  return (
    <div className="bg-white rounded-xl">
      <div className="hidden md:flex justify-between items-center mb-6">
        <PrimaryButton
          label="Add Experience"
          icon={<Plus size={18} />}
          onClick={() => setCreateModalOpen(true)}
        />
      </div>

      {createModalOpen && (
        <CreateExperienceModal setIsOpen={setCreateModalOpen} />
      )}

      {updateModalOpen && (
        <UpdateExperienceModal
          setIsOpen={setUpdateModalOpen}
          experienceData={selectedExperience}
        />
      )}

      <div className="space-y-4">
        <ExperienceCard
          title="Frontend Developer"
          company="ABC Company"
          duration="2023 - Present"
          onEditClick={() =>
            handleEditClick({
              designation: "Frontend Developer",
              companyName: "ABC Company",
              startDate: "2023-01",
              endDate: "",
              currentlyWorking: true,
              location: "New York, USA",
              responsibilities:
                "Developed responsive web applications using React and TypeScript.",
              technologies: "React, TypeScript, Tailwind CSS",
            })
          }
          onDeleteClick={() => alert("Delete experience")}
        />
        <ExperienceCard
          title="Junior Developer"
          company="XYZ Tech"
          duration="2021 - 2023"
          onEditClick={() =>
            handleEditClick({
              designation: "Junior Developer",
              companyName: "XYZ Tech",
              startDate: "2021-06",
              endDate: "2023-01",
              currentlyWorking: false,
              location: "San Francisco, USA",
              responsibilities:
                "Assisted in building web applications and fixing bugs.",
              technologies: "JavaScript, HTML, CSS, Node.js",
            })
          }
          onDeleteClick={() => alert("Delete experience")}
        />
      </div>
    </div>
  );
}
