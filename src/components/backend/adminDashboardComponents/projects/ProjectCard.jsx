/* eslint-disable @next/next/no-img-element */
import { Edit2, Trash2 } from "lucide-react";

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

export default ProjectCard;
