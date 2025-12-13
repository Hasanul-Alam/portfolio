const { Plus, Edit2, Trash2 } = require("lucide-react");
const {
  default: PrimaryButton,
} = require("./reusableComponents/PrimaryButton");

function ExperienceCard({ title, company, duration }) {
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
        >
          <Edit2 size={16} className="text-blue-600" />
        </button>

        <button
          className="p-2 rounded-md hover:bg-red-50 active:bg-red-100 transition"
          aria-label="Delete experience"
        >
          <Trash2 size={16} className="text-red-600" />
        </button>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <div className="bg-white rounded-xl">
      <div className="hidden md:flex justify-between items-center mb-6">
        <PrimaryButton label="Add Experience" icon={<Plus size={18} />} />
      </div>

      <div className="space-y-4">
        <ExperienceCard
          title="Frontend Developer"
          company="ABC Company"
          duration="2023 - Present"
        />
        <ExperienceCard
          title="Junior Developer"
          company="XYZ Tech"
          duration="2021 - 2023"
        />
      </div>
    </div>
  );
}
