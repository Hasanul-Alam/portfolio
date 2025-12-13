export default function Input({ label, placeholder }) {
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
      />
    </div>
  );
}
