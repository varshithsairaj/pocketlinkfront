
import { useContext } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import { SidebarContext } from "./Dashboard";

export function SidebarItem({ icon, text, to }) {  // Add 'to' prop for the link destination
  const { expanded } = useContext(SidebarContext);

  return (
    <li className="flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-700 transition">
      <span>{icon}</span>
      {/* Use Link for navigation */}
      <Link to={to} className="text-white">
        {expanded && <span>{text}</span>}
      </Link>
    </li>
  );
}

export default SidebarItem;
