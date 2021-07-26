import { Fragment } from "react"
import dumplings from "../images/dumplings.jpg"


export default (params) => {
   return(
       <Fragment>
            
       <img className= "w-full mx-auto px-4" src={dumplings} alt="dumplings"/>
       </Fragment>
   )
}
