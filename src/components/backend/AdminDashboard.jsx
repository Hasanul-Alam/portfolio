import { useState } from "react";
import { Menu, X, Plus, Briefcase, LayoutGrid, Layers } from "lucide-react";
import HeroSection from "./adminDashboardComponents/hero/HeroSection";
import SkillsSection from "./adminDashboardComponents/skill/SkillSection";
import ProjectsSection from "./adminDashboardComponents/projects/ProjectSection";
import ExperienceSection from "./adminDashboardComponents/experience/ExperienceSection";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("hero");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const hasAddButton = ["skills", "projects", "experience"].includes(activeTab);

  return (
    <div className="min-h-screen bg-white">
      <div
        className={`fixed z-30 inset-y-0 left-0 w-64 bg-white transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} 
          md:translate-x-0 border-r border-gray-300`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-black">Admin Panel</h2>

          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={24} color="black" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {[
            { id: "hero", name: "Hero", icon: LayoutGrid },
            { id: "skills", name: "Skills", icon: Layers },
            { id: "projects", name: "Projects", icon: Briefcase },
            { id: "experience", name: "Experience", icon: Briefcase },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition text-left
                ${
                  activeTab === item.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
            >
              <item.icon size={20} />
              <span className="">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      <header className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-20 flex justify-between items-center px-4 py-3">
        <button onClick={() => setSidebarOpen(true)}>
          <Menu size={26} color="black" />
        </button>
        <h1 className="text-lg font-bold text-black">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </h1>
        <div className="w-6" />
      </header>

      <main className="flex-1 p-4 sm:p-6 pt-16 md:mt-0 md:ml-64 pb-24 md:pb-6">
        <div className="max-w-4xl mx-auto">
          {activeTab === "hero" && <HeroSection />}
          {activeTab === "skills" && <SkillsSection />}
          {activeTab === "projects" && <ProjectsSection />}
          {activeTab === "experience" && <ExperienceSection />}
        </div>
      </main>

      {hasAddButton && (
        <button
          className="md:hidden fixed bottom-6 right-6 z-20 
            bg-blue-600 text-white rounded-full p-4 shadow-lg 
            hover:bg-blue-700 active:scale-95 transition-all duration-200
            flex items-center justify-center"
          aria-label={`Add ${activeTab}`}
        >
          <Plus size={24} />
        </button>
      )}
    </div>
  );
}
