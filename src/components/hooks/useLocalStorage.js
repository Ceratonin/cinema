import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : defaultValue;
    }
    return null;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
