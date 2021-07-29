import appetizers from "../images/appetizers.jpeg";
export default (params) => {
  return (
    <div className="static ">
      <div className="absolute text-white">
        <p> Until I discovered cooking I was never really interested</p>
      </div>
      <img src={appetizers} alt="appetizers" />
    </div>
  );
};
