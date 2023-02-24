import { useState } from "react";

const Task2 = () => {
  const [x, setX] = useState("0");

  return (
    <div>
      <input
        type="number"
        value={x}
        onChange={(e) => {
          setX(e.target.value);
        }}
      />
      <input type="number" />
    </div>
  );
};

export default Task2;
