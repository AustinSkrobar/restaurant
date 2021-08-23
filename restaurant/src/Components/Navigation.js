import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Booking from "./Booking";

export default (fixed) => {
  const triggerText = "Open Form";
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };

  const [navbarOpen, setNavbarOpen] = useState(false);

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
    <>
      <nav
        className={`nav ${
          show
            ? " bg-black bg-opacity-20 p-7 w-screen fixed animate-fade-in-down "
            : " p-7  w-screen opacity-0 fixed animate-fade-out-down"
        }`}
      >
        <div className="container px-4 mx-auto items-center justify-between">
          <div className="w-screen relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
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
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <Link to="welcome" className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-lg font-bold leading-snug text-red-100 hover:opacity-75"
                  href="#pablo"
                >
                  <i className="text-lg leading-lg text-red-100 opacity-75"></i>
                  <span className="ml-2">Welcome</span>
                </a>
              </Link>
              <Link to="about" className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-lg font-bold leading-snug text-red-100 hover:opacity-75"
                  href="#pablo"
                >
                  <i className=" text-lg leading-lg text-red-100 opacity-75"></i>
                  <span className="ml-2">About Us</span>
                </a>
              </Link>
              <Link to="menu" className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-lg font-bold leading-snug text-red-100 hover:opacity-75"
                  href="#pablo"
                >
                  <i className=" text-lg leading-lg text-red-100 opacity-75"></i>
                  <span className="ml-2">Menu</span>
                </a>
              </Link>
              <Link to="gallery" className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-lg font-bold leading-snug text-red-100 hover:opacity-75"
                  href="#pablo"
                >
                  <i className=" text-lg leading-lg text-red-100 opacity-75"></i>
                  <span className="ml-2">Gallery</span>
                </a>
              </Link>
              <Link to="findus" className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-lg font-bold  leading-snug text-red-100 hover:opacity-75"
                  href="#pablo"
                >
                  <i className=" text-lg leading-lg text-red-100 opacity-75"></i>
                  <span className="ml-2">Find Us</span>
                </a>
              </Link>
              <Booking triggerText={triggerText} onSubmit={onSubmit} />
            </ul>
          </div>
        </div>
      </nav>
    </>
    // <nav className={`nav ${show ? " bg-black bg-opacity-20 p-7 w-full fixed animate-fade-in-down ":"   p-7  w-full opacity-0 fixed animate-fade-out-down"}`}>

    //       <button
    //           className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
    //           type="button"
    //           onClick={() => setburgerOpen(!burgerOpen)}
    //         >
    //           <i className="fas fa-bars"></i>
    //         </button>

    //         <div
    //         className={
    //           "lg:flex flex-grow items-center" +
    //           (burgerOpen ? " flex" : " hidden")
    //         }
    //         id="example-navbar-danger"
    //       ></div>
    //   <div className="">
    //     <div className="text-lg cursor-pointer text-red-100 mr-32 flex flex-col lg:flex-row lg:justify-end  ">
    //       <Link to = 'welcome' className=" mr-4">
    //         Welcome
    //       </Link>
    //       <Link to= 'about' className=" mr-4">
    //         About us
    //       </Link>
    //       <Link to='menu'  className=" mr-4">
    //         Menu
    //       </Link>
    //       <Link to='gallery' className=" mr-4">
    //         Gallery
    //       </Link>
    //       <Link to= 'findus' className=" mr-4">
    //         Find us
    //       </Link>

    //       <Booking className="animate-pulse" triggerText={triggerText} onSubmit={onSubmit} />

    //     </div>

    //   </div>
    // </nav>
  );
};
