import React from "react";
import { supabase } from "../lib/supabaseClient";

export default function Card({ item, onDelete }) {
  const handleDelete = async () => {
    try {
      const { error } = await supabase.from("items").delete().eq("id", item.id);
      if (error) {
        console.error("Error deleting item:", error);
        // Handle error, e.g., show error message
      } else {
        onDelete(item.id); // Notify parent component of deletion
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="bg-yellow-300 bg-opacity-25 p-5 m-4 rounded-2xl">
      <div className="md:text-3xl text-xl mb-5 font-medium">🪸 {item.title}</div>
      <div className="md:text-2xl mb-4 text-blue-100">⭐{item.rating}</div>
      <h3 className="md:text-sm sm:text-xs mb-3 text-blue-100">
        📅 {item.watched_on}
      </h3>
      <p className="md:text-sm sm:text-xs text-blue-100">
        ⚡ {item.highlights}
      </p>
      <button onClick={handleDelete} className="m-3 bg-red-500 p-2 rounded-lg">
        🗑️
      </button>
    </div>
  );
}
