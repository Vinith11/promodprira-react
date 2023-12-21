import React from "react";
import front from "../images/PAN6.jpg"

function Aboutus() {
  return (
    <div id="about-us" className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12 ">
            <img
            className="rounded-lg "
              src={front}
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              About Us
            </h2>
            <p className="mt-6 text-gray-600">
              At our NGO, we believe that every small act of kindness can make a
              significant difference in someone's life. We are proud to be
              making a positive impact on society and are committed to
              continuing our efforts to improve the lives of those in need.
            </p>
            <p className="mt-4 text-gray-600">
              One of our activities was conducting a successful cricket
              tournament in GIT college, which was enjoyed by all participants
              and spectators.
            </p>
            <p className="mt-6 text-gray-600">
              In addition to that, we also actively participated in the pandemic
              response efforts and distributed food to people who were
              struggling to make ends meet during these trying times
            </p>
            <p className="mt-6 text-gray-600">
              Every year, we organize Samuhik Upnayan, an event that celebrates
              and promotes the importance of marriage in our society. This event
              brings together people from all walks of life and creates a sense
              of community spirit and togetherness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
