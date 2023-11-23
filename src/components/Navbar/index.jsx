import React, { useState } from "react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <section id="nav">
      <div className="bg-white w-full ">
        {!showMenu && (
          <>
            <div className=" flex justify-between  w-full">
              <div className=" flex px-10 w-full justify-between flex-row lg:space-x-28 md:space-x-24 items-center">
                {/* <!-- logo --> */}
                <div className="">
                  <img src="ytservices.png" alt="logo" className="w-44" />
                </div>
                <div className="w-fit  hidden md:flex items-center lg:space-x-12 md:space-x-6">
                  <a
                    href="/"
                    className="flex flex-row items-center text-black text-base font-bold hover:text-yellow-200"
                  >
                    Video Editing
                    <svg
                      class="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="flex flex-row items-center text-base  text-black font-bold hover:text-yellow-200"
                  >
                    Creative Services
                    <svg
                      class="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-base  text-black font-bold hover:text-yellow-200"
                  >
                    Portfolio
                  </a>
                  <a
                    href="/"
                    className="text-base  text-black font-bold hover:text-yellow-200"
                  >
                    Pricing
                  </a>
                  <a
                    href="/"
                    className="text-base  text-black font-bold hover:text-yellow-200"
                  >
                    Testimonials
                  </a>
                  <a
                    href="/"
                    className="text-base  text-black font-bold hover:text-yellow-200"
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* <!-- hamburger menu --> */}
              <div className="m-10 md:hidden" onClick={() => setShowMenu(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-hover:fill-yellow-200 icon icon-tabler icon-tabler-menu-1"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#9e9e9e"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 6l16 0" />
                  <path d="M4 12l16 0" />
                  <path d="M4 18l16 0" />
                </svg>
              </div>
            </div>
          </>
        )}

        {/* <!-- mobile menu --> */}
        {showMenu && (
          <div className="bg-black rounded-3xl relative flex-col space-y-6 px-10 py-12 items-center justify-center w-full">
            <div className="  flex flex-col space-y-8 items-start justify-center">
              <a
                href="/"
                className="flex flex-row items-center text-xl hover:text-yellow-200 text-white font-medium duration-200 hover:text-grayishViolet"
              >
                Video Editing
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </a>
              <a
                href="/"
                className="flex flex-row items-center text-xl hover:text-yellow-200 text-white  font-medium duration-200 hover:text-grayishViolet"
              >
                Creative Services
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </a>
              <a
                href="/"
                className="text-xl text-white hover:text-yellow-200  font-medium duration-200 hover:text-grayishViolet"
              >
                Portfolio
              </a>
              <a
                href="/"
                className="text-xl text-white hover:text-yellow-200 font-medium duration-200 hover:text-grayishViolet"
              >
                Pricing
              </a>
              <a
                href="/"
                className="text-xl text-white hover:text-yellow-200 font-medium duration-200 hover:text-grayishViolet"
              >
                Contact Us
              </a>
            </div>

            <div
              className="absolute top-1 right-5"
              onClick={() => setShowMenu(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hover:text-yellow-200 icon icon-tabler icon-tabler-square-rounded-x"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#9e9e9e"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10l4 4m0 -4l-4 4" />
                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NavBar;
