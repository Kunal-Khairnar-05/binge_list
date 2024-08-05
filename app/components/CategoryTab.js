// app/components/CategoryTab.js
"use client";
import { useContext } from "react";
import CategoryContext from "../context/CategoryContext";

const CategoryTab = ({ tab }) => {
  const { selectedTab, handleTabChange } = useContext(CategoryContext);

  return (
    <button
      className={`tab ${
        selectedTab === tab ? "active bg-gray-500 bg-opacity-25" : ""
      } md:mr-9 m-2 md:p-4 p-2 rounded-xl `}
      onClick={() => handleTabChange(tab)}
    >
      {tab}
    </button>
  );
};

export default CategoryTab;
