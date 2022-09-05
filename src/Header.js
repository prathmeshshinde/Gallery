import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between font-inter">
        <div className="lg:flex md:flex hidden">
          <img className="w-8 self-center" alt="setting" src="cog.png" />
          <img className="w-8 self-center " alt="bell" src="bell.png" />
        </div>
        <div className="flex bg-black text-white rounded-full p-1 ">
          <p className="lg:px-4 lg:py-2 lg:text-base md:text-base text-xl md:px-4 md:py-2 lg:bg-[#323337] md:bg-[#323337] bg-[#111315] lg:rounded-full md:rounded-full rounded-none lg:flex md:flex ">
            Timeline <hr className="lg:hidden md:hidden block" />{" "}
          </p>
          <div className="lg:hidden md:hidden flex justify-center items-center mx-2">
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>

          <p className="px-4 py-2 text-[#6F7378] lg:flex md:flex hidden">
            Albums
          </p>
          <p className="px-4 py-2 text-[#6F7378] lg:flex md:flex hidden">
            Events
          </p>
          <p className="px-4 py-2 text-[#6F7378] lg:flex md:flex hidden">
            Favorites
          </p>
        </div>
        <button className="flex justify-center items-center bg-[#2E8BFF]  rounded-full text-white px-2 py-1 lg:w-52 w-20">
          <ion-icon size="small" name="add-circle-outline"></ion-icon>
          <p className="px-2 lg:block hidden  ">Upload photos</p>
        </button>
      </div>
      <div className="flex lg:justify-between md:justify-between justify-center text-[#6F7378] my-10">
        <p className="text-[#2E8BFF] font-upright text-7xl font-semibold lg:block md:block hidden">
          Library
        </p>
        <div>
          <input
            className="self-center outline-none rounded-full bg-[#111315] border-[#212325] border-2 bg-search bg-right bg-[length:70px_25px] bg-no-repeat lg:w-96 md:w-96 w-72 sm:w-full px-3 py-3"
            placeholder="Search all photos"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
