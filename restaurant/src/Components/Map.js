import { useState } from "react";

export default (params) => {
  const [inputData, setInputData] = useState({
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

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        <div className="w-2/5 h-96 mb-5 bg-gray-200">
          <h1>Map Placeholder</h1>
        </div>
        <div className="w-96 h-44 mb-5 flex items-center bg-red-600 transform -translate-x-20 translate-y-10">
          Branch Center
        </div>
      </div>
      <div className="grid grid-rows-2 justify-center">
        <div>1.800.456.6743 - contact@grandrestaurant.com</div>
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
            <label className="border p-1 w-44">
              <input type="date" data-date-inline-picker="true" placeholder="Date" name="date" onChange={handleChange} />
            </label>
          </div>
          <div className="flex flex-row p-5">
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
            
              <input type="time" placeholder="Time" name="time" className="border p-1 w-44" onChange={handleChange} />
            
          </div>
          <div className="p-5 flex flex-row w-44">
            
            <label className="border p-1 flex flex-row">
            
              <input type="number" placeholder="Seats" name="people" onChange={handleChange} />
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
