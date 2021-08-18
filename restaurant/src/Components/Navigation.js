import { useState, useEffect, useCallback } from "react";
import Booking from "./Booking";



export default (params) => {
  const triggerText = "Open Form";
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };




  const [show, setShow] = useState(true);

  const controllNavbar = () => {
    window.scrollY > 2300 ? setShow(false) : setShow(true);

  };

  useEffect(() => {
    window.addEventListener("scroll", controllNavbar);
    return () => {
      window.removeEventListener("scroll", controllNavbar);
    };
  }, []);

  return (

    <nav className={`nav ${show ? " p-7  w-full fixed animate-fade-in-down ":"p-7  w-full opacity-0 fixed animate-fade-out-down"}`}>

      <div className="">
        <div className="text-lg text-red-700 mr-32 flex flex-col lg:flex-row lg:justify-end  ">
          <a href className=" mr-4">
            Welcome
          </a>
          <a href className=" mr-4">
            About us
          </a>
          <a  className=" mr-4">
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
          


          <Booking className="animate-pulse" triggerText={triggerText} onSubmit={onSubmit} />

        </div>

      </div>
    </nav>
  );
};
