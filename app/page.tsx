"use client";
import { CategoryContextProvider } from "../app/context/CategoryContext";
import CategoryTab from "../app/components/CategoryTab";
import { ItemList } from "../app/components/itemList";
import ItemForm from "../app/components/itemForm";
import { useState } from "react";
import Marquee from "react-fast-marquee";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <CategoryContextProvider>
      <div className="md:text-7xl text-3xl text-center text-blue-500 m-5 font-black">
      クナルさんの  ビンジリスト
      </div>
      <div className="text-lg text-center text-blue-500 m-5 font-light">
       Kunal's Binge List
      </div>

      <div className="bg-red-200">
        <Marquee className="text-black">
          My Binge list of Movies, Web Series, Animes and Books that entertained
          me.
        </Marquee>
      </div>

      <button
        onClick={handleModalOpen}
        className="bg-yellow-500 p-3 rounded-lg m-4"
      >
        Add Item
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex flex-row justify-center items-center">
          <div className="bg-gray-800 p-8 rounded-lg">
            <ItemForm />
            <button
              onClick={handleModalClose}
              className="bg-gray-900 p-2 rounded-lg mt-3"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="tab-container md:p-8 md:m-5 text-center">
        <CategoryTab tab="Movie" />
        <CategoryTab tab="Web Series" />
        <CategoryTab tab="Anime" />
        <CategoryTab tab="Book" />
      </div>
      <ItemList />
    </CategoryContextProvider>
  );
};

export default Home;
