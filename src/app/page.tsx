/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/shared/navbar/Navbar";
import Image from "next/image";
import headerImage from "../../public/header.jpg";
import { motion } from "framer-motion";
import Card from "@/components/category-card/Card";
import Products from "@/components/Products-group/Products";
import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "@/Types/products.type";
const page = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/products?limit=6"
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
      <div className="flex justify-center items-center">
        <div className="w-[65%] flex flex-col gap-2 justify-start items-start">
          <p className="text-lg text-red-900">REPLIQ'S, Friday</p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-6xl text-gray-400"
          >
            Best <span className="text-red-900 uppercase font-bold">Deal</span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl text-gray-400"
          >
            Discover the{" "}
            <span className="text-red-900 uppercase font-bold">
              {" "}
              ultimate e-commerce
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-gray-900 w-11/12"
          >
            best deal of the season! Unleash a shopping frenzy with our
            exclusive offer that combines unbeatable discounts and unparalleled
            quality. Whether you're seeking fashion-forward apparel.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="bg-red-900 text-gray-300 py-1 px-4 mt-3 hover:bg-red-800 duration-300"
          >
            Shop now
          </motion.button>
        </div>
        <div className="w-[35%]">
          <Image
            src={headerImage}
            alt="header image"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div>
        <Card />
      </div>
      <div>
        <h1 className="text-xl text-center text-red-900 font-semibold">Product</h1>
        <div className="my-5 flex justify-center items-center flex-wrap text-center w-full gap-4">
          {products?.map((item: IProduct) => (
            <div key={item?.id} className="p-2 w-[28%] rounded-md shadow-md border border-red-900">
              <img
                src={item?.image}
                alt=""
                className=" w-full rounded-t-md h-80 bg-gray-500"
              />
              <div className="flex flex-col justify-center gap-2">
                <small className="mt-1">{item?.category}</small>
                <h2 className="text-md font-semibold">{item?.title}</h2>
                <h1 className="text-3xl font-semibold text-red-900">${item?.price}</h1>
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
    </div>
  );
};

export default page;
