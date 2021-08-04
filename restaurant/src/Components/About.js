import appetizers from "../images/appetizers.jpeg";
export default (params) => {

    return(
        <div className="static ">
            <div className=" font-thin text-black">
                <div className=" p-10 text-center">
            <p className="p-4">UNTILL I DISCOVERED COOKING I WAS NEVER REALLY </p> 
            <p className="" >INTERESTED IN ANYTHING</p>
            </div> 
            </div>
            <div className="mt-32 ml-48 w-1/3">
            <img className src={appetizers} alt="appetizers" />
            </div>
        </div>
    )
}

