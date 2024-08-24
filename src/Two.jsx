import React from "react";

const Two = ({ cartItem, add, maxItems, remove }) => {
  return (
    <>
      <div>
        {/* Button disabled when the cartItem reached the maxItems */}
        <button
          onClick={add}
          disabled={cartItem >= maxItems}
          className=" border-[1px] border-[transparent] rounded-[8px] py-[.6em] px-[1.2em] text-[1em] font-medium font-sans bg-[#1a1a1a] pointer text-white  disabled:bg-[#b4b4b4] disabled:cursor-not-allowed "
        >
          + Add
        </button>
        <h1 className="text-[3.2em] leading-[1.1] text-black my-[30px] ">
          {cartItem <10? `0${cartItem}`:cartItem} items added
        </h1>
        {/* When the cartItem is 0 the button will be disabled */}
        <button
          onClick={remove}
          disabled={cartItem == 0}
          className=" border-[1px] border-[transparent] rounded-[8px] py-[.6em] px-[1.2em] text-[1em] font-medium font-sans bg-[#1a1a1a] pointer text-white  disabled:bg-[#b4b4b4] disabled:cursor-not-allowed "
        >
          - Remove
        </button>
      </div>
    </>
  );
};

export default Two;
