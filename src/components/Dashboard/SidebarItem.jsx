import { useContext } from "react";
import { SidebarContext } from "./Dashboard";

export function SidebarItem({ icon, text }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li className="flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-700 transition">
      <span>{icon}</span>
      {expanded && <span>{text}</span>}
    </li>
  );
}
export default SidebarItem;
