"use client"
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { IProduct } from "@/Types/products.type";
import { useEffect, useState } from "react";
import axios from "axios";
const page = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/products?limit=20"
      );
      console.log(response);
      if (response?.data.length > 0) {
        setProducts(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <h1 className="text-xl text-center text-red-900 font-semibold uppercase">
       All Products
      </h1>
      <div className="my-5 flex justify-center items-center flex-wrap text-center w-full gap-4">
        {products?.map((item: IProduct) => (
          <div
            key={item?.id}
            className="p-2 w-[28%] rounded-md shadow-md border border-2 border-red-900"
          >
            <img
              src={item?.image}
              alt=""
              className=" w-full rounded-t-md h-80 bg-gray-500"
            />
            <div className="flex flex-col justify-center gap-2">
              <small className="mt-1">{item?.category}</small>
              <h2 className="text-md font-semibold">{item?.title}</h2>
              <h1 className="text-3xl font-semibold text-red-900">
                ${item?.price}
              </h1>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-red-900 text-gray-200"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
