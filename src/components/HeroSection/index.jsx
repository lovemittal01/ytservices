import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col w-full items-center justify-center h-fit">
        <div
          className="flex flex-col text-white bg-black w-full h-fit py-7 items-center justify-between"
          style={{
            backgroundImage: `url('images/All in one.jpg')`,
            backgroundSize: "cover", // Ensure the image covers the div
            position: "relative", // Set the position to allow absolute positioning of content
          }}
        >
          {/* Background overlay to decrease opacity */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-80"
            style={{ zIndex: 1 }} // Adjust the z-index as needed
          ></div>

          {/* Content on top of the background image */}
          <div className="relative text-center mx-72 text-5xl font-bold z-10">
            A Content Editing Company for YouTubers, TikTokers and Instagrammers
          </div>

          <div className="relative  z-10 text-center text-base my-7 lg:mx-52 md:mx-44 sm:mx-20">
            Stand out from the crowd with YT-Services, the ultimate video
            editing & thumbnail creation company for content creators on the
            three major platforms. Whether you’re looking to save time by
            outsourcing your editing, or want to boost your online presence with
            high-quality, professional content, we can help you on your path to
            success. We tailor our video editing services specifically to
            YouTube, Instagram and TikTok because we know which type of editing
            drives engagement on each platform!
          </div>

          <button
            type="button"
            className="relative  z-10 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Need Professional Editing? Get in Touch!
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
