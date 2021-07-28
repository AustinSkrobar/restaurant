import { Fragment } from "react"
import dumplings from "../images/dumplings.jpg"



export default (params) => {
   return(
       <div className="static"  >
       <div className="absolute text-white top-60 left-60" > <h3> Welcome to </h3> <h1>Grand Avenue</h1> <p>
       Making to the delicious premium food since 1990</p> <p>Book online or call 1(800)456-6743</p>
       </div>
     
       <img className= " bg-contain bg-center mx-auto w-full " src={dumplings} alt="dumplings"/>
       </div>
   )
}
