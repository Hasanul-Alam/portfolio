import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const Input = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block font-medium text-gray-700 mb-1.5 text-sm sm:text-base">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg 
          placeholder:text-gray-400 text-black text-sm sm:text-base
          focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default function HeroSection() {
  const [heroImage, setHeroImage] = useState("");
  const [cvLink, setCvLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault(); // Prevent default form submission

    console.log(heroImage, cvLink, githubLink, linkedinLink);

    try {
      setLoading(true);
      const response = await axios.post(
        "https://portfolio-server-uuad.onrender.com/api/hero",
        {
          heroImage,
          cvLink,
          githubLink,
          linkedinLink,
        }
      );
      if (response.statusCode === 201) {
        toast.success("Hero section data saved successfully");
        // Reset form fields
        setHeroImage("");
        setCvLink("");
        setGithubLink("");
        setLinkedinLink("");
      }
    } catch (error) {
      console.error("Error saving hero section data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSave} className="bg-white rounded-xl p-0">
      <Input
        label="Hero Image URL"
        placeholder="Ex: https://example.com/image.jpg"
        value={heroImage}
        onChange={(e) => setHeroImage(e.target.value)}
      />
      <Input
        label="CV Link"
        placeholder="https://example.com/cv.pdf"
        value={cvLink}
        onChange={(e) => setCvLink(e.target.value)}
      />
      <Input
        label="GitHub Link"
        placeholder="Ex: https://github.com/yourname"
        value={githubLink}
        onChange={(e) => setGithubLink(e.target.value)}
      />
      <Input
        label="LinkedIn Link"
        placeholder="Ex: https://linkedin.com/in/yourname"
        value={linkedinLink}
        onChange={(e) => setLinkedinLink(e.target.value)}
      />

      <button
        type="submit"
        className="text-white border border-black rounded-lg px-3 py-2 bg-green-600 hover:bg-green-700 cursor-pointer font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
}
