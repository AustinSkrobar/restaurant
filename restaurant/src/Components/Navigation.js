import { useState, useEffect, useCallback } from "react";

import Booking from "./Booking";

import Header from "../Components/Header";

export default (params) => {

  const triggerText = 'Open Form';
   const onSubmit = (event) => {
   event.preventDefault(event);
   console.log(event.target.name.value);
   console.log(event.target.email.value);
 };

  return (
    <nav className={`p-7 absolute sticky h-0 z-40 top-0 right-10 `}>
      <div className="lg:w-auto">
        <div className=" mr-8 flex justify-center">
          <a href="" className=" text-white hover:text-red-700 mr-4">
            Welcome
          </a>
          <a href className="  hover:text-red-700 mr-4">
            About us
          </a>
          <a href className="  hover:text-red-700 mr-4">
            Menu
          </a>
          <a href className="  hover:text-red-700 mr-4">
            Gallery
          </a>
          <a href className="  hover:text-red-700 mr-4">
            News
          </a>
          <a href className="  hover:text-red-700 mr-4">
            Find us
          </a>
          <Booking triggerText={triggerText} onSubmit={onSubmit} />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
          className="text-white hover:text-red-700 mr-4 px-1 border-2"
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg> */}
        </div>
      </div>
    </nav>
  );
};

// export default (params) => {
//    return(
//   <nav className=" p-6">
//   <div className="lg:w-auto">
//     <div className="text-sm lg:flex-grow">
//       <a href className="hover:text-black mr-4">
//        Welcome
//       </a>
//       <a href className=" hover:text-black mr-4">
//         About us
//       </a>
//       <a href className=" hover:text-black mr-4">
//         Menu
//       </a>
//       <a href className=" hover:text-black mr-4">
//        Gallery
//       </a>
//       <a href className="hover:text-black mr-4">
//         News
//       </a>
//     </div>
//   </div>
// </nav>
//    )
// }
