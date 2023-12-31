import React from "react";
import logo from "../images/Logo.jpg";

function Home() {
  return (
    <>
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="flex rounded-lg md:5/12 lg:w-5/12 max-sm:justify-center">
              <img src={logo} alt="image" className="flex rounded-lg max-sm:w-[170px] " />
            </div>
            <div className="md:7/12 lg:w-6/12 flex flex-col max-sm:items-center ">
              <p className="text-7xl max-sm:text-3xl">Pramod <span className=" text-orange-500">Priya</span> </p>
              <p className="text-7xl max-sm:text-3xl">Seva Samiti</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
