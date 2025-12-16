import React from "react";
const { Plus, Edit2, Trash2 } = require("lucide-react");
const {
  default: PrimaryButton,
} = require("./reusableComponents/PrimaryButton");

function SkillCard({ name, progress, onClick }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between gap-3 mb-3">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800">
          {name}
        </h3>

        <span className="shrink-0 text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
          {progress}%
        </span>
      </div>

      <div className="relative w-full h-2 sm:h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-blue-600 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-end gap-2 sm:gap-3 mt-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition">
        <button
          className="p-2 rounded-md hover:bg-blue-50 active:bg-blue-100 transition"
          aria-label="Edit skill"
          onClick={onClick}
        >
          <Edit2 size={16} className="text-blue-600" />
        </button>

        <button
          className="p-2 rounded-md hover:bg-red-50 active:bg-red-100 transition"
          aria-label="Delete skill"
        >
          <Trash2 size={16} className="text-red-600" />
        </button>
      </div>
    </div>
  );
}

const CreateSkillModal = ({ setIsOpen }) => {
  const [formData, setFormData] = React.useState({
    skillType: "",
    skillName: "",
    progress: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "progress" ? Number(value) : value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission here
    setIsOpen(false);
    // Reset form
    setFormData({ skillType: "", skillName: "", progress: 0 });
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
              <option value="technical" className="text-black">
                All
              </option>
              <option className="text-black" value="soft">
                Languages
              </option>
              <option className="text-black" value="language">
                Framework
              </option>
              <option className="text-black" value="creative">
                UI
              </option>
              <option className="text-black" value="other">
                Backend
              </option>
              <option className="text-black" value="other">
                State
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
            >
              Add Skill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const UpdateSkillModal = ({ setIsOpen, skill }) => {
  const [formData, setFormData] = React.useState({
    skillType: skill?.type || "",
    skillName: skill?.name || "",
    progress: skill?.progress || 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
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
                <option className="text-black" value="soft">
                  Languages
                </option>
                <option className="text-black" value="language">
                  Framework
                </option>
                <option className="text-black" value="creative">
                  UI
                </option>
                <option className="text-black" value="other">
                  Backend
                </option>
                <option className="text-black" value="other">
                  State
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

export default function SkillsSection() {
  const [addSkillModalOpen, setAddSkillModalOpen] = React.useState(false);
  const [updateSkillModalOpen, setUpdateSkillModalOpen] = React.useState(false);

  return (
    <div className="bg-white rounded-xl">
      <div className="hidden md:flex justify-between items-center mb-6">
        <PrimaryButton
          label="Add Skill"
          icon={<Plus size={18} />}
          onClick={() => setAddSkillModalOpen(true)}
        />
      </div>

      {addSkillModalOpen && (
        <CreateSkillModal setIsOpen={setAddSkillModalOpen} />
      )}

      {updateSkillModalOpen && (
        <UpdateSkillModal setIsOpen={setUpdateSkillModalOpen} />
      )}

      <div className="space-y-3">
        <SkillCard
          name="React"
          progress={90}
          onClick={() => setUpdateSkillModalOpen(true)}
        />
        <SkillCard
          name="JavaScript"
          progress={85}
          onClick={() => setUpdateSkillModalOpen(true)}
        />
        <SkillCard
          name="TypeScript"
          progress={80}
          onClick={() => setUpdateSkillModalOpen(true)}
        />
        <SkillCard
          name="Node.js"
          progress={75}
          onClick={() => setUpdateSkillModalOpen(true)}
        />
      </div>
    </div>
  );
}
