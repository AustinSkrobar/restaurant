import Header from "../Components/Header";

export default (params) => {
  return (
    <nav className="p-7 absolute sticky h-0 z-40 top-0 right-10">
      <div className="lg:w-auto">
        <div className="text-sm text-red-700 mr-8 flex justify-center">
          <a href className="  hover:text-red-700 mr-4">
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
          <a href className="  hover:text-red-700 mr-4 border-2">
            Reservation
          </a>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
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
