import { Fragment } from 'react'
import { Signature, LunchSets, Dinner } from "./index";
import mainChefMenu from '../images/mainChefMenu.jpg'
import { setState } from 'react'
import data from '../data.json'

export default (params) => {
    const dinner = data[2]
    
    return(
       <Fragment>
           <div>
               <h3>Chef Menu</h3>
           </div>
           <img class="w-11/12 "  src={mainChefMenu} />
           {/* <Signature /> */}
           {/* <LunchSets /> */}
           <Dinner dinnerData={dinner.Dinner}/>
       </Fragment>
    )
}