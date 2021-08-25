import appetizers from "../images/appetizers.jpeg";
export default (params) => {

    return(
        <div id='about' >
            
            <div className=" font-thin text-black">
                <div className="p-10 text-left lg:text-center">

            <p className="animate-fade-in-down p-4">UNTILL I DISCOVERED COOKING I WAS NEVER REALLY </p> 
            <p className="" >INTERESTED IN ANYTHING</p>
            </div> 
            </div>
            <div className="mt-32 ml-48 w-1/2 lg:w-1/3 pb-10">
            <img className src={appetizers} alt="appetizers" />
            </div>
        </div>
    )
}

