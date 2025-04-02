import { createContext, useState } from "react";
import {
  ChevronLast,
  ChevronFirst,
  Home,
  User,
  LayoutDashboard,
  LogOut,
  Save,
} from "lucide-react";
import { Link } from 'react-router-dom';

import SidebarItem from "./SidebarItem"; // Ensure SidebarItem exists
import Dashboard1 from "./Dashboard1"; // Importing Dashboard1
import Card from "./Card"; // Importing Card component
import { useContent } from "../../../Hooks/useContent"; // Importing useContent hook


// ✅ Export SidebarContext
export const SidebarContext = createContext();

export default function DashboardLayout() {
  const [expanded, setExpanded] = useState(true);
  const [showCollections, setShowCollections] = useState(false);
  const { contents, refreshContent, isLoading, error } = useContent(); // Use useContent hook
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryDropdown, setCategoryDropdown] = useState(false);

  // Filter contents based on selected category
  const filteredContents = selectedCategory
    ? contents.filter((content) => content.type.toLowerCase() === selectedCategory)
    : contents;

  return (
    <SidebarContext.Provider value={{ expanded }}>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full transition-all duration-300 bg-gray-800 text-white ${
            expanded ? "w-60" : "w-16"
          }`}
        >
          <nav className="h-full flex flex-col border-r shadow-sm">
            <div className="p-4 pb-2 flex justify-between items-center">
              <h1
                className={`font-bold text-md overflow-hidden transition-all ${
                  expanded ? "w-40" : "w-0"
                }`}
              >
                PocketLink
              </h1>
              <button
                onClick={() => setExpanded((curr) => !curr)}
                className="p-1 rounded-lg bg-gray-700 hover:bg-gray-600"
              >
                {expanded ? <ChevronFirst /> : <ChevronLast />}
              </button>
            </div>

            <ul className="flex-1 px-3 space-y-2">
            <SidebarItem icon={<Home />} text="Home" to="/" />

              <div>
                <button
                  onClick={() => setCategoryDropdown(!categoryDropdown)}
                  className="w-full text-left flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-700"
                >
                  <span className="flex items-center">
                 <LayoutDashboard className="mr-2" />
                 <span
    className={`overflow-hidden transition-all duration-10 ${
      expanded ? "w-auto opacity-100 ml-1" : "w-0 opacity-0"
    }`}
  >Categories</span> 
                  </span>
               </button>
                {expanded && categoryDropdown && ( // Only show when expanded is true
                  <ul className="bg-gray-700 rounded-md mt-1">
                    {["youtube", "instagram", "twitter", "facebook"].map((category) => (
                      <li
                        key={category}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-600"
                        onClick={() => {
                          setSelectedCategory(category);
                          setCategoryDropdown(false);
                        }}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <SidebarItem icon={<Save />} text="Saved" />
              <SidebarItem icon={<User />} text="Profile" />
              <SidebarItem icon={<LogOut />} text="Logout" />
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <div
  className={`flex flex-col flex-1 transition-all duration-300 ${
    expanded ? "ml-60" : "ml-16"
  }`}
>
  <header className="bg-gray-800 shadow-md py-3 px-8 flex justify-between items-center text-white">
    <h1 className="font-semibold text-lg">PocketLink</h1>

    <div className="flex items-center space-x-6">
      <nav className="flex space-x-6">
        {/* on click it should go to hero page */}
      <a 
  href="#" 
  className="text-gray-200 hover:text-white"
>
  <Link to="/">Home</Link>
</a>
        {/* on clicking dashboard it reloads the page */}
        <a 
    href="#" 
    className="text-gray-200 hover:text-white"
    onClick={(e) => {
    e.preventDefault();  // Prevent default link behavior
    window.location.reload();  // Force page reload
  }}
>
  Dashboard
</a>
        <a href="#" className="text-gray-200 hover:text-white">My Collections</a>
      </nav>

      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
        Share
      </button>

      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
        <User className="w-5 h-5 text-gray-700" />
      </div>
    </div>
  </header>

  <main className="p-6 bg-gray-950 flex-1">
    <div className="p-4 flex justify-between items-center bg-gray-650">
      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-medium">
        Total Resources Saved: {filteredContents?.length || 0}
      </span>

      <button
        onClick={() => setShowCollections(true)}
        className="text-white text-sm hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md transition duration-200"
      >
        + Create Collection
      </button>
    </div>

    <hr className="border-t border-gray-500" style={{ borderTopWidth: "0.1px" }} />
     {/* main working content for category dropdown */}
    {isLoading ? (
      <p className="text-white">Loading content...</p>
    ) : error ? (
      <p className="text-red-500">Error: {error}</p>
    ) : filteredContents?.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredContents.map((content, index) => (
          <Card key={content._id || index} title={content.title} link={content.link} type={content.type} />
        ))}
      </div>
    ) : (
      <p className="text-gray-400 text-center mt-4">
        No resources found for {selectedCategory || "all categories"}.
      </p>
    )}

    {/* Show Dashboard1 when creating a new collection */}
    {showCollections && (
      <Dashboard1 setShowCollections={setShowCollections} refreshContent={refreshContent} />
    )}
  </main>
</div>

      </div>
    </SidebarContext.Provider>
  );
}



