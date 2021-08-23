export default (params) => {
  return (
    <div id ='welcome' className="static w-screen bg-scroll ">
      <div className="absolute text-white top-40 left-40 lg:top-80 lg:left-72">
        {" "}
        <h3 className="animate-fade-in-down font-cursiveText text-4xl "> Welcome to</h3>
        <h1 className="animate-fade-in-down text-4xl bold">Grand Avenue</h1>{" "}
        <p className="font-thin">
          Making to the delicious premium food since 1990
        </p>{" "}
        <p className="font-thin">Book online or call 1(800)456-6743</p>
      </div>

      <div
        className="bg-header bg-center bg-cover h-xl lg:h-xxl w-screen bg-no-repeat mx-auto "
        alt="dumplings"
        div
      />
    </div>
  );
};
