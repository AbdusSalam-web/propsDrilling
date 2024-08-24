import React from "react";

const Second = ({ cart, add, remove, warnMax, warnMin, maxItems }) => {
  return (
    <>
      <div>
        <p className="h-[24px] text-red-400 mb-[5px] ">
          {cart == maxItems ? "You have added maximum items." : ""}
        </p>
        <button
          onClick={add}
          disabled={cart == maxItems}
          className=" border-[1px] border-[transparent] rounded-[8px] py-[.6em] px-[1.2em] text-[1em] font-medium font-sans bg-[#1a1a1a] pointer text-white disabled:cursor-not-allowed transition-all duration-500 hover:bg-teal-500 disabled:bg-[#b4b4b4]"
        >
          + Add
        </button>
        <h1 className="text-[3.2em] leading-[1.1] text-black my-[30px] ">
          {cart < 10 ? `0${cart}` : cart} items added
        </h1>
        <button
          onClick={remove}
          disabled={cart == 0}
          className=" border-[1px] border-[transparent] rounded-[8px] py-[.6em] px-[1.2em] text-[1em] font-medium font-sans bg-[#1a1a1a] pointer text-white disabled:cursor-not-allowed  transition-all duration-500 hover:bg-teal-500 disabled:bg-[#b4b4b4]"
        >
          - Remove
        </button>
        <p className="h-[24px] text-red-400  ">
          {cart == 0 ? "Item can't be negative." : ""}
        </p>
      </div>
    </>
  );
};

export default Second;
