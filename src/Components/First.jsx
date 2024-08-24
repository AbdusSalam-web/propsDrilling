import React, { useState } from "react";
import Second from "./Second";

const First = () => {
  const [value, setValue] = useState(0);
  const maxItems = 10;
  const handleAdd = () => {
    if (value < maxItems) {
      setValue(value + 1);
    }
  };

  const handleRemove = () => {
    if (value >= 1) {
      setValue(value - 1);
    }
  };

  return (
    <>
      <Second
        cart={value}
        add={handleAdd}
        remove={handleRemove}
        maxItems={maxItems}
      />
    </>
  );
};

export default First;
