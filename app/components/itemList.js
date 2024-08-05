"use client";
import React, { useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Card from "./Card";
import CategoryContext from "../context/CategoryContext";

export const ItemList = () => {
  const { selectedTab } = useContext(CategoryContext);
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data, error } = await supabase.from("items").select();

        if (error) {
          setFetchError("Could not fetch items");
          setItems([]);
          console.log(error);
          return; // Exit early on error
        }

        setItems(data);
      } catch (error) {
        setFetchError("Could not fetch items");
        setItems([]);
        console.error(error);
      }
    };

    fetchItems();
  }, []);

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    fetchItems();
  };

  const filteredItems = items.filter(
    (item) => !selectedTab || item.category === selectedTab
  );

  return (
    <div>
      {fetchError && <p>{fetchError}</p>}
      {items && (
        <div className="grid md:grid-cols-3 grid-cols-1">
          {filteredItems.map((item) => (
            <Card key={item.id} item={item} onDelete={handleDeleteItem} />
          ))}
        </div>
      )}
    </div>
  );
};
