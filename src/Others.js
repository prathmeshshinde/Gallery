import React from "react";
import Today from "./Today";
import Week from "./Week";

const Others = () => {
  return (
    <div>
      <div>
        <div className="flex">
          <Today />
          <div className="font-upright font-semibold text-2xl text-white">
            No Images
          </div>
        </div>
        <div className="flex mt-10">
          <Week />
        </div>
      </div>
    </div>
  );
};

export default Others;
