import { useState, useEffect } from "react";
import mapImg from "../images/Screen Shot 2021-08-03 at 12.22.45 PM.png";

export default (params) => {
  const [inputData, setInputData] = useState({
    date: "",
    time: "",
    people: "",
  });

  const [show, setShow] = useState(false);

  const controllMap = () => {
    if (window.scrollY > 3800) {
      console.log(window.scrollY);
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controllMap);
    return () => {
      window.removeEventListener("scroll", controllMap);
    };
  }, [controllMap]);

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

  return (
    <div className="py-10">
      <div className="flex flex-wrap justify-center">
        <div className="bg-Map flex w-5/6 lg:w-2/5 h-96 mb-5 p-5 md:p-0 border">
          <div
            className={`absolute lg:relative lg:w-96 h-52 mb-5 flex flex-col lg:right-36 bg-red-600 ${
              show && "animate-boxerfader"
            } p-4 hover:opacity-0`}
          >
            <h4 className="font-cursiveText text-4xl text-white italic">
              Branch
            </h4>
            <h2 className="text-5xl font-thin text-white mb-1">Center</h2>
            <p className="text-sm text-white">Restaurant Name</p>
            <p className="text-sm text-white">0000 7th St., El Paso, Texas</p>
            <p className="text-sm text-white">361.987.6543</p>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-2 justify-center">
        <div>1.800.456.6743 - contact@youremailhere.com</div>
        <form
          className=" lg:grid grid-cols-3 grid-rows-2"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col lg:flex-row p-5 w-44">
            <label className="text-center  border pt-2 w-44">
              <input
                className="text-center "
                type="date"
                data-date-inline-picker="true"
                placeholder="Date"
                name="date"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className=" flex flex-row p-5">
            <input
              type="time"
              placeholder="Time"
              name="time"
              className="border p-1 w-44"
              onChange={handleChange}
            />
          </div>
          <div className="p-5 flex flex-row">
            <label className="border p-1 flex flex-row">
              <input
                type="number"
                placeholder="Seats"
                name="people"
                onChange={handleChange}
              />
            </label>
          </div>
          <input
            className="col-start-2 col-end-3 row-start-2 row-end-2 m-7 p-2 text-xs bg-black text-white"
            type="submit"
            value="Find A Table"
          />
        </form>
      </div>
    </div>
  );
};
