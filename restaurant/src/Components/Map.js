import { useState, useEffect} from "react";
import mapImg from '../images/Screen Shot 2021-08-03 at 12.22.45 PM.png'

export default (params) => {
  const [inputData, setInputData] = useState({
    date: "",
    time: "",
    people: "",
  });

  const [show, setShow] = useState(false);

  const controllMap = () => {
    if (window.scrollY > 3800) {
      console.log(window.scrollY)
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
        <div className="w-2/5 h-96 mb-5">
          <img src={mapImg} />
        </div>
        <div className={`w-96 h-52 mb-5 flex flex-col bg-red-600 transform -translate-x-20 translate-y-10 ${show ? "animate-boxerfader" : " "} p-4 hover:shadow-2xl `}>
          <h4 className="font-cursiveText text-4xl text-white italic transform translate-y-3">Branch</h4>
          <h2 className="text-5xl font-thin text-white mb-1">Center</h2>
          <p className="text-sm text-white">Restaurant Name</p>
          <p className="text-sm text-white">0000 7th St., El Paso, Texas</p>
          <p className="text-sm text-white">361.987.6543</p>
        </div>
      </div>
      <div className="grid grid-rows-2 justify-center">
        <div>1.800.456.6743 - contact@youremailhere.com</div>
        <form className=" grid grid-cols-3 grid-rows-2" onSubmit={handleSubmit}>
          <div className="flex flex-row p-5 w-44">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 m-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              /> 
            </svg>*/}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 m-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              >
              <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg> */}

            <label className="text-center mt-2 ml-2 border p-1 w-44">
              <input className="text-center "
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
          <div className="p-5 flex flex-row w-44">
            <label className="border p-1 flex flex-row">
              <input
                type="number"
                placeholder="Seats"
                name="people"
                onChange={handleChange}
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
          <input
            className="col-start-2 col-end-3 row-start-2 row-end-2 my-7 text-xs bg-black text-white"
            type="submit"
            value="Find A Table"
          />
        </form>
      </div>
    </div>
  );
};
