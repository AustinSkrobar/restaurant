import Carrots from "../images/Carrots.jpg";
import ZuchiniNoodles from "../images/ZuchiniNoodles.jpg";
import Crossants from "../images/Croissants.jpg";
import brightBerries from "../images/brightBerries.jpg";
import darkBerries from "../images/darkBerries.jpg";
import lettuceWraps from "../images/lettuceWraps.jpg";
export default (params) => {
  return (
      <div id="findus" className=" lg:h-72 grid justify-items-center bg-footerGray md:bg-black-900">
        <div className=" flex flex-wrap lg:flex-row p-4">
          <div className="lg:ml-16 lg:w-1/3 text-white p-4">
            <h1 className="text-xl">Restaurant</h1>
            <h4 className="text-xs">A PLACE TO EAT</h4>
            <p className="flex flex-wrap text-sm w-3/4 py-2 leading-loose">
              Dolor church-key veniam, fap Bushwick mumblecore irure Vice
              consectetur 3 wolf moon sapiente literally quinoa.
            </p>
          </div>

          <div className="text-white text-xl p-4">
            Gallery
            <div className="grid lg:grid-rows-2 lg:grid-flow-col grid-cols-2 grid-flow-row  gap-0 ">
              <img src={Carrots} alt="" />
              <img src={ZuchiniNoodles} alt="" />
              <img src={Crossants} alt="" />
              <img src={brightBerries} alt="" />
              <img src={darkBerries} alt="" />
              <img src={lettuceWraps} alt="" />
            </div>
          </div>
          <div className="flex flex-col lg:ml-32 p-5 text-white leading-loose">
            <h1 className="text-xl ">CONTACT INFO</h1>
            <p className="pt-2 text-sm text-gray-500">
              1402 7th St., El Paso, Texas
            </p>
            <p className="text-sm ">(915) 334-9427</p>
            <p className="text-sm">email@emailaddress.com</p>
            <p className="text-sm text-gray-500">www.yourdomaingoeshere.com</p>
          </div>
        </div>
        <div className="w-screen bg-black text-white pt-2 pl-5">
          © Copyright information
        </div>
      </div>
  );
};
