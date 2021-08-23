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

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="">
      <button className="animate-pulse px-3 py-2 flex items-center text-lg font-bold  leading-snug text-red-100 hover:opacity-75" onClick={setModalIsOpenToTrue}>Reservations</button>

      <div
        className={`${modalIsOpen && "fixed z-50 transform translate-x-full"}`}
      >
        {modalIsOpen ? (
          <div className="">
            <div className="flex flex-col border h-xxl">
              <button
                className="text-white w-full flex justify-start"
                onClick={setModalIsOpenToFalse}
              >
                x
              </button>
              <p className="flex justify-center font-cursiveText text-4xl text-white italic">
                Chef
              </p>
              <p className="flex justify-center text-5xl font-thin text-white">
                MENU
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
                      className="px-2"
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
                      className="px-2"
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
                      className="px-2"
                      name="phone"
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className="flex flex-col p-5 w-44">
                  <p className=" text-white">DATE</p>
                  <label className="border p-1 w-44">
                    <input
                      className="px-2"
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
          </div>
        ) : null}
      </div>
      <div
        className={`${
          modalIsOpen &&
          "static z-30 bg-black h-screen w-screen opacity-50 transform -translate-y-12 translate-x-40"
        }`}
      ></div>
    </div>
  );
};
