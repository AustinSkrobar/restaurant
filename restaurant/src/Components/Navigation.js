
import React, { useState, useEffect } from "react";



export default (params) => {
  const [show, setShow] = useState(true);

  const controllNavbar =()=>{
    if(window.scrollY>100){
      setShow(false)
}else{
  setShow(true)
}
  }

  useEffect(() =>{
   window.addEventListener('scroll',
   controllNavbar)
   return()=>{
     window.removeEventListener('scroll',
     controllNavbar)
   }
  }, [])


  return (
    <nav className={`nav ${show && "p-7 absolute sticky h-0 z-40 top-0 right-50"}`}>
      <div className="lg:w-auto">
        <div className="text-sm text-red-700 mr-32 flex justify-end  active: ">
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

          <a href={Booking} className=" text-white hover:text-red-700 mr-4 px-1 border-2">
            Reservation
          </a>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
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
