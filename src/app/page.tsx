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
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import logo from "../../public/logo/logo.png";
import successToast from "@/components/shared/toast/Success";
const page = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://replic-server.vercel.app/products?limit=6"
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

  // add to cart function
  const addToCart = async (item: IProduct) => {
   
    let phoneNumber;
    if (typeof window !== "undefined") {
      // Access localStorage here
      phoneNumber = localStorage.getItem("phone");
    }
    const body = {
      phone: phoneNumber,
      name: item.title,
      category: item.category,
      price: item?.price,
      image: item?.image,
    };
    try {
      const response = await axios.post(
        "https://replic-server.vercel.app/addProduct",
        body
      );
      console.log(response);
      if (response?.data?.ok) {
        successToast("Successfully added on cart");
      }
    } catch (error) {
      console.log(error);
    }
  };
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
        <h1 className="text-xl text-center text-red-900 font-semibold">
          Product
        </h1>
        <div className="my-5 flex justify-center items-center flex-wrap text-center w-full gap-4">
          {products?.map((item: IProduct) => (
            <div
              key={item._id}
              className="flex flex-col max-w-sm p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-black text-gray-100"
            >
              <div className="flex space-x-4">
                <Image
                  alt=""
                  src={logo}
                  className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
                />
                <div className="flex flex-col space-y-1">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-sm font-semibold"
                  >
                    {item?.category}
                  </a>
                  <span className="text-xs text-gray-400">4 hours ago</span>
                </div>
              </div>
              <div>
                <img
                  src={item?.image}
                  alt="product"
                  className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500"
                />
                <h2 className="mb-1 text-xl font-semibold">{item?.title}</h2>
                <p className="text-sm text-gray-400">
                  {item?.description.slice(0, 100)}...{" "}
                  <small className="text-red-900">read more</small>
                </p>
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="space-x-2">
                  <h1 className="text-2xl text-red-900 font-bold">
                    ${item?.price}
                  </h1>
                </div>
                <div className="flex space-x-2 text-sm text-gray-400">
                  <button
                    type="button"
                    className="flex items-center p-1 space-x-1.5"
                  >
                    <AiFillStar className="w-4 h-4 text-gray-300" />
                    <span>{item?.rating?.rate}</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center p-1 space-x-1.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      aria-label="Number of likes"
                      className="w-4 h-4 fill-current text-violet-400"
                    >
                      <path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"></path>
                      <path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"></path>
                    </svg>
                    <span>{item?.rating?.count}</span>
                  </button>
                </div>
              </div>
              <button
                onClick={() => addToCart(item)}
                className="py-2 bg-red-900 hover:bg-gray-300 hover:text-red-900 text-gray-300 duration-300"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 mb-20">
          <Link href="/products">
            <button className="py-1 px-5 bg-red-900 hover:bg-gray-200 hover:text-red-900 text-gray-200 duration-300">
              See all
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
