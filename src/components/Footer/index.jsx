import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="p-6 md:p-10 grid grid-cols-1 gap-y-8 md:grid-cols-5 ">
        <div className="flex mx-4 items-center justify-center ">
          <img src="ytservices.png" alt="logo" className="w-44" />
        </div>
        <div className="flex items-center space-y-6 justify-center flex-col ">
          <a
            href="/"
            className="font-light text-sm text-gray-500 hover:text-gray-800"
          >
            FAQs
          </a>
          <a
            href="/"
            className="font-light text-sm text-gray-500 hover:text-gray-800"
          >
            Contact Us
          </a>
        </div>
        <div className="flex items-center space-y-6 justify-center flex-col">
          <a
            href="/"
            className="font-light text-sm text-gray-500 hover:text-gray-800"
          >
            Privacy Policy
          </a>
          <a
            href="/"
            className="font-light text-sm text-gray-500 hover:text-gray-800"
          >
            Press Kit
          </a>
        </div>
        <div className="flex items-center space-y-6 justify-center flex-col">
          <a
            href="/"
            className="font-light text-sm text-gray-500 hover:text-gray-800"
          >
            Install Quide
          </a>
          <a
            href="/"
            className="font-light text-sm text-gray-500 hover:text-gray-800"
          >
            Contact Us
          </a>
        </div>
        <div className="flex justify-center items-center  space-x-4">
          <div>
            <Facebook />
          </div>
          <div>
            <Instagram />
          </div>
          <div>
            <Twitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
