export default function Card({ children, className = "", hover = true }) {
  return (
    <div
      className={`p-6 rounded-xl bg-white dark:bg-gray-900 shadow-md ${
        hover ? "hover:shadow-xl transition" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
