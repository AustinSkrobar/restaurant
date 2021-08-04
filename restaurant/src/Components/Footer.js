import Carrots from "../images/Carrots.jpg"
export default (params) => {
    return (
        <div className="flex flex-row h-80 bg-black bg-opacity-90 border-2">
            <div className="flex flex-col">
                <h1 className=" p-1 text-white">Your </h1>
                <h4 className=" p-1 text-white">Restaurant</h4>
                <p className="p-1 flex flex-wrap text-gray-500">consectetur adipiscing elit ut labore <br /> magna aliqua nostrud exercitation<br />
                sed do eiusmod tempor incididunt <br /> Ut enim ad minim veniam, quis  </p>
            </div>
            <div>
                <img src={Carrots} alt="" />
            </div>
        </div>
    )
}
