import { Link, useLocation } from "react-router-dom";

const sections = [
  { title: "Section 1", path: "/dashboard/section1" },
  { title: "Section 2", path: "/dashboard/section2" },
  { title: "Section 3", path: "/dashboard/section3" },
  { title: "Section 4", path: "/dashboard/section4" },
  { title: "Section 5", path: "/dashboard/section5" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-gray-900 text-white p-4">
      <h2 className="text-md font-semibold mb-4">Sections</h2>
      <ul>
        {sections.map((section, index) => (
          <li key={index} className="mb-2  hover:bg-slate-600">
            <Link
              to={section.path}
              className={`block px-3 py-2 rounded${
                location.pathname === section.path
                  ? "bg-green-600"
                  : "hover:bg-gray-700"
              }`}
            >
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
