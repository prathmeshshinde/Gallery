import React from "react";

const Today = () => {
  var current = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div>
      <div>
        <div className="mr-10">
          <p className="text-[#2E8BFF] font-upright text-[52px] font-semibold">
            Today
          </p>
          <p className="font-upright font-semibold text-[20px] text-[#6F7378]">
            {current.toLocaleDateString("en-IN", options, {})}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Today;
