// import { useState } from "react";
import banner from "./banner.jpg";
// import DonationCard from "../../DonationCards/DonationCard";

const Banner = ({  setSearch }) => {
  

  const handleSubmit = (e) => {
    e.preventDefault();
     setSearch (e.target.searchBox.value)
    e.target.searchBox.value =''
  };



  return (
    <div>
      <div
        className="hero md:h-[70vh]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h2 className="mb-5 text-2xl md:text-3xl lg:text-5xl text-center text-[#0B0B0B] font-bold">
              I Grow By Helping People Need{" "}
            </h2>
            <div className="mt-8">
              <form onSubmit={handleSubmit}>
                <input
                  className="rounded-tl-lg rounded-bl-lg w-[180px] md:w-[250px] py-3 px-3 text-[#0B0B0B66]"
                  type="text"
                  name="searchBox"
                  placeholder="Search here..."
                />
                <button
                  type="submit"
                  className="bg-[#FF444A] px-6 py-3 rounded-tr-lg rounded-br-lg hover:bg-lime-400 text-white hover:text-black"
                >
                  Search
                </button>
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
