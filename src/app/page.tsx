"use client";
/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/shared/navbar/Navbar";
import Image from "next/image";
import headerImage from "../../public/header.jpg";
import { motion } from "framer-motion";
import Card from "@/components/category-card/Card";

const page = () => {
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
            Discover the <span className="text-red-900 uppercase font-bold"> ultimate e-commerce</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-gray-900 w-11/12"
          >
             best deal of the season! Unleash a
            shopping frenzy with our exclusive offer that combines unbeatable
            discounts and unparalleled quality. Whether you're seeking
            fashion-forward apparel.
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
        <Card/>
      </div>
    </div>
  );
};

export default page;
