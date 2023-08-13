"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { IProduct } from "@/Types/products.type";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../../public/logo/logo.png";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import successToast from "@/components/shared/toast/Success";
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

  // add to cart function
  const addToCart = async (item: IProduct) => {
    try {
      const phoneNumber = localStorage.getItem("phone");
      
      if (phoneNumber) {
        const cleanedPhoneNumber = phoneNumber.replace(/["']/g, ''); // Remove all single and double quotes
        
        const body = {
          phone: cleanedPhoneNumber,
          name: item.title,
          category: item.category,
          price: item?.price,
          image: item?.image,
        };
        console.log(body);
  
        const response = await axios.post(
          "http://localhost:5000/addProduct",
          body
        );
  
        console.log(response);
        if (response?.data?.ok) {
          successToast("Successfully added to cart");
        }
      } else {
        console.log("Phone number not found in local storage");
      }
    } catch (error) {
      console.log("Error adding to cart:", error);
    }
  };
  
  return (
    <div>
      <h1 className="text-xl text-center text-red-900 font-semibold uppercase">
        All Products
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
    </div>
  );
};

export default page;
