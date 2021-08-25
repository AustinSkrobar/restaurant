import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default (params) => {
  const [inputData, setInputData] = useState({
    names: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    specialRequest: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    let name = e.target.name;
    setInputData((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You clicked submit");
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const triggerText = "Open Form";
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
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
    <div
      className={`${
        modalIsOpen &&
        "fixed bg-black bg-opacity-70 h-screen w-screen flex items-center justify-center"
      }`}
    >
      {modalIsOpen && (
        <div className="flex flex-col border h-xl w-xl lg:w-1/2 lg:h-5/6  ">
          <button
            className="text-white w-full flex text-lg justify-start p-5"
            onClick={setModalIsOpenToFalse}
          >
            x
          </button>
          <div className="flex lg:flex-col">
            <p className="flex justify-center font-cursiveText text-2xl lg:text-4xl text-white italic">
              Booking
            </p>
            <p className="flex justify-center text-4xl lg:text-5xl font-thin text-white">
              Table
            </p>
          </div>

          <form
            className="flex flex-wrap w-full justify-center items-center lg:grid grid-cols-3 grid-rows-4 "
            onSubmit={handleSubmit}
          >
            <div className="lg:p-5 flex flex-col w-44 order-1">
              <p className="text-white">NAME*</p>
              <label className="border p-1 flex flex-row w-44">
                <input
                  type="text"
                  className=""
                  name="names"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="p-5 flex flex-col w-44 order-2">
              <p className="text-white">EMAIL*</p>
              <label className="border p-1 flex flex-row w-44">
                <input
                  type="text"
                  className=""
                  name="email"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="lg:p-5 flex flex-col w-44 order-3">
              <p className="text-white">PHONE*</p>
              <label className="border p-1 flex flex-row w-full lg:w-44">
                <input
                  type="text"
                  className=""
                  name="phone"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="flex flex-col p-5 w-44 order-4">
              <p className=" text-white">DATE</p>
              <label className="border p-1 w-44">
                <input
                  className="w-full"
                  type="date"
                  data-date-inline-picker="true"
                  placeholder="Date"
                  name="date"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="flex flex-col p-5 order-5">
              <p className=" text-white">TIME</p>
              <label className="border p-1 flex flex-row w-44">
                <input
                  type="time"
                  placeholder="Time"
                  name="time"
                  className="w-44"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="p-5 flex flex-col order-6">
              <p className=" ">SEATS</p>
              <label className="border p-1 flex flex-row w-44">
                <input
                  type="number"
                  name="people"
                  onChange={handleChange}
                  className="w-44"
                />
              </label>
            </div>
            <div className="col-start-1 col-end-4 row-start-3 row-end-3 px-5 flex flex-col w-full order-7">
              <p className="flex justify-center text-white lg:pb-2">
                SPECIAL REQUESTS
              </p>
              <label className="border p-1 lg:w-full ">
                <input
                  type="text"
                  className="w-full lg:py-14"
                  name="specialRequest"
                  onChange={handleChange}
                />
              </label>
            </div>
            <input
              className=" order-8 lg:col-start-2 lg:col-end-3 lg:row-start-4 lg:row-end-4 text-xs h-10 bg-gray-900 text-white lg:mb-14 m-2 p-2"
              type="submit"
              value="BOOK NOW"
            />
          </form>
        </div>
      )}
      {!modalIsOpen && (
        <>
          <nav
            className={`nav ${
              show
                ? " bg-black bg-opacity-60 p-7 w-screen fixed animate-fade-in-down text-white"
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
                      className="px-3 py-2 flex items-center text-lg font-bold leading-snug  hover:opacity-75"
                      href="#pablo"
                    >
                      <i className="text-lg leading-lg  opacity-75"></i>
                      <span className="ml-2">Welcome</span>
                    </a>
                  </Link>
                  <Link to="about" className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-lg font-bold leading-snug  hover:opacity-75"
                      href="#pablo"
                    >
                      <i className=" text-lg leading-lg  opacity-75"></i>
                      <span className="ml-2">About Us</span>
                    </a>
                  </Link>
                  <Link to="menu" className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-lg font-bold leading-snug  hover:opacity-75"
                      href="#pablo"
                    >
                      <i className=" text-lg leading-lg  opacity-75"></i>
                      <span className="ml-2">Menu</span>
                    </a>
                  </Link>
                  <Link to="gallery" className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-lg font-bold leading-snug  hover:opacity-75"
                      href="#pablo"
                    >
                      <i className=" text-lg leading-lg  opacity-75"></i>
                      <span className="ml-2">Gallery</span>
                    </a>
                  </Link>
                  <Link to="findus" className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-lg font-bold  leading-snug  hover:opacity-75"
                      href="#pablo"
                    >
                      <i className=" text-lg leading-lg  opacity-75"></i>
                      <span className="ml-2">Find Us</span>
                    </a>
                  </Link>
                  <button
                    className="px-3 py-2 flex items-center text-lg font-bold  leading-snug  hover:opacity-75"
                    onClick={setModalIsOpenToTrue}
                  >
                    Reservations
                  </button>
                </ul>
              </div>
            </div>
          </nav>
        </>
      )}
    </div>
  );
};
