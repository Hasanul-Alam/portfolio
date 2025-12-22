import { Edit2, Trash2 } from "lucide-react";

function SkillCard({ name, progress, onEditClick, onDeleteClick }) {
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
          onClick={onEditClick}
        >
          <Edit2 size={16} className="text-blue-600" />
        </button>

        <button
          className="p-2 rounded-md hover:bg-red-50 active:bg-red-100 transition"
          aria-label="Delete skill"
          onClick={onDeleteClick}
        >
          <Trash2 size={16} className="text-red-600" />
        </button>
      </div>
    </div>
  );
}

export default SkillCard;
