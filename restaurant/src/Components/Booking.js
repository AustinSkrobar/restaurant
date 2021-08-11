import { useState } from "react";


export default (params) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inputData, setInputData] = useState({
    names: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: "",
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

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button className={`${modalIsOpen && "opacity-0"}`} onClick={setModalIsOpenToTrue}>Reservations</button>
      <div className={`${modalIsOpen && "relative z-20 bg-black h-screen w-screen opacity-50"}`}>
              {modalIsOpen ? (<div className="backdrop-opacity-100">
              <button className="text-white" onClick={setModalIsOpenToFalse}>x</button>
              <div>
              <h1>Table</h1>
              <h1>BOOKING</h1>
              <form
                className=" grid grid-cols-3 grid-rows-4"
                onSubmit={handleSubmit}
              >
                <div className="p-5 flex flex-col w-44">
                  <p className="text-white">NAME*</p>
                  <label className="border p-1 flex flex-row w-44">
                    <input type="text" name="names" onChange={handleChange} />
                  </label>
                </div>
                <div className="p-5 flex flex-col w-44">
                  <p className="text-white">EMAIL*</p>
                  <label className="border p-1 flex flex-row w-44">
                    <input type="text" name="email" onChange={handleChange} />
                  </label>
                </div>
                <div className="p-5 flex flex-col w-44">
                  <p className="text-white">PHONE*</p>
                  <label className="border p-1 flex flex-row w-44">
                    <input type="text" name="phone" onChange={handleChange} />
                  </label>
                </div>
                <div className="flex flex-col p-5 w-44">
                  <label className="border p-1 w-44">
                    <input
                      type="date"
                      data-date-inline-picker="true"
                      placeholder="Date"
                      name="date"
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className="flex flex-col p-5">
                <label className="border p-1 flex flex-row w-44">
                  <input
                    type="time"
                    placeholder="Time"
                    name="time"
                    className="  w-44"
                    onChange={handleChange}
                  />
                  </label>
                </div>
                <div className="p-5 flex flex-col ">
                  <label className="border p-1 flex flex-row w-44 h-10">
                    <input
                      type="number"
                      placeholder="Seats"
                      name="people"
                      onChange={handleChange}
                      className="w-44"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 m-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                </div>
                <div className="col-start-1 col-end-4 row-start-3 row-end-3 p-5 flex flex-col ">
                  <p className="flex justify-center">SPECIAL REQUESTS</p>
                  <label className="border p-1 flex flex-row w-full">
                    <input type="text" className='w-full' name="phone" onChange={handleChange} />
                  </label>
                </div>
                <input
                  className="col-start-2 col-end-3 row-start-4 row-end-4 my-7 text-xs bg-black text-white"
                  type="submit"
                  value="BOOK NOW"
                />
              </form>
              </div>
              
          </div>) : null}
      </div>
    </div>
  );
};
