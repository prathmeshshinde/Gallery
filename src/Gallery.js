import React, { useState } from "react";
import Today from "./Today";
import Week from "./Week";

const Gallery = () => {
  const [heart, setHeart] = useState(false);
  const [house, setHouse] = useState(false);
  const [m, setM] = useState(false);
  const [n, setN] = useState(false);
  const [p, setP] = useState(false);
  const [z, setZ] = useState(false);

  const handleHeart = () => {
    setHeart(!heart);
  };

  const handleArch = () => {
    setHouse(!house);
  };

  const handleM = () => {
    setM(!m);
  };
  const handleN = () => {
    setN(!n);
  };
  const handleP = () => {
    setP(!p);
  };
  const handleZ = () => {
    setZ(!z);
  };

  return (
    <div>
      <div className="md:flex lg:flex block">
        <Today />

        <div className="flex flex-wrap md:justify-start justify-center items-end text-center text-[#B7BEC7] text-sm w-11/12">
          <div className="relative">
            <img
              alt="gallery"
              className="md:w-40 md:h-56 w-36 h-48 mt-5 mx-2.5 object-cover rounded-xl block "
              src="Photos/dance.jpg"
            />
            <div
              onClick={handleHeart}
              className="text-red-600 absolute lg:top-5 lg:right-4 md:top-5 md:right-4 top-5 right-5"
              style={{
                color: heart ? "red" : "#212325",
              }}
            >
              {heart ? (
                <ion-icon size="small" name="heart"></ion-icon>
              ) : (
                <ion-icon size="small" name="heart-outline"></ion-icon>
              )}
            </div>

            <p>seg_12399.png</p>
          </div>
          <div className="relative">
            <img
              alt="gallery"
              className="md:w-40 md:h-auto w-36 h-auto mt-5 mx-2.5 object-contain rounded-xl block"
              src="Photos/arch.jpg"
            />
            <div
              onClick={handleArch}
              className="text-red-600 absolute lg:top-5 lg:right-4 md:top-5 md:right-4 top-5 right-5"
              style={{
                color: house ? "red" : "#212325",
              }}
            >
              {house ? (
                <ion-icon size="small" name="heart"></ion-icon>
              ) : (
                <ion-icon size="small" name="heart-outline"></ion-icon>
              )}
            </div>
            <p>New_house_... .jpg</p>
          </div>

          <div className="relative">
            <img
              alt="gallery"
              className="md:w-40 md:h-auto w-36 h-auto mt-5 mx-2.5 object-contain  rounded-xl block"
              src="Photos/kashmir.jpg"
            />
            <div
              onClick={handleM}
              className="text-red-600 absolute lg:top-5 lg:right-4 md:top-5 md:right-4 top-5 right-5"
              style={{
                color: m ? "red" : "#212325",
              }}
            >
              {m ? (
                <ion-icon size="small" name="heart"></ion-icon>
              ) : (
                <ion-icon size="small" name="heart-outline"></ion-icon>
              )}
            </div>
            <p>Barakpore valley.jpg</p>
          </div>

          <div className="relative">
            <img
              alt="gallery"
              className="md:w-40 md:h-56 w-36 h-48 mt-5 mx-2.5 object-cover rounded-xl block"
              src="Photos/kitchen.jpg"
            />
            <div
              onClick={handleN}
              className="text-red-600 absolute lg:top-5 lg:right-4 md:top-5 md:right-4 top-5 right-5"
              style={{
                color: n ? "red" : "#212325",
              }}
            >
              {n ? (
                <ion-icon size="small" name="heart"></ion-icon>
              ) : (
                <ion-icon size="small" name="heart-outline"></ion-icon>
              )}
            </div>
            <p>Kitchen_sansudan.jpg</p>
          </div>

          <div className="relative">
            <img
              alt="gallery"
              className="md:w-40 md:h-auto w-36 h-auto mt-5 mx-2.5 object-cover rounded-xl block"
              src="Photos/bridge.jpg"
            />
            <div
              onClick={handleP}
              className="text-red-600 absolute lg:top-5 lg:right-4 md:top-5 md:right-4 top-5 right-5"
              style={{
                color: p ? "red" : "#212325",
              }}
            >
              {p ? (
                <ion-icon size="small" name="heart"></ion-icon>
              ) : (
                <ion-icon size="small" name="heart-outline"></ion-icon>
              )}
            </div>
            <p>Kitchen_sansudan.jpg</p>
          </div>

          <div className="relative">
            <img
              alt="gallery"
              className="md:w-40 md:h-auto w-36 h-auto mt-5 mx-2.5 object-cover rounded-xl block"
              src="Photos/art.jpg"
            />
            <div
              onClick={handleZ}
              className="text-red-600 absolute lg:top-5 lg:right-4 md:top-5 md:right-4 top-5 right-5"
              style={{
                color: z ? "red" : "#212325",
              }}
            >
              {z ? (
                <ion-icon size="small" name="heart"></ion-icon>
              ) : (
                <ion-icon size="small" name="heart-outline"></ion-icon>
              )}
            </div>
            <p>Abstract_44533.jpg</p>
          </div>
        </div>
      </div>
      <div className="md:flex lg:flex block mt-10">
        <Week />
        <div className="flex flex-wrap md:justify-start justify-center items-end text-center text-[#B7BEC7] text-sm w-11/12">
          <div className="relative">
            <img
              alt="gallery"
              className="md:w-40 md:h-56 w-36 h-48 mt-5 mx-2.5 object-cover rounded-xl block "
              src="Photos/house.jpg"
            />
            <div
              onClick={handleHeart}
              className="text-red-600 absolute lg:top-5 lg:right-4 md:top-5 md:right-4 top-5 right-5"
              style={{
                color: heart ? "red" : "#212325",
              }}
            >
              {heart ? (
                <ion-icon size="small" name="heart"></ion-icon>
              ) : (
                <ion-icon size="small" name="heart-outline"></ion-icon>
              )}
            </div>

            <p>seg_12399.png</p>
          </div>

          <div className="relative">
            <img
              alt="gallery"
              className="md:w-40 md:h-56 w-36 h-48 mt-5 mx-2.5 object-cover rounded-xl block "
              src="Photos/pool.jpg"
            />
            <div
              onClick={handleHeart}
              className="text-red-600 absolute lg:top-5 lg:right-4 md:top-5 md:right-4 top-5 right-5"
              style={{
                color: heart ? "red" : "#212325",
              }}
            >
              {heart ? (
                <ion-icon size="small" name="heart"></ion-icon>
              ) : (
                <ion-icon size="small" name="heart-outline"></ion-icon>
              )}
            </div>

            <p>New_house_... .jpg</p>
          </div>

          <div className="relative">
            <img
              alt="gallery"
              className="md:w-40 md:h-auto w-36 h-auto mt-5 mx-2.5 object-cover rounded-xl block "
              src="Photos/sea.jpg"
            />
            <div
              onClick={handleHeart}
              className="text-red-600 absolute lg:top-5 lg:right-4 md:top-5 md:right-4 top-5 right-5"
              style={{
                color: heart ? "red" : "#212325",
              }}
            >
              {heart ? (
                <ion-icon size="small" name="heart"></ion-icon>
              ) : (
                <ion-icon size="small" name="heart-outline"></ion-icon>
              )}
            </div>

            <p>Barakpore valley.jpg</p>
          </div>

          <div className="relative">
            <img
              alt="gallery"
              className="md:w-40 md:h-56 w-36 h-48 mt-5 mx-2.5 object-cover rounded-xl block "
              src="Photos/pools.jpg"
            />
            <div
              onClick={handleHeart}
              className="text-red-600 absolute lg:top-5 lg:right-4 md:top-5 md:right-4 top-5 right-5"
              style={{
                color: heart ? "red" : "#212325",
              }}
            >
              {heart ? (
                <ion-icon size="small" name="heart"></ion-icon>
              ) : (
                <ion-icon size="small" name="heart-outline"></ion-icon>
              )}
            </div>

            <p>Kitchen_sansudan.jpg</p>
          </div>

          <div className="relative">
            <img
              alt="gallery"
              className="md:w-40 md:h-56 w-36 h-48 mt-5 mx-2.5 object-cover rounded-xl block "
              src="Photos/lake.jpg"
            />
            <div
              onClick={handleHeart}
              className="text-red-600 absolute lg:top-5 lg:right-4 md:top-5 md:right-4 top-5 right-5"
              style={{
                color: heart ? "red" : "#212325",
              }}
            >
              {heart ? (
                <ion-icon size="small" name="heart"></ion-icon>
              ) : (
                <ion-icon size="small" name="heart-outline"></ion-icon>
              )}
            </div>

            <p>Bridge.jpg</p>
          </div>

          <div className="relative">
            <img
              alt="gallery"
              className="md:w-40 md:h-56 w-36 h-48 mt-5 mx-2.5 object-cover rounded-xl block "
              src="Photos/desert.jpg"
            />
            <div
              onClick={handleHeart}
              className="text-red-600 absolute lg:top-5 lg:right-4 md:top-5 md:right-4 top-5 right-5"
              style={{
                color: heart ? "red" : "#212325",
              }}
            >
              {heart ? (
                <ion-icon size="small" name="heart"></ion-icon>
              ) : (
                <ion-icon size="small" name="heart-outline"></ion-icon>
              )}
            </div>

            <p>Bridge.jpg</p>
          </div>

          <div className="relative mt-10">
            <img
              alt="gallery"
              className="md:w-40 md:h-56 w-36 h-48 mt-5 mx-2.5 object-cover rounded-xl block "
              src="Photos/nature.jpg"
            />
            <div
              onClick={handleHeart}
              className="text-red-600 absolute lg:top-5 lg:right-4 md:top-5 md:right-4 top-5 right-5"
              style={{
                color: heart ? "red" : "#212325",
              }}
            >
              {heart ? (
                <ion-icon size="small" name="heart"></ion-icon>
              ) : (
                <ion-icon size="small" name="heart-outline"></ion-icon>
              )}
            </div>

            <p>seg_12399.jpg</p>
          </div>

          <div className="relative mt-10 ">
            <img
              alt="gallery"
              className="md:w-40 md:h-56 w-36 h-48 mt-5 mx-2.5 object-cover rounded-xl block "
              src="Photos/cat.jpg"
            />
            <div
              onClick={handleHeart}
              className="text-red-600 absolute lg:top-5 lg:right-4 md:top-5 md:right-4 top-5 right-5"
              style={{
                color: heart ? "red" : "#212325",
              }}
            >
              {heart ? (
                <ion-icon size="small" name="heart"></ion-icon>
              ) : (
                <ion-icon size="small" name="heart-outline"></ion-icon>
              )}
            </div>

            <p>New_house_... .jpg</p>
          </div>
        </div>
      </div>
      <div>Gallery</div>
    </div>
  );
};

export default Gallery;
