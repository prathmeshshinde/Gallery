import React from "react";

const Week = () => {
  var current = new Date();

  var first = current.getDate() - current.getDay();
  var last = first + 6;
  return (
    <div>
      <div className="mr-14">
        <p className="text-[#2E8BFF] font-upright text-[52px] font-semibold">
          This week
        </p>
        <p className="font-upright font-semibold text-[20px] text-[#6F7378]">
          {first} to {last}{" "}
          {current.toLocaleDateString("en-IN", {
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};

export default Week;
