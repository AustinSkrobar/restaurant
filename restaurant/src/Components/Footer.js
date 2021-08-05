import Carrots from "../images/Carrots.jpg"
export default (params) => {
  return (
    <div>
      <div className="w-full h-96 flex justify-center bg-footerGray">
        <div className="w-xl flex flex-row p-4">
          <div className="w-1/3 text-white p-4">
            <h1 className="text-xl">Restaurant</h1>
            <h4 className="text-xs">A PLACE TO EAT</h4>
            <p className="text-sm w-3/4 py-2 leading-loose">
              Dolor church-key veniam, fap Bushwick mumblecore irure Vice
              consectetur 3 wolf moon sapiente literally quinoa.
            </p>
            
          </div>
          <div className="w-1/3 text-white text-xl p-4">Gallery</div>
          <div className="w-1/3 p-4">
            <h1 className="text-xl text-white">CONTACT INFO</h1>
            <p className="pt-2 text-sm text-gray-500 leading-loose">1402 7th St., El Paso, Texas </p>
            <p className="text-sm text-white leading-loose">(915) 334-9427</p>
            <p className="text-sm text-white leading-loose">email@emailaddress.com</p>
            <p className="text-sm text-gray-500 leading-loose">www.yourdomaingoeshere.com</p>
          </div>
          
        </div>
      </div>
      <div className="w-full bg-gray-900 text-white">
        © Copyright information
      </div>
    </div>
  );
};
