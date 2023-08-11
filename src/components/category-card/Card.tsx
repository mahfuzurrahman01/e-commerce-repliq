/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import manImage from "../../../public/man.jpg";
import womenImage from "../../../public/women.jpg";
import electrics from "../../../public/electrics.jpg";

const Card = () => {
  return (
    <div className="flex justify-center items-center my-16 gap-10">
      <div className="relative p-3 flex justify-center w-[28%] bg-gray-100 rounded-md shadow-lg shadow-gray-300 ">
        <Image
          src={manImage}
          alt="man"
          width={350}
          height={220}
          className=" duration-300 overflow-hidden rounded-md"
        />
        <h1 className="absolute bottom-16 font-extrabold text-3xl w-11/12 text-center hover:bg-gray-200 hover:text-red-900 duration-500 text-gray-200 bg-red-900  uppercase">
          Men's
        </h1>
      </div>
      <div className="relative p-3 flex justify-center w-[28%] bg-gray-100 rounded-md shadow-lg shadow-gray-300 ">
        <Image
          src={womenImage}
          alt="women"
          width={350}
          height={220}
          className=" duration-300 overflow-hidden rounded-md"
        />
        <h1 className="absolute bottom-16 font-extrabold text-3xl w-11/12 text-center hover:bg-gray-200 hover:text-red-900 duration-500 text-gray-200 bg-red-900  uppercase">
          Women's
        </h1>
      </div>
      <div className="relative p-3 flex justify-center w-[28%] bg-gray-100 rounded-md shadow-lg shadow-gray-300 ">
        <Image
          src={electrics}
          alt="electric"
          width={350}
          height={220}
          className=" duration-300 overflow-hidden rounded-md"
        />
        <h1 className="absolute bottom-16 font-extrabold text-3xl w-11/12 text-center hover:bg-gray-200 hover:text-red-900 duration-500 text-gray-200 bg-red-900  uppercase">
          Electrics
        </h1>
      </div>
    </div>
  );
};

export default Card;
