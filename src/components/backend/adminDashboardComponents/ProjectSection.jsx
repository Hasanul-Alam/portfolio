/* eslint-disable @next/next/no-img-element */
const { Plus, Edit2, Trash2 } = require("lucide-react");
const {
  default: PrimaryButton,
} = require("./reusableComponents/PrimaryButton");

function ProjectCard({ title, description, image }) {
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
            >
              <Edit2 size={16} className="text-blue-600" />
            </button>
            <button
              className="p-2 rounded-md hover:bg-red-50 active:bg-red-100 transition"
              aria-label="Delete project"
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

export default function ProjectsSection() {
  return (
    <div className="bg-white rounded-xl">
      <div className="hidden md:flex justify-between items-center mb-6">
        <PrimaryButton label="Add Project" icon={<Plus size={18} />} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard
          title="E-Commerce App"
          description="Full stack e-commerce mobile app with React Native"
          image="https://via.placeholder.com/300"
        />
        <ProjectCard
          title="Portfolio Website"
          description="Personal portfolio with Next.js and Tailwind CSS"
          image="https://via.placeholder.com/300"
        />
      </div>
    </div>
  );
}
