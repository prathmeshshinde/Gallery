import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [click, setClick] = useState(true);
  const [arch, setArch] = useState(false);
  const [other, setOther] = useState(false);

  const handleClick = () => {
    setClick(true);
    setArch(false);
    setOther(false);
  };

  const handleArch = () => {
    setArch(true);
    setClick(false);
    setOther(false);
  };

  const handleOther = () => {
    setOther(true);
    setArch(false);
    setClick(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center my-10">
        <div className="text-[#6F7378] flex overflow-auto whitespace-nowrap md:w-3/4 w11/12">
          <Link to="/gallery">
            {click ? (
              <p className="p-3 text-white" onClick={handleClick}>
                All photos <hr className="mt-1" />
              </p>
            ) : (
              <p className="p-3 " onClick={handleClick}>
                All photos
              </p>
            )}
          </Link>

          <Link to="/arch">
            {arch ? (
              <p className="p-3 text-white " onClick={handleArch}>
                💰Architecture <hr className="mt-1" />
              </p>
            ) : (
              <p className="p-3  " onClick={handleArch}>
                💰Architecture
              </p>
            )}
          </Link>

          <Link to="/other">
            {other ? (
              <p className="p-3 text-white " onClick={handleOther}>
                🏔️Kashmir <hr className="mt-1" />
              </p>
            ) : (
              <p className="p-3  " onClick={handleOther}>
                🏔️Kashmir
              </p>
            )}
          </Link>

          <p className="p-3">⛵Seaside</p>
          <p className="p-3">🐟Lake view</p>
          <p className="p-3">
            <i class="flag flag-italy"></i> Italy
          </p>
          <p className="p-3">
            <i class="flag flag-china"></i> China
          </p>
          <p className="p-3">
            <i class="flag flag-argentina"></i> Argentina
          </p>
        </div>
        <div className="hidden lg:block md:block ">
          <button className="flex justify-center items-center bg-[#323337]  rounded-full text-[#B7BEC7] px-3 py-1">
            <ion-icon name="add-outline"></ion-icon>New category
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
