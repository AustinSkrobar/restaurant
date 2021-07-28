import appetizers from "../images/appetizers.jpeg"
export default (params) => {
    return(
        <div className="static ">
            <div className="absolute text-white">
            <p className="ml-80"> Until I discovered cooking I was never really interested</p>
            </div>
            <div className="m-80 w-1/3">
            <img className src={appetizers} alt="appetizers" />
            </div>
        </div>
    )
}
