import React, { useEffect, useState } from "react";

const Child = (props) => {
  const [value, setValue] = useState("");
  const getColor = props.getColor;
  const onChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    getColor(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div>
      <input
        type="text"
        name="color"
        placeholder="Enter the name of the color"
        onChange={onChange}
      />
    </div>
  );
};

export default Child;
