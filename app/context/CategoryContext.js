// app/components/CategoryContext.js
'use client'
import { createContext, useState } from 'react';

const CategoryContext = createContext();

export const CategoryContextProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState('Movie');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <CategoryContext.Provider value={{ selectedTab, handleTabChange }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
