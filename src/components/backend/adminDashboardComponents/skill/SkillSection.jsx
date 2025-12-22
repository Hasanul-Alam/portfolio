import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import PrimaryButton from "../reusableComponents/PrimaryButton";
import SkillCard from "./SkillCard";
import CreateSkillModal from "./CreateSkillModal";
import UpdateSkillModal from "./UpdateSkillModal";
const { Plus, Edit2, Trash2 } = require("lucide-react");

export default function SkillsSection() {
  const [addSkillModalOpen, setAddSkillModalOpen] = React.useState(false);
  const [updateSkillModalOpen, setUpdateSkillModalOpen] = React.useState(false);
  const [selectedSkill, setSelectedSkill] = React.useState({});
  const [skills, setSkills] = React.useState([]);

  React.useEffect(() => {
    const handleGetAllSkills = async () => {
      const response = await axios.get(
        "https://portfolio-server-uuad.onrender.com/api/skills"
      );
      if (response.data.statusCode === 200) {
        setSkills(response.data.data);
      } else {
        toast.error("Failed to fetch skills. Please try again.");
      }
    };
    handleGetAllSkills();
  }, []);

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
        <UpdateSkillModal
          setIsOpen={setUpdateSkillModalOpen}
          skill={selectedSkill}
          onSuccess={() => {
            toast.success("Skill updated successfully!");
            setUpdateSkillModalOpen(false);
            setSelectedSkill({});
          }}
        />
      )}

      <div className="space-y-3">
        {skills.length > 0 &&
          skills.map((skill) => (
            <SkillCard
              key={skill._id}
              name={skill.skillName}
              progress={skill.progress}
              onEditClick={() => {
                setSelectedSkill(skill);
                setUpdateSkillModalOpen(true);
              }}
              onDeleteClick={async () => {
                try {
                  const response = await axios.delete(
                    `https://portfolio-server-uuad.onrender.com/api/skills/${skill._id}`
                  );
                  if (response.data.statusCode === 200) {
                    toast.success("Skill deleted successfully!");
                    // Remove deleted skill from state
                    setSkills((prevSkills) =>
                      prevSkills.filter((s) => s._id !== skill._id)
                    );
                  }
                } catch {
                  toast.error("Failed to delete skill. Please try again.");
                }
              }}
            />
          ))}
      </div>
    </div>
  );
}
