import { useState, useEffect } from "react";
import { BACKEND_URL } from "../src/config";
import axios from "axios";

export function useContent() {
  const [contents, setContents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const refreshContent = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setContents(response.data.content);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching content:", error);
      setError("Failed to load content");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshContent();
  }, []);

  return { contents, refreshContent, isLoading, error };
}
