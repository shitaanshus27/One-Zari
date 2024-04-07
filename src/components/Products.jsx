import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Item from "./common/Item";
import Spinner from "./Spinner";

const Products = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  async function fetchData() {
    setLoading(true);

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      // console.log(data);
      setItems(data);
    } catch (error) {
      console.log("Error in loading Data");
      setItems([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="ourproducts" className="w-full p-6 bg-red-200">
      <div className="md:w-[1280px] mx-auto md:h-auto">
        <div className="md:h-[450px] h-[100px]"></div>
        <h1 className="text-black text-center font-mullish md:text-5xl text-3xl">
          Our Products
        </h1>
        <div className="mt-1 w-1/4 h-1 mx-auto bg-red-500"></div>

        <div className="flex items-center justify-center">
          {loading ? (
            <Spinner />
          ) : (
            <div
              className="  grid xl:grid-cols-4 w-11/12 xl:max-w-[1111px] gap-x-4 gap-y-14 my-12
                            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[800px] sm:max-w-[600px] max-w-[300px]"
            >
              {items.length === 0
                ? "No Data Found"
                : items.map((item) => <Item key={item.id} details={item} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
