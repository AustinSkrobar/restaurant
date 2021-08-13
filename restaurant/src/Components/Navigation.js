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

  const [show, setShow] = useState(true);

  const controllNavbar = () => {
    if (window.scrollY  < 45 || window.scrollY>2500) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controllNavbar);
    return () => {
      window.removeEventListener("scroll", controllNavbar);
    };
  }, []);

  return (
    <nav
      className={`nav ${
        show
          ? " transition ease-in-out duration-1000 p-7 absolute sticky h-0 z-40 top-0 "
          : " p-7 absolute w-full fixed h-0 "
      }`}
    >
      <div className="lg:w-auto">
        <div className="text-sm text-red-700 mr-32 flex justify-end  ">
          <a href className=" mr-4">
            Welcome
          </a>
          <a href className=" mr-4">
            About us
          </a>
          <a href className=" mr-4">
            Menu
          </a>
          <a href className=" mr-4">
            Gallery
          </a>
          <a href className=" mr-4">
            News
          </a>
          <a href className=" mr-4">
            Find us
          </a>

          <Booking triggerText={triggerText} onSubmit={onSubmit} />

        </div>
      </div>
    </nav>
  );
};
