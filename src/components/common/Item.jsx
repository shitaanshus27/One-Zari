import React from "react";

const Item = ({ details }) => {
  const { id, title, price, description, image } = details;

  return (
    <div
      className="flex flex-col items-center justify-center border-2 shadow-sm  gap-y-4 px-4 rounded-xl bg-white text-slate-700
                    hover:shadow-2xl hover:shadow-slate-500 hover:drop-shadow-2xl hover:scale-110 transition-all duration-500 "
    >
      <div className="px-9 flex flex-col items-center justify-center gap-y-4 my-2 relative">
        <p className="w-full text-center font-semibold text-lg">
          {title.substring(0, 14) + "..."}
        </p>

        <p className="w-full text-[10px] text-slate-400">
          {description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>

        <img src={image} alt="product" className=" h-44" />
      </div>

      <div className="flex justify-between items-center w-full my-2">
        <p className="text-green-600 font-semibold">${price}</p>
      </div>
    </div>
  );
};

export default Item;
