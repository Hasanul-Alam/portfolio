export default function PrimaryButton({ label, icon }) {
  return (
    <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition shadow-sm">
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}
