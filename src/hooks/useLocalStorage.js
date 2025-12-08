"use client";
import { useState, useEffect, useCallback } from "react";

/**
 * Custom hook for managing localStorage with Next.js compatibility
 * @param {string} key - The localStorage key
 * @param {*} initialValue - Initial value if no stored value exists
 * @returns {Object} Object with value and methods to manage localStorage
 */
function useLocalStorage(key, initialValue) {
  // Initialize state with a function to avoid SSR issues
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error loading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Get item from localStorage
  const getItem = useCallback(() => {
    if (typeof window === "undefined") {
      return null;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error getting localStorage key "${key}":`, error);
      return null;
    }
  }, [key]);

  // Set item in localStorage
  const setItem = useCallback(
    (value) => {
      try {
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(value));
          setStoredValue(value);
        }
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key]
  );

  // Update item in localStorage (useful for objects)
  const updateItem = useCallback(
    (updater) => {
      try {
        if (typeof window !== "undefined") {
          const currentValue = getItem();
          const newValue = updater(currentValue || storedValue);
          window.localStorage.setItem(key, JSON.stringify(newValue));
          setStoredValue(newValue);
        }
      } catch (error) {
        console.error(`Error updating localStorage key "${key}":`, error);
      }
    },
    [key, getItem, storedValue]
  );

  // Delete item from localStorage
  const deleteItem = useCallback(() => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(key);
        setStoredValue(initialValue);
      }
    } catch (error) {
      console.error(`Error deleting localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  // Sync state with localStorage on mount and when key changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const item = getItem();
      if (item !== null) {
        // Defer the update to avoid calling setState synchronously inside the effect,
        // and guard with a mounted flag to avoid updates after unmount.
        let isMounted = true;
        Promise.resolve().then(() => {
          if (isMounted) {
            setStoredValue(item);
          }
        });
        return () => {
          isMounted = false;
        };
      }
    }
  }, [key, getItem]);

  return {
    value: storedValue,
    getItem,
    setItem,
    updateItem,
    deleteItem,
  };
}

export default useLocalStorage;

// Usage Example:
//
// function MyComponent() {
//   const { value, setItem, updateItem, deleteItem } = useLocalStorage('user', { name: '', age: 0 });
//
//   const handleSave = () => {
//     setItem({ name: 'John', age: 30 });
//   };
//
//   const handleUpdate = () => {
//     updateItem((prev) => ({ ...prev, age: prev.age + 1 }));
//   };
//
//   const handleDelete = () => {
//     deleteItem();
//   };
//
//   return (
//     <div>
//       <p>Name: {value.name}, Age: {value.age}</p>
//       <button onClick={handleSave}>Save</button>
//       <button onClick={handleUpdate}>Increment Age</button>
//       <button onClick={handleDelete}>Delete</button>
//     </div>
//   );
// }
