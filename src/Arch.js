import React from "react";
import Today from "./Today";
import Week from "./Week";

const Arch = () => {
  return (
    <div>
      <div className="md:flex lg:flex block">
        <Today />
        <div className="flex flex-wrap lg:justify-start md:justify-start justify-center items-end text-center text-[#B7BEC7] text-sm  ">
          <div className="relative">
            <img
              alt="arch"
              className="md:w-40 md:h-auto w-36 h-auto mt-5 mx-2.5 object-cover rounded-xl block "
              src="Photos/arch.jpg"
            />
            <div className="text-red-600 absolute lg:top-5 lg:right-4 md:top-5 md:right-4 top-5 right-5">
              <ion-icon size="small" name="heart"></ion-icon>
            </div>

            <p>seg_12399.png</p>
          </div>
          <div className="relative">
            <img
              alt="arch"
              className="md:w-40 md:h-56 w-36 h-48 mt-5 mx-2.5 object-cover rounded-xl block"
              src="Photos/kitchen.jpg"
            />
            <div className="text-red-600 absolute lg:top-5 lg:right-4 md:top-5 md:right-4 top-5 right-5">
              <ion-icon size="small" name="heart"></ion-icon>
            </div>
            <p>Kitchen_sansudan.jpg</p>
          </div>
          <div className="relative">
            <img
              alt="arch"
              className="md:w-40 md:h-auto w-36 h-auto mt-5 mx-2.5 object-cover rounded-xl block"
              src="Photos/bridge.jpg"
            />
            <div className="text-[#212325] absolute lg:top-5 lg:right-4 md:top-5 md:right-4 top-5 right-5">
              <ion-icon size="small" name="heart-outline"></ion-icon>
            </div>
            <p>Kitchen_sansudan.jpg</p>
          </div>
        </div>
      </div>
      <div className="md:flex lg:flex block mt-10">
        <Week />
        <div className="flex flex-wrap lg:justify-start md:justify-start justify-center items-end text-center text-[#B7BEC7] text-sm w-11/12">
          <div className="relative">
            <img
              alt="arch"
              className="md:w-40 md:h-56 w-36 h-48 mt-5 mx-2.5 object-cover rounded-xl block "
              src="Photos/house.jpg"
            />
            <div className="text-[#212325] absolute lg:top-5 lg:right-4 md:top-5 md:right-4 top-5 right-5">
              <ion-icon size="small" name="heart-outline"></ion-icon>
            </div>

            <p>seg_12399.png</p>
          </div>
          <div className="relative">
            <img
              alt="arch"
              className="md:w-40 md:h-56 w-36 h-48 mt-5 mx-2.5 object-cover rounded-xl block "
              src="Photos/pool.jpg"
            />
            <div className="text-[#212325] absolute lg:top-5 lg:right-4 md:top-5 md:right-4 top-5 right-5">
              <ion-icon size="small" name="heart-outline"></ion-icon>
            </div>

            <p>New_house_... .jpg</p>
          </div>
          <div className="relative mt-10 ">
            <img
              alt="arch"
              className="md:w-40 md:h-56 w-36 h-48 mt-5 mx-2.5 object-cover rounded-xl block "
              src="Photos/cat.jpg"
            />
            <div className="text-[#212325] absolute lg:top-5 lg:right-4 md:top-5 md:right-4 top-5 right-5">
              <ion-icon size="small" name="heart-outline"></ion-icon>
            </div>

            <p>New_house_... .jpg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arch;
