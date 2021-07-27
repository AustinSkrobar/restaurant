import { Signature, LunchSets, Dinner } from "./index";
import mainChefMenu from "../images/mainChefMenu.jpg";
import data from "../data.json";
import saltedChicken from '../images/saltedChicken.jpg'
import salmonSteak from '../images/Shakshouka-Tanya-Zouev-150x150.jpg'
import crabCurry from '../images/Kimchi-Ramen-35-1024x682-150x150.jpg'

export default (params) => {
  const signature = data[0];
  const lunch = data[1];
  const dinner = data[2];

  signature.Signature[0].pic = saltedChicken
  signature.Signature[1].pic = salmonSteak
  signature.Signature[2].pic = crabCurry
 
   
 
  

  return (
    <div className="w-full flex-col">
      <div className="overflow-hidden flex justify-center py-5">
        <div className="h-96 w-full">
          <img
            className="w-full transform -translate-y-96"
            src={mainChefMenu}
            alt="header for chefs menu"
          />
        </div>
      </div>

      <div className="py-5 flex flex-col">
        <Signature signatureData={signature.Signature} />
        <LunchSets lunchData={lunch.LunchSets} />
        <Dinner dinnerData={dinner.Dinner} />
      </div>
    </div>
  );
};
