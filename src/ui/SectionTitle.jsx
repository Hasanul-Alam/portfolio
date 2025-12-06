export default function SectionTitle({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-3xl font-bold">{title}</h2>
      {subtitle && (
        <p className="text-gray-500 dark:text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}
