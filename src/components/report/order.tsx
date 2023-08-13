const Order = () => {
  return (
    <div className="flex flex-col gap-1 p-1">
      <h1 className="uppercase text-center text-gray-500 text-lg font-semibold ">
        Orders
      </h1>
      <div className="">
        <p className="pl-5 text-sm">Monthly</p>
        <div className="flex justify-between w-3/4 pl-5">
          <p className="font-semibold">No. of orders :</p>
          <p className=" flex gap-x-1 font-semibold">54</p>
        </div>
      </div>
      <div className="">
        <p className="pl-5 text-sm">Daily</p>
        <div className="flex justify-between w-3/4 pl-5">
          <p className="font-semibold">No. of orders :</p>
          <p className=" flex gap-x-1 font-semibold">3</p>
        </div>
      </div>
    </div>
  );
};

export default Order;
