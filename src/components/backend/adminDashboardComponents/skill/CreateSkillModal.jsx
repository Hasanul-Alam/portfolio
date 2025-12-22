"use client";

import axios from "axios";
import toast from "react-hot-toast";

import React from "react";

const CreateSkillModal = ({ setIsOpen }) => {
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    skillType: "",
    skillName: "",
    skillIcon: "",
    progress: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "progress" ? Number(value) : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://portfolio-server-uuad.onrender.com/api/skills",
        formData
      );
      console.log("Skill added successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to add skill. Please try again.");
    } finally {
      setLoading(false);
    }
    console.log("Form submitted:", formData);
    // Handle form submission here
    setIsOpen(false);
    // Reset form
    setFormData({ skillType: "", skillName: "", skillIcon: "", progress: 0 });
  };

  return (
    <div className="fixed inset-0 bg-black/20 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 m-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Add New Skill</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="skillType"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Skill Type
            </label>
            <select
              id="skillType"
              name="skillType"
              value={formData.skillType}
              onChange={handleChange}
              required
              className="w-full px-3 text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" className="text-black">
                Select a type
              </option>
              {/* <option value="technical" className="text-black">
                All
              </option> */}
              <option className="text-black" value="language">
                Language
              </option>
              <option className="text-black" value="framework">
                Framework
              </option>
              <option className="text-black" value="ui">
                UI
              </option>
              <option className="text-black" value="backend">
                Backend
              </option>
              <option className="text-black" value="state">
                State
              </option>
              <option className="text-black" value="other">
                Other
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="skillName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Skill Name
            </label>
            <input
              type="text"
              id="skillName"
              name="skillName"
              value={formData.skillName}
              onChange={handleChange}
              required
              placeholder="e.g., React, Python, Communication"
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* skill icon */}
          <div>
            <label
              htmlFor="skillIcon"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Skill Icon
            </label>
            <input
              type="text"
              id="skillIcon"
              name="skillIcon"
              value={formData.skillIcon}
              onChange={handleChange}
              required
              placeholder="e.g., React, Python, Communication"
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="progress"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Progress ({formData.progress}%)
            </label>
            <input
              type="range"
              id="progress"
              name="progress"
              min="0"
              max="100"
              value={formData.progress}
              onChange={handleChange}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Beginner</span>
              <span>Expert</span>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Skill"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSkillModal;
