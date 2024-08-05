import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";

const ItemForm = () => {
  const [category, setCategory] = useState("Movie");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [watchedDate, setWatchedDate] = useState("");
  const [highlights, setHighlights] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      category,
      title,
      rating,
      watched_on: watchedDate, // Assuming watchedDate is a Date object
      highlights,
    };

    try {
      const { data, error } = await supabase.from("items").insert([newItem]);
      if (error) {
        console.error("Error inserting item:", error);
        // Handle error, e.g., show error message to user
      } else {
        console.log("Item inserted successfully:", data);

        // Clear form fields or show success message
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-2">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-transparent border border-blue-500"
        >
          <option value="Movie" className="bg-slate-800">
            Movie
          </option>
          <option value="Web Series" className="bg-slate-800">
            Web Series
          </option>
          <option value="Anime" className="bg-slate-800">
            Anime
          </option>
          <option value="Book" className="bg-slate-800">
            Book
          </option>
        </select>
      </div>
      <div className="m-2">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-transparent border border-blue-500"
        />
      </div>
      <div className="m-2">
        <label htmlFor="rating">Rating:</label>
        <input
          type="text"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="bg-transparent border border-blue-500"
        />
      </div>
      <div className="m-2">
        <label htmlFor="watchedDate">Watched Date:</label>
        <input
          type="date"
          id="watchedDate"
          value={watchedDate}
          onChange={(e) => setWatchedDate(e.target.value)}
          className="bg-transparent border border-blue-500"
        />
      </div>
      <div className="m-2">
        <label htmlFor="highlights">Highlights:</label>
        <textarea
          id="highlights"
          value={highlights}
          onChange={(e) => setHighlights(e.target.value)}
          className="bg-transparent border border-blue-500"
        />
      </div>
      <button type="submit" className="bg-green-500 p-2 rounded-lg">
        Submit
      </button>
    </form>
  );
};

export default ItemForm;
