import React from "react";

const InvestItem = ({ item }) => {
  const { title, desc, icon, upOrDown, percent, price } = item; //description
  return (
    <div className="w-full py-2 px-2 items-center justify-between flex">
      {/* icon+text */}
      <div className="flex items-center justify-center space-x-4 w-full">
        <div className="bg-[#D8EEF4] rounded-full py-2 px-2">
          <span>{icon}</span>
        </div>
        <div className="w-full space-y-1">
          <h1 className="font-bold">{title}</h1>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
      {/*price+percent  */}
      <div className="w-full items-center justify-end flex flex-col">
        <h1 className="font-bold">${price}</h1>
        <p
          className={`${upOrDown === "up" ? "text-green-400" : "text-red-400"}`}
        >
          {percent}
        </p>
      </div>
    </div>
  );
};

export default InvestItem;
