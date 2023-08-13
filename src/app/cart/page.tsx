/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import successToast from "@/components/shared/toast/Success";
const page = () => {
  const [cartItem, setCartItem] = useState([]);
  const [removed, setRemoved] = useState(true);
  const [total, setTotal] = useState(0);
  const phone: any = localStorage.getItem("phone");
  // fetching all cart item
  const fetchCartItem = async (phone: number | string) => {
    const response = await axios.get(
      `http://localhost:5000/getOrder?user=${phone}`
    );
    if (response?.data?.ok) {
      setCartItem(response?.data?.data);
      const totalPrice = cartItem.reduce(
        (total: number, order: any) => total + order.price,
        0
      );
      setTotal(totalPrice);
    }
  };
  useEffect(() => {
    console.log("first");
    
    // getting all cart item for this logged in user
    const phoneNumber = localStorage.getItem("phone");

    if (phoneNumber) {
      const cleanedPhoneNumber = phoneNumber.replace(/["']/g, "");

      fetchCartItem(cleanedPhoneNumber);
    }
  }, [removed,setRemoved]);
  // remove item from cart
  const removeHandle = async (id: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/delete?id=${id}`
      );
      if (response?.data?.ok) {
        successToast("Successfully remove item");
        setRemoved(!removed);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center mb-10 ">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-black text-gray-100">
        <h2 className="text-xl font-semibold">Your cart</h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cartItem.map((item: any) => (
            <li
              key={item?._id}
              className="flex flex-col py-6 sm:flex-row sm:justify-between"
            >
              <div className="flex w-full space-x-2 sm:space-x-4">
                <Image
                  width={100}
                  height={100}
                  src={item?.image}
                  alt="Polaroid camera"
                  className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leadi sm:pr-8">
                        {item?.name}
                      </h3>
                      <p className="text-sm text-gray-400">{item?.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-red-900">
                        ${item?.price}
                      </p>
                      <p className="text-sm line-through text-red-900">
                        ${item.price + 10}
                      </p>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1"
                      onClick={() => removeHandle(item?._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span className="hover:text-red-900 duration-300">
                        Remove
                      </span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                      </svg>
                      <span>Add to favorites</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold">${total}</span>
          </p>
          <p className="text-sm text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border rounded-md border-violet-400"
          >
            Back
            <span className="sr-only sm:not-sr-only">to shop</span>
          </button>
          <button
            type="button"
            className="px-6 py-2 border rounded-md bg-red-900 text-gray-300 border-gray-400"
          >
            <span className="sr-only sm:not-sr-only ">Continue to</span>Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
