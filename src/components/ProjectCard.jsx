export function ProjectCard({ title, tag, description, link }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition w-full text-gray-800">
      
      <span className="text-purple-600 font-semibold text-xs uppercase">
        {tag}
      </span>

      <h3 className="text-lg font-semibold mt-4 text-rose-800">
        {title}
      </h3>

      <p className="mt-2 text-sm text-rose-700 leading-relaxed">
        {description}
      </p>

      <a
        href={link}
        className="text-purple-600 mt-4 inline-block font-semibold hover:underline"
      >
        Lihat
      </a>

    </div>
  );
}
