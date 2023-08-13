import { AiFillCaretDown } from "react-icons/ai";

const Sale = () => {
  return (
    <div className="flex flex-col gap-1 p-1">
      <h1 className="uppercase text-center text-gray-500 text-lg font-semibold ">
        Item sale
      </h1>
      <div className="">
        <p className="pl-5 text-sm">Yearly</p>
        <div className="flex justify-between w-3/4 pl-5">
          <p className="font-semibold">RS 99990.00</p>
          <p className="text-lime-500 flex gap-x-1">
            +43% <AiFillCaretDown></AiFillCaretDown>
          </p>
        </div>
      </div>
      <div className="">
        <p className="pl-5 text-sm">Monthly</p>
        <div className="flex justify-between w-3/4 pl-5">
          <p className="font-semibold">RS 999.00</p>
          <p className="text-lime-500 flex gap-x-1">
            +43% <AiFillCaretDown></AiFillCaretDown>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sale;
