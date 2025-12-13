const { default: Input } = require("./reusableComponents/Input");
const { default: SaveSection } = require("./reusableComponents/SaveSection");

export default function HeroSection() {
  return (
    <div className="bg-white rounded-xl p-0">
      <Input
        label="Hero Image URL"
        placeholder="Ex: https://example.com/image.jpg"
      />
      <Input label="CV Link" placeholder="https://example.com/cv.pdf" />
      <Input
        label="GitHub Link"
        placeholder="Ex: https://github.com/yourname"
      />
      <Input
        label="LinkedIn Link"
        placeholder="Ex: https://linkedin.com/in/yourname"
      />

      <SaveSection />
    </div>
  );
}
