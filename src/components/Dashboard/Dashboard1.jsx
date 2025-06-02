import { useState, useRef, useEffect } from "react";
import { BACKEND_URL } from "../../config";
import axios from "axios";

export default function Dashboard1({ setShowCollections}) {
  const [newCollection, setNewCollection] = useState({
    category: "",
    link: "",
    description: "",
    title: "",
  });
  const [categories, setCategories] = useState([
    "Youtube",
    "Twitter",
    "Instagram",
    "Facebook",
  ]);
  const [newCategory, setNewCategory] = useState("");
  const titleRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    console.log("Updated newCollection:", newCollection);
  }, [newCollection]);

  const handleAddCategory = () => {
    const trimmedCategory = newCategory.trim();
    if (trimmedCategory && !categories.includes(trimmedCategory)) {
      setCategories([...categories, trimmedCategory]);
      setNewCategory("");
    } else {
      alert("Category already exists or is invalid!");
    }
  };

  const addcontent = async () => {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    const type = newCollection.category;

    console.log("Input Values - Title:", title);
    console.log("Input Values - Link:", link);
    console.log("Input Values - Type:", type);

    if (!title || !link) {
      console.warn("Title and link are required");
      return;
    }

    console.log("Adding content:", { title, link, type });

    try {
      await axios.post(
        `${BACKEND_URL}/api/v1/content`,
        {
          title,
          link,
          type,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setShowCollections(false);
      window.location.reload(); 
    } catch (error) {
      console.error("Error adding content:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-stone-600/30 backdrop-blur-md">
      <div className="bg-black p-6 rounded-md shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4 text-white">
          Create a New Collection
        </h2>

        <input
          type="text"
          ref={titleRef}
          placeholder="Title"
          className="w-full border p-2 rounded-md mb-3 text-white bg-black"
          value={newCollection.title || ""}
          onChange={(e) =>
            setNewCollection({ ...newCollection, title: e.target.value })
          }
        />

        <input
          type="text"
          ref={linkRef}
          placeholder="Resource Link"
          className="w-full border p-2 rounded-md mb-3 text-white bg-black"
          value={newCollection.link}
          onChange={(e) =>
            setNewCollection({ ...newCollection, link: e.target.value })
          }
        />

        <textarea
          placeholder="Description"
          className="w-full border p-2 rounded-md mb-3 text-white bg-black"
          value={newCollection.description}
          onChange={(e) =>
            setNewCollection({
              ...newCollection,
              description: e.target.value,
            })
          }
        />

        <select
          className="w-full border p-2 rounded-md mb-3 bg-black text-white"
          value={newCollection.category}
          onChange={(e) =>
            setNewCollection({ ...newCollection, category: e.target.value })
          }
        >
          <option value="">Select Category</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat} className="bg-black text-white">
              {cat}
            </option>
          ))}
        </select>

        <div className="flex space-x-2 mb-3">
          <input
            type="text"
            placeholder="New Category"
            className="border p-2 rounded-md flex-1 text-white bg-black"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button
            onClick={handleAddCategory}
            className="bg-gray-950 text-white px-3 py-2 rounded-md hover:bg-green-700"
          >
            Add
          </button>
        </div>

        <div className="flex justify-end space-x-2">
          <button
            onClick={() => setShowCollections(false)}
            className="bg-gray-100 px-3 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={addcontent}
            className={`px-3 py-2 rounded-md ${
              newCollection.category &&
              newCollection.link.trim() &&
              newCollection.description.trim()
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-500 text-gray-300 cursor-not-allowed"
            }`}
            disabled={
              !newCollection.category ||
              !newCollection.link.trim() ||
              !newCollection.description.trim()
            }
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
