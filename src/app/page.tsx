import Navbar from "@/components/shared/navbar/Navbar";
import Image from "next/image";
import headerImage from "../../public/header.jpg";
const page = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[65%]">
        <h1 className="text-4xl">Heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          assumenda adipisci et nam ea culpa dignissimos laboriosam enim
          voluptas fugiat qui deleniti debitis atque veritatis dolorem, sunt
          fuga ipsum similique.
        </p>
        <button>Submit</button>
      </div>
      <div className="w-[35%]">
        <Image src={headerImage} alt="header image" width={500} height={500} />
      </div>
    </div>
  );
};

export default page;
