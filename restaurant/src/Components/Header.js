import { Fragment } from "react"
import dumplings from "../images/dumplings.jpg"


export default (params) => {
   return(
       <Fragment>
            
       <img className= " bg-contain bg-center mx-auto " src={dumplings} alt="dumplings"/>
       </Fragment>
   )
}
