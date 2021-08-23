import { useState, useEffect, useCallback } from "react";
import Booking from "./Booking";

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
      className={`${modalIsOpen && "fixed bg-black bg-opacity-50 h-screen w-screen flex items-center justify-center"}`}
    >
      {modalIsOpen && (
          <div className="flex flex-col border w-1/2 h-5/6 items-center">
            <button
              className="text-white w-full flex text-lg justify-start p-5"
              onClick={setModalIsOpenToFalse}
            >
              x
            </button>
            <p className="flex justify-center font-cursiveText text-4xl text-white italic">
              Booking
            </p>
            <p className="flex justify-center text-5xl font-thin text-white">
              Table
            </p>
            <form
              className="grid grid-cols-3 grid-rows-4"
              onSubmit={handleSubmit}
            >
              <div className="p-5 flex flex-col w-44">
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
              <div className="p-5 flex flex-col w-44">
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
              <div className="p-5 flex flex-col w-44">
                <p className="text-white">PHONE*</p>
                <label className="border p-1 flex flex-row w-44">
                  <input
                    type="text"
                    className=""
                    name="phone"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="flex flex-col p-5 w-44">
                <p className=" text-white">DATE</p>
                <label className="border p-1 w-44">
                  <input
                    className=""
                    type="date"
                    data-date-inline-picker="true"
                    placeholder="Date"
                    name="date"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="flex flex-col p-5">
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
              <div className="p-5 flex flex-col ">
                <p className=" text-white">SEATS</p>
                <label className="border p-1 flex flex-row w-">
                  <input
                    type="number"
                    name="people"
                    onChange={handleChange}
                    className="w-44"
                  />
                </label>
              </div>
              <div className="col-start-1 col-end-4 row-start-3 row-end-3 px-5 flex flex-col ">
                <p className="flex justify-center text-white pb-2">
                  SPECIAL REQUESTS
                </p>
                <label className="border p-1 w-full">
                  <input
                    type="text"
                    className="w-full py-14"
                    name="specialRequest"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <input
                className="col-start-2 col-end-3 row-start-4 row-end-4 text-xs h-10 bg-black text-white m-2"
                type="submit"
                value="BOOK NOW"
              />
            </form>
          </div>
      )}
      {!modalIsOpen && (
        <nav
        className={`nav ${
          show
            ? "p-7 w-full fixed animate-fade-in-down "
            : "p-7 w-full opacity-0 fixed animate-fade-out-down"
        }`}
      >
        <div className="text-lg text-red-700 mr-32 flex flex-col lg:flex-row justify-end">
          <a href className=" mr-4">
            Welcome
          </a>
          <a href className=" mr-4">
            About us
          </a>
          <a className=" mr-4">Menu</a>
          <a href className=" mr-4">
            Gallery
          </a>
          <a href className=" mr-4">
            News
          </a>
          <a href className=" mr-4">
            Find us
          </a>
          <button className="flex" onClick={setModalIsOpenToTrue}>
            Reservations
          </button>
        </div>
      </nav>
      )}
      
    </div>
  );
};
