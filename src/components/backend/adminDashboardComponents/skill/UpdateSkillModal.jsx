"use client";

import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
const UpdateSkillModal = ({ setIsOpen, skill, onSuccess }) => {
  const [formData, setFormData] = React.useState({
    skillType: skill?.skillType || "",
    skillName: skill?.skillName || "",
    progress: skill?.progress || 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://portfolio-server-uuad.onrender.com/api/skills/${skill._id}`,
        formData
      );
      console.log("update response: ", response.data);
      if (response.data.statusCode === 200) {
        onSuccess();
      } else {
        toast.error("Failed to update skill. Please try again.");
      }
    } catch {}
    e.preventDefault();
    // Update skill logic here
    setIsOpen(false);
    // Reset form
    setFormData({ skillType: "", skillName: "", progress: 0 });
  };

  return (
    <div className="fixed inset-0 bg-black/20 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 m-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Update Skill</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
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
                <option value="technical" className="text-black">
                  All
                </option>
                <option className="text-black" value="language">
                  Languages
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
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Update Skill
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateSkillModal;
