import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import ProjectCard from "./ProjectCard";
import CreateProjectModal from "./CreateProjectModal";
import UpdateProjectModal from "./UpdateProjectModal";
const { Plus, Edit2, Trash2 } = require("lucide-react");
const {
  default: PrimaryButton,
} = require("../reusableComponents/PrimaryButton");

export default function ProjectsSection() {
  const [createModalOpen, setCreateModalOpen] = React.useState(false);
  const [updateModalOpen, setUpdateModalOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    const handleGetAllProjects = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-server-uuad.onrender.com/api/projects"
        );
        if (response.data.statusCode === 200) {
          setProjects(response.data.data);
        }
      } catch {
        toast.error("Failed to fetch projects.");
      }
    };
    handleGetAllProjects();
  }, []);

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

      {updateModalOpen && (
        <UpdateProjectModal
          setIsOpen={setUpdateModalOpen}
          projectData={selectedProject}
          onUpdateSuccess={() => {
            toast.success("Project updated successfully.");
            setUpdateModalOpen(false);
          }}
          onUpdateError={() => {
            toast.error("Failed to update project.");
          }}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.name}
            description={project.description}
            image={project.image}
            onEditClick={() => {
              setSelectedProject(project);
              setUpdateModalOpen(true);
            }}
            onDeleteClick={async () => {
              // Handle delete project
              try {
                const response = await axios.delete(
                  `https://portfolio-server-uuad.onrender.com/api/projects/${project._id}`
                );
                if (response.data.statusCode === 200) {
                  setProjects((prevProjects) =>
                    prevProjects.filter((p) => p._id !== project._id)
                  );
                  toast.success("Project deleted successfully.");
                }
              } catch {
                toast.error("Failed to delete project.");
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
